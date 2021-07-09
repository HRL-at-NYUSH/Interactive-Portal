## How to Build Session History

**User Requirements**
* User will be able to save 6 charts and retrieve them during future sessions
* User will be able to return to their work the next time they log in

**General Sources**
* [Intro to React Database Connections](https://www.youtube.com/watch?v=HVdMhKN2ng4)
* [How to use Axios with React](https://www.digitalocean.com/community/tutorials/react-axios-react)
* [React + Node + Express + MongoDB Example](https://bezkoder.com/react-node-express-mongodb-mern-stack/)
* [How to render dynamic component defined in React](https://www.storyblok.com/tp/react-dynamic-component-from-json)
* [Custom User Data in MongoDB](https://docs.mongodb.com/realm/users/enable-custom-user-data/)
* [MERN Complete Guide from MongoDB](https://www.mongodb.com/languages/mern-stack-tutorial)
* [Server Sessions in MongoDB](https://docs.mongodb.com/manual/reference/server-sessions/)
* [User Session Question on Stack Overflow](https://stackoverflow.com/questions/35970427/only-save-user-session-on-certain-requests)


**MongoDB Schema**

MongoDB represents each user internally with a user object that includes a unique ID, metadata, and custom data fields. We can form our user objects to contain two custom data fields: saved charts and session. This way we can tie the session history directly to each individual user and access it the same way we would access their profile credentials. Below is a sample user schema:

    {
    id: <Unique User ID>,
    user_type: <User Type>,
    data: {
        <Metadata Field>: <Value>,
        ...
    },
    saved_charts: [
        chart_1: [{
            chart_id: '1',
            title: "Chart title",
            type: "BarGraph",
            data: [{
                dataset: "Census",
                xaxis: "Birthplace",
                yaxis: null,
                year: 1850
            }],
            options: [{
                ....
            }]
        }],
        chart_2: [{
            chart_id: '2',
            title: "Chart title",
            type: "CorrelationMatrix",
            data: [{
                dataset: "Census",
                v1: "Birthplace",
                v2: "Bourough",
                year: 1880
            }],
            options: [{
                ....
            }]
        }],
        ...
    ],
    session: [{
        tab_1: [{
            category: "Distribution",
            charts: [{
                chart_id: '9',
                title: "Chart title",
                type: "BarGraph",
                data: [{
                    dataset: "Census",
                    xaxis: "Birthplace",
                    yaxis: null,
                    year: 1850
                }],
                options: [{
                    ....
                }]
            }, {
                chart_id: '10',
                title: "Chart title",
                type: "Histogram",
                data: [{
                    dataset: "Census",
                    xaxis: "Gender",
                    yaxis: null,
                    year: 1870
                }],
                options: [{
                    ....
                }]
             }]
        }]
        ...
    }]
    }

**Frontend to Backend Connection**

Each chart takes the data and rendering style as props. To pull the saved chart into user data + profile page, we can create a component that stores the chart attributes as state and in the database. This component will also fill the dashboard with the appropriate charts according to user interaction. The main idea here is that we are storing the html of a component in the backend as a string and then rerendering it when the user restores the chart. This is the same idea for session; we will store the html that makes up the session as a string in the database then retrieve and rerender the html when the user logs back in/returns to the page. According to my research, axios is the most commonly used library to handle HTTP requests, but we can use whatever library works best. The sample code below is a work in progress. The purpose is to give an idea of how this plan could be structured, but it is not set in stone.

**Sample Code for Saved Charts**

Retrieving requests for use in req.body:

    app.use(express.json());
    app.use(express.urlencoded({ extended: false}));

Grab schema model & create a new instance

    router.post('/save', (req, res) => {
        const data = req.body;
        const newChartData = ChartData(data);

        newChartData.save((error) => {
            if (error) {
                res.status(500).json({ msg: 'Sorry, internal server error'});
            } else {
                res.json({
                    msg: 'Your chart has been saved!'
                });
            }
        });
    });

Save Component

    class SaveChart extends React.Component {
        state = {
            chart_objects: [{
                id: '',
                title: '',
                type: '',
                data: [{...}],
                options: [{...}],
            }]
        };

        handleChange = ({ target }) => {
            const { name, value } = target;
            this.setState(((prevState)) => ({ chart_objects: [...prevState, { [name]: value }]}));

            const payload = {
                title: this.state.title,
                type: this.state.type,
                dataset: this.state.dataset,
                variables: this.state.variables,
                options: this.state.options
            };

            axios({
                url: '/api/save',
                method: 'POST',
                data: payload
            })
              .then(() => {
                  console.log('Data sent to server');
                  this.getSavedCharts();
              })
                .catch(() => {
                    console.log('Server error');
                });          
        };

        handleEdit = ({ target }) => {
            const id = target.id;
            this.setState((prevState) => ({
                chart_objects: [
                    ...prevState.chart_objects.slice(0, id),
                    ...prevState.tabitems.slice(entry + 1),
                ],
            }))
            this.getSavedCharts();
        }

    }

Fetch Saved Charts from MongoDB

    componentDidMount = () => {
        this.getSavedCharts();
    }

    getSavedCharts = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.setState({chart_objects: data});
                console.log('got data');
            })
            .catch(() => {
                console.log('no data);
            });
    }

Display Saved Charts on Profile Page

    displaySavedCharts = (chart_objects) => {
        if (!chart_objects.length) {
            return null;
        } else {
            return (
                chart_objects.map((chart, index) => (
                <div key={index}>
                <{chart.type} label={chart.title} data={chart.data} options={chart.options} />
                </div>
                ));
            );
        }
    };

    render() {
        return (
            <>
            <div className='saved-charts'>
                {this.displaySavedCharts(this.state.chart_objects)}
            </div>
            </>
        )
    }

Restore Chart to Dashboard

This functionality requires use to pass data from one component to another (unrelated) component since the user will restore charts from their profile page and open them up in the dashboard.

There are two "react" ways we could do this:
* Using Redux and maintaining the states of all child components in a global store and getting data from that store
* Using React Context API
* [More information on passing data between components](https://www.pluralsight.com/guides/how-to-pass-data-between-react-components).

Another way we can push a saved chart from user data into the dashboard session is to utilize local storage temporarily. Both the session and the saved charts will already be stored in the database, so the local storage will only be used as a way to transfer the data from one component to another. The basic idea is that when the user clicks "restore" on the profile page, the chart data gets cached into local storage and the page redirects to the dahsboard. At the same time, the dashboard component reads the data from local storage and pushes it into the state.charts array. This would render the chart alongside the other charts already on the page. This would work best if all restored charts only render in Playground tabs as opposed to category specific tabs.

**User Session Storage & Retrieval**

"By default Express requests are sequential and no request can be linked to each other. There is no way to know if this request comes from a client that already performed a request previously. Users cannot be identified unless using some kind of mechanism that makes it possible."

"A session is a total time devoted to the activity. In computer systems, a user session begins when a user logs in to or accesses a particular computer, network, or software service. It ends when the user logs out of the service or shuts down the computer. A session can temporarily store information related to the activities of the user while connected. For example, you can store a unique confidential ID through which your applications know that the user with that particular id performs an activity. Now you don’t want to show this personal ID as it can be misused. Instead of storing large and continuously changing information via cookies in the user’s browser, only a unique identifier is stored on the client-side called a session ID. This session id is passed to the web server every time the browser makes an HTTP request. The web application pairs this session id with its internal database and retrieves the stored variables for use by the requested page."

To assign every user a unique session that allows use to store user state, we can use the [express-session](https://flaviocopes.com/express-sessions/) module. Once this module is installed, all the requests to the app routes will use sessions. The session object can get and set data out of the user session and is stored as JSON.

Another good option that can be used with express-session is [connect-mongo](https://meghagarwal.medium.com/storing-sessions-with-connect-mongo-in-mongodb-64d74e3bbd9c). We can use these modules to get the session data and store it alongside the user's unique ID. Then we can restore this data the next time the user logs in.
