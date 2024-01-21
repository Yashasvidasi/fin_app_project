function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    alert('Thank you for your valuable feedback');
    
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });

function fun(){
    document.getElementById("wtf").textContent = "yamete kudasai";
}
function fun2(){
    document.getElementById("wtf").textContent = document.getElementById("ch").value;
}
function fun3(){
    document.getElementById("wtf").textContent = document.getElementById("ch").value;
}


const test = document.getElementById("ch");
test.onchange = fun3;
const div = document.getElementById("hoverarea");
const submitButton=document.getElementById('submitBtn');
div.onmouseover = fun;
div.onmouseout = fun2;

submitButton.onclick = submitFeedback;
