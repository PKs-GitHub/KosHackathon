const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint= 20;
const select = [];


function goResult(){
  qna.style.display= "none";
  // qna.style.WebkitAnimation = "fadeOut 1s";
  // qna.style.Animation = "fadeOut 1s";
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

      select[qIdx] = idx;
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