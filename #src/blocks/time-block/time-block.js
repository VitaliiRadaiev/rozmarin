{
	let timerBlock = document.querySelector('.time-block');
	if(timerBlock) {

		function countdown(dateEnd) {
		  let timer, days, hours, minutes, seconds;

		  dateEnd = new Date(dateEnd);
		  dateEnd = dateEnd.getTime();

		  if (isNaN(dateEnd)) {
		  	console.log( '%c%s', 'color: red;', 'timer error, incorrect date format, use this option - (12/03/2020 02:00:00 AM)')
		    return;
		  }

		  timer = setInterval(calculate, 1000);

		  function calculate() {
		    let dateStart = new Date();
		      dateStart = new Date(dateStart.getUTCFullYear(),
		      dateStart.getUTCMonth(),
		      dateStart.getUTCDate(),
		      dateStart.getUTCHours(),
		      dateStart.getUTCMinutes(),
		      dateStart.getUTCSeconds());
		    let timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

		    if (timeRemaining >= 0) {
		      days = parseInt(timeRemaining / 86400);
		      timeRemaining = (timeRemaining % 86400);
		      hours = parseInt(timeRemaining / 3600);
		      timeRemaining = (timeRemaining % 3600);
		      minutes = parseInt(timeRemaining / 60);
		      timeRemaining = (timeRemaining % 60);
		      seconds = parseInt(timeRemaining);


		      document.getElementById("days").innerHTML = parseInt(days, 10);
		      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
		      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
		      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
		    } else {
		      return;
		    }
		  }

		  function display(days, hours, minutes, seconds) {}
		}

		countdown (timerBlock.dataset.time);
	}
}