

$(document).ready(function(){
	showMenu();
	windowResize();
	$(window)
	.resize(function (){
		if($('header.page-header.nav-opened').length)
		windowResize();
	});
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
		hideElement();
		
		if(!($(this).find('ul').is(':visible')))
			{$(this).find('ul').slideDown();}
		else{
			$(this).find('ul').slideUp();

		}
	});
}



function hideElement (){
		if(($('.nav-menu > li > ul').is(':visible')))
			{
				$('.nav-menu > li > ul').slideUp();
			}
}


function windowResize(){

	if($('body').width()>700)
	{
		$('header.page-header').removeClass('nav-opened');

	}
}

