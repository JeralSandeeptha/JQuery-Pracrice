$("document").ready( () => {

    //select element with tags
    //apply css styling with jquery
    $("h1").css("background-color", "red");
    
    //select first element , 
    //values ---> (first, last, even, odd, focus)
    //these are filters
    $("h1:first").css("background-color", "red");
    
    //select element with class name
    $(".header").css("background-color", "red");
  
    //select element with id
    $("#header").css("background-color", "red");
    
    // decendant combinators
    $("div h1").css("background-color", "blue");
    $(".container #text").css("background-color", "green");
    
});