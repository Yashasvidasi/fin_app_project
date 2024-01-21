function cal(){
   let l = parseFloat(document.getElementById('length').value)
   let b= parseFloat(document.getElementById('width').value)
   let a = l*b
   document.getElementById('result').innerText = `The area of the rectangle is: ${a}`;
}

