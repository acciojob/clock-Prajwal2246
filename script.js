//your JS code here. If required.
function updateTimer(){
	const timer = document.querySelector("#timer");
	const now = new Date();
	timer.textContent = now.toLocaleString();
}

updateTimer();

setInterval(updateTimer,1000);