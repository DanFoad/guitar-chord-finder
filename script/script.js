$(".finder__input").focus(function() {
    $(this).select();
}).mouseup(function(e) {
    e.preventDefault();
});

$(".finder__input").keyup(function() {
    if ($(this).val().length > 0) {
        var name = $(this).attr("name");
        if (name == "f6") {
            $(".finder__inputs input[type=submit]").focus();
        } else {
            n = parseInt(name.replace("f", ""));
            $(".finder__input[name=f" + n++ + "]").focus();
        }
    }
});