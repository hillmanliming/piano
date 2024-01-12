
// let resizeTimer;
// window.addEventListener("resize", () => {
//   document.body.classList.add("resize-animation-stopper");
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     document.body.classList.remove("resize-animation-stopper");
//   }, 400);
// });


let sendName = document.querySelector("#name");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");
let submitButton = document.querySelector("#send-button");

function sendMail(){
  let params = {
    name : document.getElementById("name").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
    }
    emailjs.send(
      "service_i36re8v",
      "template_o7u169n", params). then((alert("Email sent!"))
    )
}

/**
 * 
 * Form
 */

const refs = {
  form: document.body.querySelector("[data-form]"),
  inputs: [...document.body.querySelectorAll("[data-form-input]")],
  submit: document.body.querySelector("[data-form-submit]")
}


const validate = () => {
  let isValid = true;

  for (let index = 0; index < refs.inputs.length; index++) {
    switch (refs.inputs[index].dataset.formInput) {
      case 'name': {
        if (refs.inputs[index].value.length < 2 || refs.inputs[index].value.length > 9) {
          isValid = false;
          refs.inputs[index].style.border = '2px solid red';
        } else {
          refs.inputs[index].style.border = '2px solid black';

        }
        break;
      }
      case 'subject': {
        if (!refs.inputs[index].value) {
          isValid = false;
        }
        break;
      }
      case 'message': {
        if (!refs.inputs[index].value) {
          isValid = false;
        }
        break;
      }
    }
  }

  refs.submit.disabled = !isValid;
}

const handleChange = () => {
  validate();
}

const handleSubmit = (event) => {
  event.preventDefault();

  for (let index = 0; index < refs.inputs.length; index++) {
    console.log(refs.inputs[index].dataset.formInput, refs.inputs[index].value);
  }
}

/**
 * Events
 */
for (let index = 0; index < refs.inputs.length; index++) {
  refs.inputs[index].addEventListener("keydown" || "keyup", handleChange);
}

refs.form.addEventListener("submit", handleSubmit)

validate()







let form = document.querySelector("form")






