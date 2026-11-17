function show() {
  let ans = confirm("really wanna go?");
  if (ans) {
    alert("you click it!!");
  } else {
    alert("bruh");
  }
}

function updateClock() {
  const time = new Date();
  const h = time.getHours().toString()
  const mit = time.getMinutes().toString()
  const sec =time.getSeconds().toString()
  const showclock = document.querySelector(".clock h1")
  showclock.textContent = h+":"+mit+":"+sec
  console.log(typeof(h+mit+sec))
  console.log(showclock)
}

setInterval(updateClock, 1000);

