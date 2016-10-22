var cities = ['New York City', 'San Francisco','Los Angeles','Austin','Sydney'];
cities.forEach(function(value, key){
    $('#city-type').append('<option value=' + key + '>' + value + '</option> ');
});
var abbr = ['nyc','sf','la','austin','sydney'];
	$("select").change(function(){
    	$('#city-type').click(function(){
   			index = $(this).val();
    		$('body').removeClass();
    		$('body').addClass(abbr[index]);
		});
});



