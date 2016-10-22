$('#about').hide();

var abbr = ['romance','horror','comedy'];

$('li').click(function(){
    index = $(this).val();
    $('#img').removeClass();
    $('#img').addClass(abbr[index]);
    $('#about').show();
});

/*
$('li').click(function(){

    $('#movie-titles').html('<h3>' + $(this).html() + '</h3>');
});

for(var index = 0; index < index.length; index = index + 1)
{
	$('#movie-titles').append(RomanceMovies[index]);
	console.log(RomanceMovies[index]);
}
*/