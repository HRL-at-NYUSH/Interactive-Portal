# Server installation

1. In the terminal, go to the 'back-end' directory
```
cd back-end
```

2. Create a file named .env <br>
Inside the file, put the following line: 
```
SCRIPT_API_ID=script_id
```
script_id is API ID. For example, if script_id is 12345, then .env will contain the following line:

```
SCRIPT_API_ID=12345
```

3. In the terminal, run 'npm install' (current directory is back-end)
```
npm install
```

4. In the terminal, run 'npm start' (current directory is back-end)
```
npm start
```
<br>
Note that you have to close the tab, stop the server and start it again every time you make changes to the code

5. After successful start, in the browser, go to [http://localhost:3000](http://localhost:3000/) to check the sample GET request to the home page <br>
Go to the [http://localhost:3000/search-page](http://localhost:3000/search-page) to check the sample GET request to the search page

6. In the browser, go to [http://localhost:3000/example-api](http://localhost:3000/example-api) to check the GET request to the API


# Installed dependencies
**Express** - Node.js library for server interaction<br>
**Axios** - Node.js library for API interaction<br>
**Dotenv** - Node.js library for Authentication<br>

