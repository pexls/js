


const btn = document.getElementsByTagName('body');

let x = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[x];
  btn.style.color = 'white';

  x = x >= colors.length - 1 ? 0 : x + 1;
});




































// window.onclick = myFunction;
// let x =1
// let y =2

// function myFunction() {
//   switch(onclick) {
//     case x>=1 :
//       document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
//       break;
//     case y >=2:
//       document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";
//       break;
//     default:
      
//   }
//   // document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
// }


// window.onclick = myFunction;

// function myFunction() {
//   document.getElementsByTagName("BODY")[1].style.backgroundColor = "red";
// }



// window.onclick = myFunction;

// function myFunction() {
//   document.getElementsByTagName("BODY")[2].style.backgroundColor = "blue";
// }




// window.onclick = myFunction;

// function myFunction() {
//   document.getElementsByTagName("BODY")[3].style.backgroundColor = "black";
// }