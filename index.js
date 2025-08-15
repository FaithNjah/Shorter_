const express = require('express');
const app = express();
const port = 3000;
const routes = require('./Routes/index');
const {connectToDatabase} = require('./Database/database')


app.use(express.json());
app.use('/', routes);

app.get('/', (req,res)=> {
    res.send('hello world')
})

app.listen(port, ()=>{
    connectToDatabase().then(()=>{
        console.log(`server is running on ${port}`)
    })
    
})