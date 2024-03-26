$("document").ready( () => {

    // create an element
    let newPara = $("<i>");
    //append element direct
    newPara.append("Hello Jeral");


    let header = $("<h1>");
    //append element with variable
    header.append("Hello Jeral");


    // finnally append to as html elements
    $("body").append(header);
    $("body").append(newPara);

});