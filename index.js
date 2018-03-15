function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 
 var numNum = 0;
  for (let i = 0; i < lis.length; i++) {
    numNum = parseInt(lis[i]);
    lis[i].innerHTML = numNum + n;
  }
}