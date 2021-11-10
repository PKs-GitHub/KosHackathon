const express = require('express');
const app = express();

//post방식으로 데이터를 받을 때 필요한 모듈입니다.
//req에 데이터를 담아줍니다.
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//cors정책을 피하기 위한 모듈
const cors = require('cors')
app.use(cors());

//받은 데이터를 다음과 같이 가공해 json을 통해 클라이언트로 보내줍니다.
app.post('/ajax', function(req,res){
    var mysql      = require('mysql');   //mysql 모듈 사용
    var connection = mysql.createConnection({
      host     : 'localhost',   //서버 주소
      user     : 'root',
      password : '1234',
      database : 'opentutorials'
    });
     
    connection.connect();
    values = req.body.name;
    
    connection.query('INSERT into investor(investorname) VALUES(?)',values, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
     
    connection.end();
  var responseData = `hi ${req.body.name} i'm balmostory`
  res.json(responseData);
})

app.listen(3000, () => {
    console.log('listen t0 3000')
})