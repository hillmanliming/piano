
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// function sendMail(){
//   let params = {
//     name : document.getElementById("name").value,
//     subject : document.getElementById("subject").value,
//     message : document.getElementById("message").value,
//     }
//     emailjs.send(
//       "service_i36re8v",
//       "template_o7u169n", params). then((alert("Email sent!"))
//     )
// }

let form = document.getElementById("form")
form.addEventListener("submit", function (e){
  e.preventDefault()
  let params = {
    name : document.getElementById("name").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value,
    // email : document.getElementById("email").value,
    }
    emailjs.send(
      "service_i36re8v",
      "template_o7u169n", params). then((alert("Email sent!"))
    )
    let inputs = document.querySelectorAll(".clear")
   inputs.forEach(input => { input.value = ''
   });
})
// function handleForm (e){
//   e.preventDefault()
//   let params = {
//     name : document.getElementById("name").value,
//     subject : document.getElementById("subject").value,
//     message : document.getElementById("message").value,
//     email : document.getElementById("email").value,
//     }
//     emailjs.send(
//       "service_i36re8v",
//       "template_o7u169n", params). then((alert("Email sent!"))
//     )
// }

/**
 * 
 * Form
 */

// const refs = {
//   form: document.body.querySelector("[data-form]"),
//   inputs: [...document.body.querySelectorAll("[data-form-input]")],
//   submit: document.body.querySelector("[data-form-submit]")
// }


// const validate = () => {
//   let isValid = true;

//   for (let index = 0; index < refs.inputs.length; index++) {
//     switch (refs.inputs[index].dataset.formInput) {
//       case 'name': {
//         if (refs.inputs[index].value)
//         break;
//       }
//       case 'subject': {
//         if (!refs.inputs[index].value) {
//           isValid = false;
//         }
//         break;
//       }
//       case 'email': {
//         if (!refs.inputs[index].value) {
//           isValid = false;
//         }
//         break;
//       }
//       case 'message': {
//         if (!refs.inputs[index].value) {
//           isValid = false;
//         }
//         break;
//       }
//     }
//   }

//   if (refs.submit.disabled = !isValid){
// submit.classList.add("start-listen")
//   }
// }

// const handleChange = () => {
//   validate();
// }

// const handleSubmit = (event) => {
//   event.preventDefault();

//   for (let index = 0; index < refs.inputs.length; index++) {
//     console.log(refs.inputs[index].dataset.formInput, refs.inputs[index].value);
//   }
// }

// /**
//  * Events
//  */
// let form = document.querySelector("form")
// for (let index = 0; index < refs.inputs.length; index++) {
//   refs.inputs[index].addEventListener("keydown", handleChange);
// }

// refs.form.addEventListener("submit", handleSubmit)

// validate()














