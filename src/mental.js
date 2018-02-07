
function change_img(img_name) {
    $("button").attr("disabled", "disabled");
    $("button").css("z-index", "-10");
    $("#wipe").css("z-index", "20");
    $("#wipe").css("background", "url(img/"+ img_name +".jpg) no-repeat");
    $("#wipe").css("background-attachment", "fixed");
    $("#wipe").css("background-position", "center");
    $("#wipe").css("background-size", "100% 60%");
    /*var wipe = document.getElementById("wipe")
    wipe.css("background","url(img/"+ img_name +".jpg) no-repeat")*/
}

var wipe = new Wipe({
    el: '#wipe',
    fg: 'img/main.jpg',
    size: 50,
    debug: false,
    autoWipe: false,
    data: null,
    onswiping: function (percent) {
    }
})
