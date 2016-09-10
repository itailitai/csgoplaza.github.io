var white = document.querySelectorAll("[fill=white]");
var l = white.length, i;
var div=document.getElementById("name");
var info=document.getElementById("info");
var currentLocation;
for( i=0; i<l; i++) {
  white[i].onmouseover = function()
  { 
	  div.innerHTML=this.id;
	  document.getElementById("countryname").innerHTML=this.id;
	  currentLocation=this.id;
};

white[i].onmouseout = function()
  {
	  div.innerHTML="";  
	  
};
white[i].onclick = function()
  {
	  info.style.display='block';
	  info.className='animated fadeIn';
	  document.getElementById("countryname").style.animation='fadein 3s';
	  document.getElementById("countryname").style.animationdelay='2s'; 
};

}
var m=document.getElementsByClassName("hour");
for (j=0; i<m.length;j++)
{
	m[j].onclick = function ()
	{
		document.getElementById("worldmap").style.animation='fadein 2.5s reverse';
		document.getElementById("subtitle").style.animation='fadein 2.5s reverse';
		
		
		setTimeout( temp, 2500 );
		
		
		
		
	};
}



function temp(){
	
	document.getElementById("choose").style.backgroundColor='white';
	document.getElementById("shop").style.display="block";
	document.getElementById("shop").style.animation='fadein 2s';
	document.getElementById("worldmap").style.display='none';
	document.getElementById("subtitle").innerHTML='Shopping: (2/2)';
	document.getElementById("subtitle").style.animation='fadein 5.5s';
	
	
	
	document.getElementById("location").innerHTML=currentLocation;
	
}



