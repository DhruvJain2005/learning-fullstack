//console.log("today we learn about events in javascript");

// events in js
// the change in the state of an object is known as an event 
// 1. mouse events (click,double click etc.)
//2. keyboard events(keypress,keyup,keydown)
//3.form events(submit etc)
// 4. print event & many more 

// in our html file     //  THIS IS INLINE EVENTS 
// <button onclick="console.log('button was clicked ');alert('hello')"></button>
// <button ondblclick="console.log('button was clicked ');alert('hello')"></button>
//<div onmouseover="console.log('you are inside div')">this is a box </div>

// EVENT HANDLING IS JS , OR DIRECTLY IN JS FILE 

//  let btn1=document.querySelector("#btn1");
// btn1.onClick=() =>{
//    console.log("btn1 was created");
//    
//    }

// EVENT LISTNERS
// 1. node.addEventListner(event,callback)
// 2. node.removeEventListner(event,callback)
// NOTE* the callback reference should be same to remove 

// EXAMPLE 

// btn1.addEventListner("click", () => {
//   console.log("button was clicked");    
//})