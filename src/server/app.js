const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')
require('./SampleApp')

app.use(bodyParser.json())

const SampleApp = mongoose.model('sample')

const mongoseUri = 'mongodb+srv://SampleApp:9ilXxzkeZiRkcRH5@cluster0-txvlk.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(mongoseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('connected mongoose');  
})

mongoose.connection.on('error', (err) => {
    console.log('error', err);  
})

app.get('/', (req,res) => {
    SampleApp.find({}).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err); 
    })
})

app.post('/send-data' ,(req,res) =>{
    const employee = new SampleApp({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        position: req.body.position,
        following: req.body.following,
        followers: req.body.followers,
        status: req.body.status,
        profilePicture: req.body.profilePicture,
        coverPicture: req.body.coverPicture,
        bloodGroup: req.body.bloodGroup,
        gender:req.body.gender,
        donationDate:req.body.donationDate
    })
    employee.save()
    .then(data => {
        console.log(data);
        res.send(data)
    }).catch(err => {
        console.log(err);    
    })    
})

app.post('/update' ,(req,res) => {
    SampleApp.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        position: req.body.position,
        following: req.body.following,
        followers: req.body.followers,
        status: req.body.status,
        profilePicture: req.body.profilePicture,
        coverPicture: req.body.coverPicture,
        bloodGroup:req.body.bloodGroup,
        gender: req.body.gender,
        donationDate:req.body.donationDate
    }).then(data => {
        console.log(data);
        res.send(data)   
    }).catch(err => {
        console.log(err);    
    })
})

app.listen(3000, ()=> {
    console.log('server is running!');    
})


