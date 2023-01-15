//Promises

//1. Navigate to https://codepen.io/sean-noroff/pen/ExZYggr

//2. Edit the code so that the value of the resolution of the promise is appended to the DOM in a <p> element

//from codepen
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This message will appear after one second");
    }, 1000);
  });
  
  myPromise
  .then(value => console.log(value))
  .catch(err => console.log(err));