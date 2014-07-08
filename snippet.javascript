{% javascript %}

$(document).on('click', '.search-close', function(e) {
	e.preventDefault();
	$('.search-overlay').toggleClass('open');
});

$(document).on('click', '.search-button', function(e) {
	e.preventDefault();
	$('.search-overlay').toggleClass('open');
	$('.search-overlay form input[name="s"]').focus();
});

$('.search-overlay form input[name="s"]').keyup(function(e) {

	e.preventDefault();

	if (e.keyCode == 27) {
		$('.search-overlay').toggleClass('open');
	}

	if (e.keyCode == 13) {
		var val = $(this).val();
		var url = 'search?s=' + val;
		location.href = url;
	}

});

{% endjavascript %}