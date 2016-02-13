$(document).ready(function(){
	console.log($("h1").text());
	console.log($("h1").text("Shut up"));

	/*

	console.log($("li").text());
	console.log($("li").text("Milan"));

	console.log($("#destinations"));
	console.log($(".promo").text("Turin"));

	console.log($("#destinations li")); //lavora su tutti i discendenti, figli e non

	console.log($("#destinations li:first").text("Puzzi")); //lavora sul primo
	console.log($("#destinations li:last").text("Puzzi")); //lavora sull'ultimo

	console.log($("#destinations li:even").text("Puzzi")); //lavora sui pari
	console.log($("#destinations li:odd").text("Puzzi")); //lavora sui dispari

	console.log($("#destinations").find("li")); //lavora su tutti i discendenti
	console.log($("li").first()); //lavora sul primo
	console.log($("li").last()); //lavora sull'ultimo

	console.log($("li").first().next()); //in questo caso lavora sul secondo
	console.log($("li").first().next().next()); //in questo caso lavora sul terzo
	console.log($("li").last().prev()); //in questo caso lavora sul penultimo

	console.log($("li").parent()); //lavora sul contenitore
	console.log($("#destination").children("li")); //lavora sui discendenti diretti

	*/

	//append(), prepend(), after(), before()

	//after() stesso livello di dove seleziono con this
	//before() stesso livello di dove seleziono con this
	
	//$(".vacations").append($price); 

	//appendTo(), prependTo(), insertAfter(), insertBefore()

	//$price.appendTo($(".vacations"));

	//.on = quando succede...

	/*
	$("button").on("click", function(){
		var $price = $("<p>From $399,99</p>");
		$(this).closest(".vacations").append($price);
		$(this).remove();
	})
	*/

	$("button").on("click", function(){
		var $vacations = $(this).closest(".vacations"),
			price = $vacations.data("price"),
			$price = $("<p>From $"+price+"</p>")

		$vacations.append($price);
		$(this).remove();
	})

});

// e.stopPropagation() --> stop bubbleing (non ritorna su)
// e.preventDefault() --> non ricarica la pagina quando il tag a ha un href "#"

/*
console.log('jquery is cool')

$(document).ready(function () {

	console.log('READY!')

	// Selezionare il titolo e cambiare il testo
	console.log( $('h1').text() );
	console.log( $('h1').text('My new title') );

	//Seleziona tutti i li
	console.log( $('li') );
	//console.log( $('li').text('Milano') );

	//Seleziona con id e classi
	console.log( $('#destinations') );
	console.log( $('.promo') );

	//seleziona descendent selector
	console.log( $('#destinations li') );

	console.log( $('#destinations > li') );

	//Select multiple elements
	console.log( $('#france, .promo') );
	
	//CSS-like pseudo selectors
	console.log( $('#destinations li:first') ); //seleziona il primo
	console.log( $('#destinations li:last') ); //seleziona il ultimo

	console.log( $('#destinations li:odd') ); //seleziona dispari
	console.log( $('#destinations li:even') ); //seleziona pari

	//Traversing
	console.log( $('#destinations').find('li') ); //più performante
	console.log( $('li').first().next()); //
	console.log( $('li').first().next().prev() ); //

	//Select parent
	console.log( $('li').first().parent()); //

	//children() lavora su tutti i discendenti DIRETTI
	console.log( $('#destinations').children('li')); //più performante

	//find() lavora su tutti i discendenti
	console.log( $('#destinations').find('li') ); //più performante

	//CREAZIONE ELEMENTI DOM
	var $price = $('<p>From $399.99</p>');
	//append(), prepend(), after(), before()
	//$('.vacations').append($price);

	//REMOVE
	//$('button').remove();

	//appendTo(), prependTo(), insertAfter(), insertBefore()
	//$price.appendTo($('.vacations'));

	$('button').on('click', function () {

		//this è il button
		console.log(this)

		$(this).after($price);
		$(this).remove();

	});

});
*/