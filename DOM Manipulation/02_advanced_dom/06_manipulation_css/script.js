let div = document.querySelector('div')

// ✅ Method 1: Using setAttribute
// Directly sets attributes like "class" or "style"
div.setAttribute('class', 'redBg')
div.setAttribute('style', 'font-size:50px;padding:9px')

// ✅ Method 2: Using the style property
// Allows setting individual CSS properties one by one
div.style.fontSize = '50px'
div.style.padding = '9px'
div.style.backgroundColor = 'red'

// ✅ Method 3: Using cssText
// Overwrites the entire inline style declaration
div.style.cssText = 'color:blue; font-weight:bold;'

// ✅ Method 4: Using className and classList
// Replaces all classes with a new one
div.className = 'blueBg'
console.log(div.className) // logs "blueBg"

// Adds a class without removing others
div.classList.add('redBg')

// Adds another class (appends, doesn’t replace)
div.classList.add('blueBg')

// Removes a class if present
div.classList.remove('redBg')

// Checks if a class exists
let isAvailable = div.classList.contains('redBg')
console.log(isAvailable) // true or false

// Toggles a class (adds if missing, removes if present)
div.classList.toggle('redBg')
