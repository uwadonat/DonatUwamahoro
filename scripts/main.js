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

pendings.addEventListener("hover", () => {
  alert("sorry, not yet");
})


