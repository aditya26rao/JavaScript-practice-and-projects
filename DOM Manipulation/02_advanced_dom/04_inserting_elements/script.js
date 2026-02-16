// ===============================
// Inserting elements (modern way)
// ===============================
let div = document.querySelector('div');

// ❌ Inserts raw text, not an element
// div.append('<p>Hello</p>'); 

// Create a proper element
// let para = document.createElement('p');
// para.textContent = 'Hello';

// ✅1 Append element at the end
// div.append(para);

// ✅2 Prepend element at the start
// div.prepend(para);

// ✅3 Insert after <div>
/* div.after(para); */

// ✅4 Insert before <div>
/* div.before(para); */


// ===============================
// insertAdjacentElement examples
// ===============================
// 5. Insert at the end inside <div>
// div.insertAdjacentElement('beforeend', para);

// Insert at the start inside <div>
// div.insertAdjacentElement('afterbegin', para);

// Insert before <div>
// div.insertAdjacentElement('beforebegin', para);

// Insert after <div>
// div.insertAdjacentElement('afterend', para);


// ===============================
// Removing elements
// ===============================
// div.remove(); // removes the entire <div> and its children
// div.lastChild.remove(); // removes the last child node inside <div>

// let p = div.children[2];
// console.log(p);
// p.remove();


// ===============================
// Old way to insert/replace nodes
// ===============================
let alpha = document.querySelector('#alpha');
alpha.style.backgroundColor = 'blue';

let parentNode = alpha.parentNode;

// Create three different elements
let newElement1 = document.createElement('div');
newElement1.innerText = 'Hello (append)';
parentNode.appendChild(newElement1);

let newElement2 = document.createElement('div');
newElement2.innerText = 'Hello (replace)';
parentNode.replaceChild(newElement2, alpha);

let newElement3 = document.createElement('div');
newElement3.innerText = 'Hello (insertBefore)';
parentNode.insertBefore(newElement3, parentNode.firstChild);


