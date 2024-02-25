const doc = document.getElementById("root");

const data = () => "hello world";

async function callApi() {
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

callApi(); // skip this line

console.log("2. after calling the api");
