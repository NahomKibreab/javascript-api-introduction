const doc = document.getElementById("root");

const data = () => "hello world";

function callApiWithoutAwait() {
  // API call using .then() method
  fetch("https://api.github.com/users/nahomkibreab")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.login);
    });
}

async function callApiUsingAsyncAwait() {
  // API call using async/await
  const rawData = await fetch("https://api.github.com/users/nahomkibreab");
  const data = await rawData.json();

  doc.innerHTML = data.login;

  const myImage = document.createElement("img");
  myImage.src = data.avatar_url;
  doc.appendChild(myImage);

  console.log(data);

  console.log("inside the callApi function");
}

// before calling the api
console.log("1. before calling the api");

callApiWithoutAwait(); // skip this line because it's a promise function
callApiUsingAsyncAwait(); // skip this line becayse it's an promise function

console.log("2. after calling the api");
