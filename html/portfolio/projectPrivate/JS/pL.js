$(function(){

    
    $('#mainNav>ul>li').click(function(){
		$(this).children('.subnav').toggle();
	});
});