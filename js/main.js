$('#about').on('click',function() {
	$('div.main').animate( {left: "25%"}, 2500);
	$('div.contact').fadeOut(1000);
	$('div.projects').fadeOut(1000);
	$('div.press').fadeOut(1000);
	$('div.about').fadeToggle(2500);

});

$('#projects').on('click',function() {
	$('div.main').animate( {left: "25%"}, 2500);
	$('div.about').fadeOut(1000);
	$('div.contact').fadeOut(1000);
	$('div.press').fadeOut(1000);
	$('div.projects').fadeToggle(2500);
});

$('#press').on('click',function() {
	var count = 1;
	var quoteNum = 'span.review#quote' + count;
	$('div.main').animate( {left: "25%"}, 2500);
	$('div.about').fadeOut(1000);
	$('div.projects').fadeOut(1000);
	$('div.contact').fadeOut(1000);
	$('div.press').fadeToggle(2500, function quote(count, quoteNum) {
		if (count <= 5) {
			$(quoteNum).fadeIn(3000, function() {
				$(quoteNum).fadeOut(3000);
				count++;
				quoteNum = 'span.review#quote' + count;
				quote(count, quoteNum);
			});
			
		} else {
			count = 1;
			quoteNum = 'span.review#quote' + count;
			quote(count, quoteNum);
		}	
		
	});

});

$('#contact').on('click',function() {
	$('div.main').animate( {left: "25%"}, 2500);
	$('div.about').fadeOut(1000);
	$('div.projects').fadeOut(1000);
	$('div.press').fadeOut(1000);
	$('div.contact').fadeToggle(2500);
});

$('#title').on('click',function() {
	$('div.main').animate( {left: "50%"}, 2500);
	$('div.about').fadeOut(1000);
	$('div.projects').fadeOut(1000);
	$('div.press').fadeOut(1000);
	$('div.contact').fadeOut(1000);
});

$(function(){
    $(".i-like").typed({
    strings: ["the internet.", "apple pie.", "intersectional feminism.", 
    "cacti.", "theatre of all kinds.", "meta humor.", 
    "complex female characters.", "Johnny Gallagher.", 
    "the Greek Weird Wave.", "science.", "pop culture.", 
    "YA novels about the disenchantment of youth.","sad indie rock.", 
    "Crazy Ex-Girlfriend.", "the color green.", "Sylvia Plath.", 
    "mashed potatoes.", "Community.",  "oreos.", "road trip movies.", 
    "broccoli.", "Daphne." , "the color pink.", "twitter.",
    "television.", "New York.", "concerts.", "fairy lights.", 
    "tumblr poetry.", "Bo Burnham.", "cult movies."],
    typeSpeed: 10,
    showCursor: true,
    loop: true,
    loopCount: false,
    startDelay: 5000,
    backDelay: 1200,
    });
});