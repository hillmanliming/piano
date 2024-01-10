let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

function sendMail(){
  let params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
    }
    emailjs.send(
      "service_i36re8v",
      "template_o7u169n", params). then((alert("Email sent!"))
    )
}

let sendName = document.querySelector("#name");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");
let submitButton = document.querySelector("#send-button");

subject.disabled = true; //setting button state to disabled
message.disabled = true; 
submitButton.disabled = true; 

sendName.addEventListener("change", stateHandle);
subject.addEventListener("change", stateHandle2);
message.addEventListener("change", stateHandle3);
// (parseInt(sendName.value).length < 3)
function stateHandle() {
    if  (sendName.value === ""){
        subject.disabled = true; //button remains DISabled
    } else {
        subject.disabled = false; //button is ENabled
    }
}

function stateHandle2() {
  if (subject.value === "") {
      message.disabled = true; //button remains disabled
  } else {
      message.disabled = false; //button is enabled
      
  }
}

function stateHandle3() {
  if ((sendName.value === "") || (subject.value === "") || (message.value === "")) {
      submitButton.disabled = true; //button remains disabled
  } else {
      submitButton.disabled = false; //button is enabled
  }
}


