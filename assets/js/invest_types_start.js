const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const recommend = document.querySelector("#recommend");
const endPoint= 20;
const select = [];
var sscore=0;
var mbti_score;
var req_score;
var ret = "";
var ts = 0;

function sendAjax(url, data) {

  

  // var data = { 'name': data, 'mbti': };
   data = JSON.stringify(data);
   
   //data에 inputdata를 json형식으로 넣고 이를 xmlhttprequest를 통해 post방식으로 보냅니다.
   var xhr = new XMLHttpRequest();
   xhr.open('POST', url);
   xhr.setRequestHeader('Content-type', "application/json");
   xhr.send(data);
   
   //서버에서 결과가 도착하면 그것을 result div에 입력합니다.
   xhr.addEventListener('load', function () {

      console.log("응답 결과 가져와!:"+(xhr.response));

      ret = xhr.responseText;

      //document.querySelector(".result").innerHTML = xhr.responseText;
   });
}

function goRecommend(){
  
result.style.display="none";
main.style.display="none"; //임시


setTimeout(() => {
  recommend.style.WebkitAnimation = "fadeIn 0.5s";
  recommend.style.Animation = "fadeIn 0.5s";
  setTimeout(() => {
    recommend.style.display="block";
  }, 450);
}, 450);

ts = sscore + mbti_score;

}



function goResult(){
  
  qna.style.display= "none";
  // qna.style.WebkitAnimation = "fadeOut 1s";
  // qna.style.Animation = "fadeOut 1s";
  // var score=0;
  // for(var i=0;i<20;i++){
  //   score+=select[i];
  // }

  var inputdata = { 'name': document.getElementById("name").value, 'score':sscore };
  console.log(inputdata);
  sendAjax('http://localhost:3000/types', inputdata)

  
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 0.5s";
    result.style.Animation = "fadeIn 0.5s";
    setTimeout(() => {
      result.style.display="block";
    }, 450);
  }, 450);
  

  console.log(select);
}

function addAnswer(answerText,qIdx, idx){
  var a = document.querySelector('.answerBox');
  var b = document.querySelector('.qBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  b.style.Animation = "fadeIn 0.5s"
  b.style.WebkitAnimation = "fadeIn 0.5s"
  a.appendChild(answer);
  answer.innerHTML = answerText;
  answer.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');

    for(let i = 0; i<children.length; i++){
      children[i].disabled= true;
      children[i].style.WebkitAnimation = "fadeOut 0.5s";
      children[i].style.Animation = "fadeOut 0.5s";
    }
    b.style.Animation = "fadeOut 0.5s"
    b.style.WebkitAnimation = "fadeOut 0.5s"
    setTimeout(() => {

      //select[qIdx] = idx;
      sscore+=Number(idx);
      console.log(qIdx+"--------"+sscore);
      for(let i=0; i<children.length;i++){
        children[i].style.display='none'
      }
      goNext(++qIdx);
    }, 450);

    }, false);
}

function goNext(qIdx){
  if(qIdx==endPoint){
    goResult();
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint)* (qIdx) + '%';
}

function begin(){
  result.style.display="none";
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.Animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.Animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display= "none";
      qna.style.display="block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
  
  // main.style.display= "none";
  // qna.style.display="block";
}

function calc_mbti_score() {
  
  mbti_score = 0;

  var mbti_text = document.getElementById('mbti').value;
  
  if(mbti_text.indexOf('N') >= 0) {
    mbti_score += 10;
  }

  if(mbti_text.indexOf('S') >= 0) {
    mbti_score += 4;
  }

  if(mbti_text.indexOf('F') >= 0) {
    mbti_score += 8;
  }

  if(mbti_text.indexOf('T') >= 0) {
    mbti_score += 6;
  }

  if(mbti_text.indexOf('P') >= 0) {
    mbti_score += 12;
  }

  if(mbti_text.indexOf('J') >= 0) {
    mbti_score += 2;
  }
}