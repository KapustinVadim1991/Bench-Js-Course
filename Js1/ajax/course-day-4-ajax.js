"use strict";

const cards = document.querySelector(".cards");
const url = "https://restcountries.com/v3.1/all";

// ----------- AJAX -------------
// async function getSome() {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Response status is ", response.status);
//     }

//     const json = await response.json();

//     json.forEach(({ flags: { svg }, name: { official }, capital, region }) => {
//       cards.insertAdjacentHTML(
//         "beforeend",
//         `
//       <div>
//         <p>Country: ${official}</p>
//         <p>Capital: ${capital}</p>
//         <p>Region: ${region}</p>
//         <img src="${svg}" alt="image">
//       </div>
//       `
//       );
//     });
//   } catch (error) {
//     console.error("Error occurred: ", error.message ?? error);
//   }
// }

// ----------- Promise -------------
// function getSome() {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Response status is ", response.status);
//       }
//       return response.json();
//     })
//     .then((json) => {
//       json.forEach(
//         ({ flags: { svg }, name: { official }, capital, region }) => {
//           cards.insertAdjacentHTML(
//             "beforeend",
//             `
//         <div>
//           <p>Country: ${official}</p>
//           <p>Capital: ${capital}</p>
//           <p>Region: ${region}</p>
//           <img src="${svg}" alt="image">
//         </div>
//         `
//           );
//         }
//       );
//     })
//     .catch((error) => {
//       console.error("Error occurred: ", error.message ?? error);
//     })
//     .finally(() => console.log("Request is finished."));
// }

// getSome();

// -------------------- AJAX POST -----------------

const postUrl = "https://jsonplaceholder.typicode.com/posts";
const user = { name: "John", city: "London" };

// async function sendPost(url, user) {
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });

//     if (!response.ok) {
//       throw new Error(
//         "Error of the post request. Status is " + response.status
//       );
//     }

//     return await response.json();
//   } catch (error) {
//     console.error(error);
//   }
// }

// sendPost(postUrl, user).then((result) => console.log(result));

// ------------- Promise POST ---------

fetch(postUrl, {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("Post request is finished"));
