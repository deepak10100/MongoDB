const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sample').then(()=>{
    console.log('connectected successfully')
}).catch((err)=>{
    console.log(err)
})
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  
});

const MyModel = new mongoose.model('Ticket', BlogPost);
const add = async ()=>{
    // const ss = await MyModel.create({
    //     title:"deepak kumar",
    //     body:"my name deepak",
    // })
    const ss = await MyModel.find()
    console.log(ss)
}
add()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})