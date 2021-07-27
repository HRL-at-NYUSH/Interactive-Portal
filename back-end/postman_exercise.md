## Back-end exercise 
1. Register in MongoDB following the [MongoDB connection setup tutorial](https://github.com/HRL-at-NYUSH/Interactive-Portal#mongodb-connection-setup) - you can skip this step if you have already set up a MongoDB account.
2. Pull most recent changes from main and reach out to Alma if you have any merge conflicts. 
3. Navigate to the back-end folder entering the following command:
```
cd back-end
```
4. Install all required express dependencies by entering the following command:
```
npm install
```
5. Start the back-end server by entering the following command:
```
npm start
```
You should see the line 'Connected to the MongoDB database' in your terminal after this command.

6. Open your browser and navigate to the path [http://localhost:4000/login](http://localhost:4000/login).

7. Click on the link 'Authenticate here' and sign in with your nyu gmail address. If you successfully complete this step, you should see a welcome message and be redirected to the path [http://localhost:4000/good](http://localhost:4000/good).

8. Your account information should be now stored in the MongoDB database. To check if you completed steps correctly, please do the following steps:
- Sign in to MongoDB using your nyu email address
- Navigate to Almazhan's Org, Cluster 0. 
- Then, navigate to the 'Collections' tab and choose the 'mockdata' collection. 
- Inside the 'mockdata' collection, choose the 'usersG' subcollection.
- Finally, inside the 'usersG' subcollection, you should be able to see a user object with your provided nyu email address (see an example account below):

[example object image](./images/example_object.png)
