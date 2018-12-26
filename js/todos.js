//Marcar los li's cuando los clickeas

$("ul").on("click", "li",function(){
	$(this).toggleClass("li-done");
});


//agregar un item a la lista y clear el input
var newListItem = function(){
	return '<li class=""> <span>x</span> ' + $("input").val(); + "</li>"
}

$("input").keypress(function(e) {
    if(e.which == 13) {
       $("ul").prepend(newListItem);
       $(this).val("");
    }
});

//Eliminar li's completados
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	
	event.stopPropagation();
});

