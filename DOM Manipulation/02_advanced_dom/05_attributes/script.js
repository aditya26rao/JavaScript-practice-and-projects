// Select the first element with class="box"
let div = document.querySelector('.box')

// ✅ Get the value of the "title" attribute
console.log(div.getAttribute('title'))  
// O/P: "This is div"

// ✅ Set a new attribute "id" with value "divBox"
console.log(div.setAttribute('id','divBox'))  
// O/P: undefined (because setAttribute doesn’t return the value, it just sets it)

// ✅ Log all attributes of the element
console.log(div.attributes);  
/* O/P: NamedNodeMap {
   0: class="box",
   1: title="This is div",
   2: id="divBox",
   length: 3
} */

// ✅ Access attribute by name
console.log(div.attributes.id.value);  
// O/P: "divBox"

// ✅ Access attribute by index (index 2 = id attribute)
console.log(div.attributes['2']);  
// O/P: id="divBox"
