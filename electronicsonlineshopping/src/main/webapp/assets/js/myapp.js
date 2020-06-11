$(function() {
	// solving th active menu problem

	switch (menu) {
	case 'About Us':
		$('#about').addClass('active');
		break;

	case 'Contact Us':
		$('#cotact').addClass('active');
		break;

	default:
		$('#home').addClass('active');
		break;
	}

});