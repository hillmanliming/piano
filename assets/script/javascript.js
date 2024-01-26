let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});








let nameLength = document.getElementById("name")
nameLength.addEventListener("keyup", () => {
document.getElementById("name-length").innerHTML = nameLength.value.length
})

let subjectLength = document.getElementById("subject")
subjectLength.addEventListener("keyup", () => {
document.getElementById("subject-length").innerHTML = subjectLength.value.length
})

let messageLength = document.getElementById("message")
messageLength.addEventListener("keyup", () => {
document.getElementById("message-length").innerHTML = messageLength.value.length
})


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
      "template_o7u169n", params).then((alert("Email sent!"))
    )
  let inputs = document.querySelectorAll(".clear")
  inputs.forEach(input => { input.value = ''});
  // let txt = document.querySelectorAll(".length")
  // txt.innerHTML = "0"
  document.getElementById("name-length").innerHTML = "0"
  document.getElementById("subject-length").innerHTML = "0"
  document.getElementById("message-length").innerHTML = "0"
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














