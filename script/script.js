$(".finder__input").focus(function() {
    $(this).select();
}).mouseup(function(e) {
    e.preventDefault();
});