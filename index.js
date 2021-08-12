const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
// IMPORTANT BECAUSE WE WILL BE DEPLOYING TO A REMOTE MACHINE, AND DO NOT KNOW WHAT PORT IT SHOULD USE
const port = process.env.PORT || 1234;

app.use(cors())
app.use(express.json())

app.use('/api/*', (req, res) => {
    res.json({data: "The api is running"})
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