let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

function sendMail(){
 (function(){
  emailjs.init(QzVx1feoLPuZn9-QX); //account public key
 })();

 var params = {
  sendername: document.querySelector("#sendername").value,
  subject: document.querySelector("#subject").value,
  message: document.querySelector("#message").value

 };

 var serviceID = "service_i36re8v" //email service id
 var templateID = "template_o7u169n"  // email template id

 emailjs.send(serviceID, templateID, params)
 .then ( res =>{
  alert("Email sent successfully!")
 })
 .catch()
}