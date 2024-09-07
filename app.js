function hello(){
	console.log("hello")
}
// setTimeout -> 1 udaa ajillana
setTimeout(hello,2000);
// setInterval -> hyzgaargui ajillana
// setInterval(hello,1000);
// define
var time = document.getElementsByTagName('h1')[0];
var second=0, minute=0, hour=0, doil=0;
var ol=document.getElementsByTagName('ol')[0];
// function
function watch(){
doil++
	if(doil==100){
		second++;
		doil=0;
		if(second==60){
			minute++;
			second=0;
				if(minute==60){
					hour++;
					minute=0;
					}
		}
	}
	// ternary operator  ?:
	var d = doil<10 ? "0" + doil : doil ;
	var s = second<10 ? "0"+second : second;
	var m = minute<10 ? "0"+ minute: minute ;
	var h = hour<10 ? "0" +hour : hour ;
	time.innerText = h+":"+m+":"+s+":"+d;
}
var up;
function start(){
	up=setInterval(watch,10);
}
// clearInterval
function stop(){
	clearInterval(up);
}
function restart(){
	ol.innerText=""
	second=0;
	minute=0;
	hour=0;
	doil=0;
	time.innerText="00:00:00:000"
	clearInterval(up);
}
function lap(){
	// shineer tag uusgeh :	document.createElement('tagName');
	var li = document.createElement('li');
	li.innerText=(time.innerText)
	// .append() -> tag dotor uur tag nemne
	ol.append(li);
}