import $ from 'jquery';
// Create sandbox
if ($('#sandbox').length) {
	$('#sandbox').remove();
}
$('body').append('<div id="sandbox"></div>');
