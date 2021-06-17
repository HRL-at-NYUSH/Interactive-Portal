## Front-end notes

## Week 1:

Welcome to the HRL Development team! You are contributing to a high impact project with potentially hundreds of users from NYU Shanghai community and beyond! This will look great on your CV and you can always show the evidence of your work to the employees and/or graduate schools ^-^ Good luck!

View git workflow recorded tutorial, install React and complete the exercise. For troubleshooting, reach out to Alma or Sarah.

## Week 2:

**Mock JS data**

Mock JS data is uploaded in the [utils]() folder - you can start playing with the data!
There are two files: MockNonGeo.js and MockGeo.js. <br/>
MockNonGeo.js contains data without geospatial information (no latitude, longitude info) and MockGeo.js contains geospatial information.

To view a sample React file that includes components and imports the data, take a look at the SampleDataUse.js file and visit the SampleDataUse route (you can find it on the menu panel of the React app). Firstly, to import the data, include the following lines in your javascript file:

const { dataNonGeo } = require('../utils/MockNonGeo.js')

const { dataGeo } = require('../utils/MockGeo.js')

Then, you can call/modify the data inside your component. One particular use of the mock data is provided in the DataDisplay component - selected key-value pairs (from MockGeo.js and MockNonGeo.js files) are displayed using the map function.

**Resources**

The following articles might be helpful:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React official documentation](https://reactjs.org/).
- [React Components I](https://www.robinwieruch.de/react-function-component)
- [React Functional Components from geeksforgeeks](https://www.geeksforgeeks.org/reactjs-functional-components/)
- [How to use React components](https://www.infoworld.com/article/3603276/how-to-use-react-functional-components.html)

Let Alma and Sarah know if you have any questions! If you have React/JS/setup related questions, reach out to Alma and if you have graph/visualization/D3/JS related questions, reach out to Sarah ^-^
