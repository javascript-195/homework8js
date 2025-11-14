//დავალება 1:


//DOM Selector-ების მეშვეობით დაამუშავეთ შემდეგი დავალება:

//<div class="container">
  //<h1>This is a heading</h1>
  //<p>Veggies es <span>bonus vobis</span>, proinde vos 
  // postulo essum magis kohlrabi welsh onion daikon amaranth
  //  tatsoi tomatillo melon azuki bean garlic.</p>
  //<h2>A level 2 heading</h2>
  //<p>Gumbo beet greens corn soko endive gumbo gourd. Parsley
  //  shallot courgette tatsoi pea sprouts fava bean collard greens 
  // dandelion okra wakame tomato. Dandelion cucumber earthnut pea 
  // peanut soko zucchini.</p>
//</div>

// დავალება 2


const h1 = document.querySelector("h1");
h1.style.color = "blue";


const h2 = document.querySelector("h2");
h2.style.backgroundColor = "blue";
h2.style.color = "white";


const spanText = document.querySelector("span");
spanText.style.fontSize = "200%";


const idElements = document.querySelectorAll('[id]');
idElements.forEach(el => {
  el.style.backgroundColor = 'yellow';
});


const alertElements = document.querySelectorAll('.alert');
alertElements.forEach(el => {
  el.style.border = '1px solid gray';

  
  if (el.classList.contains('stop')) {
    el.style.backgroundColor = 'red';
  }

  
  if (el.classList.contains('go')) {
    el.style.backgroundColor = 'green';
  }
});