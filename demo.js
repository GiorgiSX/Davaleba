// Accessing Nodes
let elementById = document.getElementById("myElement");
let elementsByClass = document.getElementsByClassName("myClass");
let elementsByTag = document.getElementsByTagName("div");
let elementByQuery = document.querySelector("#myElement");


// Traversing Parents, Children, and Siblings
let parent = element.parentNode;
let children = parent.childNodes;
let firstChild = parent.firstChild;
let lastChild = parent.lastChild;
let nextSibling = element.nextSibling;
let previousSibling = element.previousSibling;



// Iterating Through Node Lists
let elements = document.getElementsByClassName("myClass");
Array.from(elements).forEach(element => {

    console.log(element.textContent);
});
