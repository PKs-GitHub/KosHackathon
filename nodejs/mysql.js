var mysql      = require('mysql');   //mysql 모듈 사용
var connection = mysql.createConnection({
  host     : 'localhost',   //서버 주소
  user     : 'root',
  password : '1234',
  database : 'opentutorials'
});
 
connection.connect();
values = ['kinam','11111100000'];

connection.query('INSERT into investor(investorname,investortype) VALUES(?,?)',values, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();