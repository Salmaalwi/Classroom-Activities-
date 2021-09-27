$(".toggle").click(function(){


  $(this).find("toggleContainer").toggleClass("active");
  $(this).sibling().find(".toggleContaineClass").removeClass("active");

});


$(".searchButton").click(function(){
   $(".searchButton").hasClass("active");
   if ($(".searchButton").hasClass("active")) {
       $(".searchBar").ccs("height","100vh");
       $("#searchForm").ccs("opacity","1");
       $(".searchIcon").removeClass("fa-search").addClass("fa-times");
   }

    else {
            $(".searchBar").ccs("height","0vh");
            $("#searchForm").ccs("opacity","0");
            $(".searchIcon").removeClass("fa-times").addClass("fa-search");

    }
});