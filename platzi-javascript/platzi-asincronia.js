/* 1-Promises 

Estados:
- pending
- fullfilled
- rejected

Callbacks:
- resolve
- reject
*/

/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccessful = true;
    if (operationSuccessful) {
      resolve("La operacion exitosa");
    } else reject("Fallo la operacion");
  }, 2000);
});

promise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  }); 
  
  function fetchData() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}*/

/* 2-Async y Await */
/*  
async function fetchData() {
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
*/

/* const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() {
  try {
    for await (let url of urls) {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchNewData();
 */

/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json()) 
  .then((data) => console.log(data)); */

function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

async function fetchPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log(responseData);
  const listOfPosts = responseData;
}

fetchPosts();
