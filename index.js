function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild(){
  let array = document.getElementById('grand-node');
    let next = [];
    while (current) {
      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          next.push(current[i]);
        }
      }
      current = next.shift();
    }
    return null
  }
  

}