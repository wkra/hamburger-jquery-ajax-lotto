$(document).ready(function() {
	
	// html
	$("body").prepend('<div class="container"></div>');
	$(".container").append('<h1>jQuery + ajax + hamburger + lotto</h1>');
	$(".container").append('<section class="first"></section>');
	$(".container").append('<section class="second"></section>');
	$(".container").append('<section class="third"></section>');
	
		//first
	$(".first").append("<nav></nav>")
	$(".first nav").append($("<h3></h3>").text("Formularz"));
	$(".first").append('<article></article>')
	$(".first article").append('<form class="myform"></form>');
	$(".myform").append('<input class="form-control myInput type="text" placeholder="wpisz text">')
	$(".first article").append("<br>");
	$(".first article").append('<div class="myInput1"><p></p></div>')
	$(".first article").append('<div class="myInput2"><p></p></div>')
	
	
		//second
	$(".second").append("<nav></nav>")
	$(".second nav").append('<h3>jQuery ajax</h3>');
	$(".second").append("<article></article>");
	$(".second article").append('<nav></nav>');
	$(".second article nav").append('<div class="btn-group"></div>')
	$(".second article").append('<br>');
	$(".second article").append('<div class="innerHTML""></div>');
	$(".second article").append('<div class="adjacentHTML"></div>')
	
		//third
	$(".third").append("<nav></nav>")
	$(".third nav").append('<h3>Lotto</h3>');
	$(".third").append("<article></article>");
	
		// btns
	for (i=0;i<4;i++){
		var files = ["file1.txt", "file2.html", "file3.html", "file4.xml"];
		var btn1 = '<button class="btn btn-primary myBtn" href="'
		var btn2 = '">Button</button>'
		var btn11 = '<button class="btn btn-primary myBtn'
		var btn22 = '">Button</button>'
		$(".btn-group").append(btn1 + (files[i]) + btn2);
		//$(".btn-group").append(btn11 + btn22);
	}
	
	// /html
	
	// btns event
	$(".myBtn").click(function(){
		$(".innerHTML").load($(this).attr("href")).fadeIn("slow");
	});
	
	// load first ajax page
		//$(".innerHTML").load("file1.txt");


	// input value
	setInterval(function(){
		var myVal = $('.myInput').val();
		$(".myInput1 p").text(myVal);
		$(".myInput2 p").text(reverse(myVal));
		
	}, 500);
	
	function reverse (a){
		var b = "";
		if (a.length>0){
		for (i=a.length-1;i>=0;i--){
			b += a[i];
		}
	}
		return b;
	}
	
	// hide section
	$("article").hide();
	$("nav").click(function(){
		$(this).next("article").slideToggle();
		return false;
	});

	// hamburger
	$("section>nav").prepend('<div class="myHamburger"></div>');
	
	// third artice
	$(".third article").append('<h1>Gra Lotto</h1><br /><input class="btn btn-primary" type="button" value="S T A R T" id="startButton"/>');
	
	// lotto.js
	(function() {

    var lotto = document.createElement('script');
        lotto.type = 'text/javascript';
        lotto.async = true;
        lotto.src = 'script/lotto.js';

    var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(lotto, s);

})();
});
