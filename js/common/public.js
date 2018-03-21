//导航栏固定效果
$(function () {
    var scrollHeight = $(document).scrollTop();
    if (scrollHeight > 50) {
        $(".nav-container").addClass("fixed-top border-bottom box-shadow-bottom");
    } else {
        $(".nav-container").removeClass("fixed-top border-bottom box-shadow-bottom");
    }

    $(window).scroll(function () {
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定
        if (scroH > 50) {
            $(".nav-container").addClass("fixed-top border-bottom box-shadow-bottom");
        }
        else if (scroH < 50) {
            $(".nav-container").removeClass("fixed-top border-bottom box-shadow-bottom");
        }
    });
});

//设置导航栏在移动端菜单的一些样式
$(function () {
    var isMenu = $(".navbar-toggler");
    var menuIsBlock = isMenu.css("display");
    if (!(menuIsBlock == "none")) {
        $(".navbar-nav li.nav-item").css("text-align", "center");
        $(".navbar-collapse").addClass("border-top");
        $(".navbar-collapse form input.form-control").css({"width": "73%", "margin-right": "2%"});
    }
})

//链接点击添加class效果
$(function () {
    $(".navbar-collapse ul li.nav-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
})


