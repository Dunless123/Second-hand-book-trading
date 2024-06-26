$(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            $(".head").addClass("change")
        } else {
            $(".head").removeClass("change")
        }
    })

    var i = 0
    $(".user").click(function () {
        if (i == 0) {
            $(".downlist").removeClass("uplist")
            $(".downlist").css("visibility", "visible")
            $(".downlist").addClass("droplist")
            i = 1
        } else {
            $(".downlist").removeClass("droplist")
            $(".downlist").addClass("uplist")
            $(".downlist").css("visibility", "hidden")
            i = 0
        }
    })



    var url = $(location).attr("pathname")
    var urls = ["/page/main/main.html", "/page/buy/buy.html", "/page/sale/sale.html", "/page/resbuy/resbuy.html"]
    if (url == urls[0]) {
        $(".home").css("color", "blue")
    }
    if (url == urls[1]) {
        $(".buyCenter").css("color", "blue")
    }
    if (url == urls[2]) {
        $(".saleCenter").css("color", "blue")
    }
    if (url == urls[3]) {
        $(".resBuyCenter").css("color", "blue")
    }



})

