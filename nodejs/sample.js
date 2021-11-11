// var http = require('http');

// // 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
// var url = require('url');
// // 2. 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
// var querystring = require('querystring'); 
// var server = http.createServer(function(request,response){
//     // 3. 콘솔화면에 로그 시작 부분을 출력
//  //   console.log('--- log start ---');
//     // 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
//     var parsedUrl = url.parse(request.url);
//    // console.log(parsedUrl);
//     // 5. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
//     var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
//     //console.log(parsedQuery);
//     // 6. 콘솔화면에 로그 종료 부분을 출력
//    // console.log('--- log end ---');

//     response.writeHead(200, {'Content-Type':'text/html'});
//     console.log('before');
//     console.log(parsedQuery);
//    // console.log(querystring);
//    // response.end('var1의 값은 '+parsedQuery.name+ 'var2의 값은 '+parsedQuery.typeeee);
//     console.log('after');
//    // console.log(parsedQuery.type);
//    // response.end('var1의 값은 '+parsedQuery.name+ 'var2의 값은 '+parsedQuery.type);
    
// });


// server.listen(8080, function(){
//     console.log('Server is running...');
// });

var http = require('http');

// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
var url = require('url');
// 2. 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require('querystring'); 

var server = http.createServer(function(request,response){
    // 3. 콘솔화면에 로그 시작 부분을 출력
    console.log('--- log start ---');
    // 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
    var parsedUrl = url.parse(request.url);
    console.log(parsedUrl);
    // 5. 객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
    //var parsedQuery = querystring.parse(parsedUrl.query,'&','=');
    var parsedQuery = new URLSearchParams(parsedUrl.query);
    console.log(parsedQuery);
    console.log(parsedQuery.get('name'));
    // 6. 콘솔화면에 로그 종료 부분을 출력
    console.log('--- log end ---');

    response.writeHead(200, {'Content-Type':'text/html'});
    //response.end('이름은 '+parsedQuery.get('name'));


    var mysql      = require('mysql');   //mysql 모듈 사용
    var connection = mysql.createConnection({
      host     : 'localhost',   //서버 주소
      user     : 'root',
      password : '1234',
      database : 'opentutorials'
    });
     
    connection.connect();
    values = [parsedQuery.get('name')];
    
    connection.query('INSERT into investor(investorname) VALUES(?)',values, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    });
     
    connection.end();
    
 
});

server.listen(8080, function(){
    console.log('Server is running...');
});