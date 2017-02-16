

$(document).ready(function(){
	showMenu();
});

function showMenu () {
	$('button.hamburger').click(function(){
		$('header.page-header').toggleClass('nav-opened');
	});
	
}