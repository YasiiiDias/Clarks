$(function() {
	$("#spinner").spinner({
		min: 4,
		max: 12,
		spin: function(event, ui) {
			$(this).change();
		}
	});
});

$(function() {
	  $("#style").selectmenu();
});

$(function() {
    $("#gender").selectmenu();
});

$(function(){
    $("#slider-range").slider({
        range:true,
        min:29,
        max:100,
        values:[29,55],
        slide:function(event,ui){
            $("#amount").val("£"+ui.values[0]+"- £" +ui.values[1]);
        }
    });

    $("#amount").val(" £" + $("#slider-range").slider("values",0)+" - £"+$("#slider-range").slider("values",1));
});

$(function() {
	$( "#Search" ).on("click", function(){
		
		var style = $("#style").val();
	    var size =  $("#spinner").val();
        var Gender = $("#gender").val();
		var minPrice = $("#slider-range").slider("option", "values")[0];
		var maxPrice = $("#slider-range").slider("option", "values")[1];
        
        var SearchHeading="<h1 class='search-heading'>Search Results</h1>"
		
		var output="<div>";
		   for (var i in data.shoes) {
			   if (( style == data.shoes[i].style) || (style=="Any"))
               if (( Gender == data.shoes[i].gender) || (Gender=="All"))
			   if (( data.shoes[i].price >= minPrice && data.shoes[i].price <= maxPrice ))
			   for(var j in data.shoes[i].size){
				   if(size == data.shoes[i].size[j]){
					{
						{
							{
								{
									output+="<br><br>"+"<div class='shoe-main-container'>"+"<img src=" + data.shoes[i].picture + " class='shoe-image'>" + "<div class='shoe-container'>"+"<h2 class='shoe-name'>"+ data.shoes[i].name +"</h2>" + "<div class='shoe-details'>" + data.shoes[i].description + "</div>" +"<h2 class='shoe-price'>"+" £"+data.shoes[i].price+".00"+"</h2>"+ "<button class='view-more-btn'><a href='" + data.shoes[i].url + "'>View More</a></button>" + "<button class='fav-btn'><a href='favourites.html'>View Favourites</a></button>"+"</div>"+"</div>";
								} 
							} 
						}
					} 
				}
					   
			   }
			   }
			
				output+="</div>";
				document.getElementById( "Placeholder" ).innerHTML = SearchHeading + output;
		   });
	});