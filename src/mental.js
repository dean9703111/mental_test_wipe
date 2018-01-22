
if(window.orientation!=0){
        var obj=document.getElementById('orientation');
        alert('横屏内容太少啦，请使用竖屏观看！');
        obj.style.display='block';
}

window.onorientationchange=function(){ 
var obj=document.getElementById('orientation');

if(window.orientation==0){
                obj.style.display='none';
        }else
        {
                alert('横屏内容太少啦，请使用竖屏观看！');
                obj.style.display='block';
        }
}; 

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
        /*if (percent <= 0) return;
        if (percent < 50) {
            alert('加油，帅哥，我就快出来了！come on！')
        } else if (percent > 50) {
            alert('啊，帅哥，谢谢你解救我，今晚我是你的了哦！')
        } else if (percent > 80) {
            alert('哇哇哇！！！啊啊啊！！！再来一次！！！');
        }*/
    }
})
