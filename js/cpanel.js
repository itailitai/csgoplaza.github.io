function rcon () {
	document.getElementById("status").className='animated fadeOut';
	document.getElementById("status").style.display='none';
	document.getElementById("rcon").style.display='block';
	document.getElementById("rcon").className='animated fadeIn';
}




function send() {
	
	var msgarea = document.getElementById("console");
var feed = document.getElementById("consolearea");
  var inside = feed.innerHTML;
  msg = msgarea.value;
  msgarea.value = "";
  if (msg !== "" && msg !== " " && msg !== "") {
    feed.innerHTML = inside + "<br>"+ msg  ;
  }
}


