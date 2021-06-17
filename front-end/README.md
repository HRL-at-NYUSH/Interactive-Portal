## Front-end notes

## Week 1:

Welcome to the HRL! Welcome to the HRL Development team! You are contributing to a high impact project with potentially hundreds of users from NYU Shanghai community and beyond! This will look great on your CV and you can always show the evidence of your work to the employees ^-^ Good luck!

View git workflow recorded tutorial, install React and complete the exercise. For troubleshooting, reach out to Alma or Sarah.

## Week 2:

**Mock JS data**

Mock JS data is uploaded in the [utils]() folder - you can start playing around with the data!
There are two files: MockNonGeo.js and MockGeo.js.

MockNonGeo.js contains data without geospatial variables (no latitude, longitude information) and MockGeo.js contains geospatial variables.

To view how to export and use the data, visit the page SampleDataUse and take a look at the SampleDataUse.js file. Firstly, to import the data, include the following lines in your javascript file:

const { dataNonGeo } = require('../utils/MockNonGeo.js')
const { dataGeo } = require('../utils/MockGeo.js')

Then, call the data inside your component. One particular use of the mock data is provided in the DataDisplay component, when we display all items (using map function) in the arrays inside the MockNonGeo and MockGeo files.

**Resources**

The following articles might be helpful:

- [React Components](https://www.robinwieruch.de/react-function-component)
- [React Functional Components](https://www.geeksforgeeks.org/reactjs-functional-components/)
- [How to use React components](https://www.infoworld.com/article/3603276/how-to-use-react-functional-components.html)

Let Alma and Sarah know if you encounter any questions ^^
