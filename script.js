

$(document).ready(function(){
	showMenu();
});

function showMenu () {
	$('button.hamburger').click(function(){
		$('header.page-header').toggleClass('nav-opened');
	});

	// .expand-menu
	/*$('.nav-menu li').click(function(){
		$(this).find('.expand-menu').toggleClass('exp-menu-opened');
		});
	*/

	// .expand-menu vol.2

	$('.expand-menu')
	.hide()
	.click(function (e) {
		e.stopPropagation();
	});

	$('.nav-menu > li').click(function(){

		$('.nav-menu .expand-menu').each(function(i){
			$('.nav-menu >li > ul').is(':visible').slideUp();
			console.log('jeden kurwa');
		});


		if(!($(this).find('ul').is(':visible')))
			{$(this).find('ul').slideDown();console.log('jesem');}
		else{
			$(this).find('ul').slideUp();

		}
	});
}