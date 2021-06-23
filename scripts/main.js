const pendings = document.getElementById("notDone")
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image7.jpg') {
      myImage.setAttribute('src','images/donat2.jpg');
    } else {
      myImage.setAttribute('src','images/image7.jpg');
    }
}

pendings.addEventListener("mouseover", () => {
  alert("sorry, not yet");
})


const mainLink = document.getElementsByClassName("main-link")
const sections = document.getElementsByClassName("sections")
for (let i= 0; i<sections.length; i++) {
  sections[i].addEventListener("mouseover", () => {
    mainLink[i].style.backgroundColor = "tomato";
  })
  

}



