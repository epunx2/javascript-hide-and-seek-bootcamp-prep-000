function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  const firstList = lis[0]
  const secondList = lis[1]

  let children = firstList.children
  for (let i = 0; i < children.length; i++) {
    lis[i].innerHTML = parseInt(children[i]) + n;
  }
}