
$(document).ready(function(){
	alert("Bienvenue");
	monTexte="Hello"
	monTexte2="Hello2"
	$("p").html(monTexte);

	$("p").on( "click", function(){

		if($(this).hasClass('red')){
          $(this).html(monTexte);
		}else{
          $(this).addClass('red');
          $(this).html(monTexte2);
     	}
     

   });
});
