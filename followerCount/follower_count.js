let c = 0;
function check() {
    if (c == 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (c == 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }
function displayCount() {
    document.getElementById('countDisplay').innerHTML=c; // Display the count in the HTML
    }
function increaseCount(){
    c++;
    displayCount();
    check();
}