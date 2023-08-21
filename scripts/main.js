// first code
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World"

// // 2nd code
// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//     const mySrc = myImage.getAttribute("src");
//     const width = myImage.getAttribute("width");
//     const height = myImage.getAttribute("height");
//     if (mySrc === "images/firefox-icon.png") {
//         myImage.setAttribute("src", "images/firefox2.png");
//         myImage.setAttribute("style", "width: 500px; height: 300px");
//     } else {
//         myImage.setAttribute("src", "images/firefox-icon.png");
//         myImage.style.width = width;
//         myImage.style.height = height;
//     }
// };

// 3:code
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  