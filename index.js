const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
// IMPORTANT BECAUSE WE WILL BE DEPLOYING TO A REMOTE MACHINE, AND DO NOT KNOW WHAT PORT IT SHOULD USE
const port = process.env.PORT || 1234;
const path = require("path")

// ENV SET FOR HEROKU IN APP/SETTINGS, THIS IS SIMPLY GRABBING IT
const testname = process.env.TESTNAME;

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "client/build")))

app.use('/api/*', (req, res) => {
    res.json({data: "The api is running"})
})

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

console.log('yes it appears that it lives');
console.log(__dirname);
console.log(__filename);
// WOULD BE process.env.USERNAME for windows machines
console.log(process.env.USER);
console.log(process.env.PORT);