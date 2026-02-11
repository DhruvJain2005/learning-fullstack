// window objwct

// window object reperesents an open window in a browser . it is browser object & automaticallu=y created by browser 

// it is global object with lot of properties and methods 

// DOM MEANS : document object model : when a web page is loaded, the browser creates a DOM of the page
//  we use dom dynamic changes in our page

// in the given below we can access our html through javascrpit file
// console.dir(document.body);
// console.log(document.body);

// document.body.backgroundColor="black";


// DOM MANIPULATION :  

// 1 . selecting with ID 
//     document.getElementById("myId")

// let heading=document.getElementById("heading");
// console.dir(heading);

// 2  . selecting with class
//  document.getElementsByClassName("myClass");

// let heading=document.getElementsByClassName("heading");
// console.dir(heading);

// 3  . selecting with tag
// document.getElementsByTagName("p")

// let para=document.getElementsByTagName("p");
// console.dir(para);

//  QUERY SELECTOR 

// basically query selector is a combination of all upper methods  

// 1  . document.queryselector("myId/myClass/tag")
   //  returns first element

// let element=document.querySelector("p");
// console.dir(element);     //  it gives first element from all


// // 2  .  document.queryselectorAll("myId/myClass/tag")
//    //  returns .NodeList

// let allelements=document.querySelectorAll("p");
// console.dir(allelements);



// DOM MANIPULATION : PROPERTIES

// 1. tagName : return tag for element nodes
// 2. innerText: return the text content of the element and all its children
// 3. innerhTML : returns the plain text or HTML contents in this element
// 4. textContent: returns textual content even for hidden elements
