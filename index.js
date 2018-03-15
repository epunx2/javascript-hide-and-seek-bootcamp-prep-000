function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children

  for (let i = 0; i < lis.length; i++) {
    children[i].innerHTML = numStr + strNum;
  }

}