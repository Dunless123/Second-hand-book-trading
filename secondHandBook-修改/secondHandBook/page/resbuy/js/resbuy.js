$(function () {

    $(".userPoint").click(function () {
        location.href = "../resBuyDetail/resBuyDetail.html"
    })
    $.ajax({
        url: 'http://124.223.92.108:80/getOwnAskBook?userId=1&startPage=1&pageSize=14&bookName',
        type: 'get',
        dataType: 'json',
        success: function (res) {
            // 加载中动画关闭
            if (res.code == 1) {
                //添加数据到表格
                for (var i = 0; i < res.data.result.length; i++) {
                    $(".userPoint").append("<tr><td>" +
                        res.data.result[i].bookPhoto + "</td><td>" +
                        res.data.result[i].bookName + "</td><td>" +
                        res.data.result[i].bookPrice + "￥</td><td>" +
                        res.data.result[i].bookCount + "</td><td>" + "</td></tr>"
                    );
                }
            }
        },
    })

    $(".submit1").click(function () {
        let loginInfo = {
            bookName: $("#addbookName").val(),
            "bookPrice": $("#addbookPrice").val(),
            "bookCount": $("#addbookcount").val(),
            "bookPhoto": $("#exampleInputFile").val(),
            "author": "新海诚",
            "category": "小说",
            "bookState": 1,
            "userId": 1
        }
        $.ajax({
            url: 'http://124.223.92.108:80/addAshBook',
            type: 'post',
            dataType: 'json',
            headers: {
                'content-Type': 'application/json',
            },
            data: JSON.stringify(loginInfo),
            success: function (ret) {
                // 加载中动画关闭
                if (ret.code == 1) {
                    $(".addForm").hide()
                    location.href = "../resbuy/resbuy.html"
                    window.alert('求购成功')
                    // resolve(ret)
                }
            },
        })
    })
    $(".addbtn").click(function () {

        $(".addForm").show()

    })
    $(".btn-default").click(function () {
        $('.userPoint').html('')
        $.ajax({
            url: `http://124.223.92.108:80/getOwnAskBook?userId=1&startPage=1&pageSize=14&bookName=${$("#bookName").val()}`,
            type: 'get',
            dataType: 'json',
            success: function (res) {
                // 加载中动画关闭
                if (res.code == 1) {
                    //添加数据到表格
                    for (var i = 0; i < res.data.result.length; i++) {
                        $(".userPoint").append("<tr><td>" +
                            res.data.result[i].bookPhoto + "</td><td>" +
                            res.data.result[i].bookName + "</td><td>" +
                            res.data.result[i].bookPrice + "￥</td><td>" +
                            res.data.result[i].bookCount + "</td><td>" + "</td></tr>"
                        );
                    }
                }
            },
        })

    })
    $(".shutIcon").click(function () {

        $(".addForm").hide()

    })

    $(".updateBtn").click(function () {

        // $(".addForm").show()

    })

    $(".myOrder").click(function () {
        location.href = "../myResOrder/myResOrder.html"
    })

})


