$("document").ready( () => {

    // first is event type, second is callback function
    $(".box").on("click", () => {
        $(".box").css("background-color", "red");
    });

    $(".box").on("mouseenter", () => {
        $(".box").css("background-color", "green");
    });

    $(".box").on("mouseleave", () => {
        $(".box").css("background-color", "blue");
    });

});

// click: Occurs when an element is clicked.
// dblclick: Occurs when an element is double-clicked.
// mousedown: Occurs when a mouse button is pressed down over an element.
// mouseup: Occurs when a mouse button is released over an element.
// mousemove: Occurs when the mouse pointer moves while it is over an element.
// mouseover: Occurs when the mouse pointer enters an element.
// mouseout: Occurs when the mouse pointer leaves an element.
// mouseenter: Similar to mouseover, but it doesn't bubble up.
// mouseleave: Similar to mouseout, but it doesn't bubble up.
// keydown: Occurs when a keyboard key is pressed down.
// keyup: Occurs when a keyboard key is released.
// keypress: Occurs when a key is pressed and released over an element.
// focus: Occurs when an element receives focus.
// blur: Occurs when an element loses focus.
// change: Occurs when the value of an element changes (for input, select, and textarea elements).
// submit: Occurs when a form is submitted.
// resize: Occurs when the browser window is resized.
// scroll: Occurs when the user scrolls in an element (like a div with a scrollbar).
// load: Occurs when a resource and its dependent resources have finished loading.
// unload: Occurs when the user navigates away from the page.
// error: Occurs when an error occurs while loading an external resource like an image.
// focusin: Similar to focus, but it bubbles up.
// focusout: Similar to blur, but it bubbles up.
// contextmenu: Occurs when the right mouse button is clicked on an element, triggering the context menu.