$(document).ready (function (){
var answer = function() {for (var n = 1; n <= 100; n++)
{
	if (n % 3 == 0 && n % 15 != 0) {
		document.write("fizz <br />");
	}
	else if (n % 5 == 0 && n % 15 !=0) {
		document.write("buzz <br />");
	}
	else if (n % 15 == 0) {
		document.write("fizzbuzz <br />");
	}
	else {
		 document.write(n + "<br />" );
	}
};}
$("#fizzbuzzbutton").mousedown(function(){
	$(answer).prependTo(".answer");
	console.log("working")
})
})