import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../css/pages/Profile.css";
import Tabs from "../components/Tabs";

const Profile = () => {
  const data = {
    user: {
      name: "Adam Smith",
    },
    sessionHistory: [
      { date: "2020-10-24", tabs: 2, note: "Birthplace - Women" },
      { date: "2020-10-25", tabs: 2, note: "Birthplace - Women + Men" },
      {
        date: "2020-10-27",
        tabs: 3,
        note: "Birthplace - Women + Men（Playground)",
      },
      {
        date: "2020-10-30",
        tabs: 2,
        note: "Birthplace & Literacy - Women + Men",
      },
    ],
    savedCharts: [
      { title: "Chart Title #1" },
      { title: "Chart Title #2" },
      { title: "Chart Title #3" },
      { title: "Chart Title #4" },
      { title: "Chart Title #5" },
      { title: "Chart Title #6" },
      { title: "Chart Title #7" },
    ],
  };

  return (
    <>
      <Header />
      <div className="home">
        <h2 className="header-text">Profile page </h2>
        <div className="block">
          <Tabs>
            <div label="Preferences">
              <section>
                <h2>Profile</h2>
                <p>
                  Welcome, <b>{data.user.name}</b>!
                </p>
              </section>
              <section>
                <h2>Edit</h2>
                <div>
                  <button>Change Your Email</button>
                  <button>Change Your Password</button>
                </div>
              </section>
              <section>
                <h2>Accessibility</h2>
                <div>
                  <button>Toggle High Contrast Display</button>
                </div>
              </section>
            </div>

            <div label="Session History">
              <table>
                <tr>
                  <th>Date</th>
                  <th>Tabs</th>
                  <th>Note</th>
                </tr>
                {data.sessionHistory
                  // sort the history in descending order
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((session, i) => (
                    <tr key={`session-${i}`}>
                      <td>{session.date}</td>
                      <td>{session.tabs}</td>
                      <td>{session.note}</td>
                    </tr>
                  ))}
              </table>
            </div>

            <div label="Saved Charts">
              <div className="chart-container">
                {data.savedCharts.map((chart, i) => (
                  <div key={`chart${i}`} className="chart-element">
                    <div className="chart-hover">{chart.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Profile;
