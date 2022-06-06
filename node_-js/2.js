// var Event= require('events');
// var  emitter=new Event();
var s =require('./1');
// function me(){

//     console.log("6");
//     emitter.emit('a')

// };



//     emitter.on('a',function (){

//         console.log("ok");
//         });

    



// me();

// var g=6;

// s();


// a=s();
// a();

// console.log(f);


// var http =require('http');
// var url =require('url');

// var server =http.createServer((req,res)=>{
// parseurl=url.parse(req.url,true);
// pp=parseurl.pathname;
// console.log(pp);



// p=parseurl.query;
// console.log(p);




// res.write('2');
// res.end();
// });

// server.listen(3000,()=>{console.log("uuj")
// });






var express = require('express')

var app = express() // the main app
var a = express()

app.set('view engine', 'ejs');
app.get('/opp', function (req, res) {
    


    res.send('app')
  })
app.use('',a)
app.listen(3000,console.log("port working")
);

app.get('/', function (req, res,next) {

  res.send('home')


  next();
  })

app.get('/k', function (req, res) {
    
console.log("gg");
res.end('')

})




// app.get('/op', function (req, res) {
    


//     res.send('op')
//   })

// app.get('/o', function (req, res) {
    


//     res.send('app')
//   })


// a.get('/o', function (req, res) {
    


//     res.send('admin')
//   })
//   a.get('/opp', function (req, res) {
    


//     res.send('admin')
//   })


