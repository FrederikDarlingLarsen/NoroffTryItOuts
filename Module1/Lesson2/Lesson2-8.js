//Async / Await

//1. Navigate to https://codepen.io/sean-noroff/pen/jOyNMwZ

//2. Modify the load() function to return two posts from the API instead of a single post (use https://jsonplaceholder.typicode.com/posts/2)

//3. Use two await calls in the load() function

//from codepen
async function load() {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const post = await resp.json();    
      return post;
    } catch(e) {
      console.error(e);
    }
  }
  
  load()
  .then(p => console.log(p));