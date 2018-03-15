function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  
  
  let numStr = 0;
  let strNum = n;

  for (let i = 0; i < lis.length; i++) {
    numStr = lis[i];
    numStr = parseInt(numStr);
    lis[i].innerHTML = numStr + strNum;
  }

}