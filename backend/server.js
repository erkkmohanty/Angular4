var express=require('express')
var cors=require('cors')
var bodyParser=require('body-parser')
var mongoose=require('mongoose');
var app= express()


var User=require('./models/User');

var posts=[
    {message: 'hello'},
    {message: 'hi'}
]

app.use(cors())
app.use(bodyParser.json())

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/register',(req,res)=>{
    var userData =req.body;
    

    var user=new User(userData);

    user.save((err,result)=>{
        if(err){
            console.log(err);
        }
        res.sendStatus(200);
    })
    
})

mongoose.connect('mongodb://test:test%40123@ds253831.mlab.com:53831/pssocial1',{ useNewUrlParser: true },(err)=>{
    if(!err){
        console.log('Connected to mongo');
    }
})

app.listen(3000)