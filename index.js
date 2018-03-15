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
  const array = document.getElementById('grand-node');
  function find(array, criteriaFn) {
    let current = array;
    let next = [];
    while (current) {
      if (criteriaFn(current)) {
        return current;
      }
      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          next.push(current[i]);
        }
      }
      current = next.shift();
    }
    return null
  }
  find(array, function(n){
    
  });

}