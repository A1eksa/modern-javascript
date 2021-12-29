const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
  console.log('My content!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', (e) => {
  //   console.log(e);
  //   console.log(e.offsetX, e.offsetY);
  box.textContent = `x- ${e.offsetX} y- ${e.offsetY}`;
});

document.addEventListener('wheel', (e) => {
  console.log(e.pageX, e.pageY);
});

const button = document.querySelector('button');
const ul = document.querySelector('ul');
// //event listener needs 2 params
button.addEventListener('click', () => {
  //   console.log('clicked');
  //   ul.innerHTML += '<li>something new todo</li>';
  const li = document.createElement('li');
  li.textContent = 'something netw todo';
  //   ul.append(li);
  ul.prepend(li);
});

// ul.remove();

const items = document.querySelectorAll('li');

//items.forEach((item) => {
//item.addEventListener('click', (e) => {
//console.log('event in LI');
//propagation stops bubbling and firing call back in UL!!
// e.stopPropagation();
// console.log('clicked li');
//browser assignes e to event listeners
// console.log(e);
///e.target gives you a specific li that is clicked
// console.log(e.target);
//does the same as e.target
// console.log(item);
// e.target.style.textDecoration = 'line-through';
//removes the item after putting event listener and clicking
//e.target.remove();
//});
//});

ul.addEventListener('click', (e) => {
  //   console.log('event in UL');
  console.log(e.target);
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

// console.log(1);
// console.log(2);

//takes the first p
// const para = document.querySelector('p');
// console.log(para.innerText);

// para.innerText += ' aleksa is awesome';

// const paras = document.querySelectorAll('p');
// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += ' aleksa is the best';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h3>This is the new content</h3>';

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
//to chenge link ---->
// link.setAttribute('href', 'https://udemy.com');
//to chenge description in link---->
// link.innerText = 'Udemy classes';

// const paras = document.querySelectorAll('p');
// paras.forEach((p) => {
//   if (p.textContent.includes('error')) {
//     p.classList.add('error');
//   }
//   if (p.innerText.includes('success')) {
//     p.classList.add('success');
//   }
// });
