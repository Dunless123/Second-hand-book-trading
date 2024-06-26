$(function () {
    $('.btn').click(function () {
        //发起post请求示例：
        var loginInfo = {
            "bookId": 1,
            "bookName": "你好世界",
            "bookPrice": 18.1,
            "bookCount": -1,
            "bookPhoto": "1.jpg",
            "author": null,
            "category": null,
            "bookState": 4,
            "userId": 1
        }
        $.ajax({
            url: 'http://124.223.92.108:80/askBook',
            type: 'post',
            dataType: 'json',
            headers: {
                'content-Type': 'application/json',
            },
            data: JSON.stringify(loginInfo),
            success: function (ret) {
                // 加载中动画关闭
                if (ret.code == 1) {
                    window.alert('供应成功')
                    // resolve(ret)
                }
            },
        })
    })
})
