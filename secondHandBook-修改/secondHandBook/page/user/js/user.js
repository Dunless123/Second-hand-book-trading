$(function () {
    let userInfo
    $.ajax({
        url: 'http://124.223.92.108:80/getUser?userId=1',
        type: 'get',
        success: (res) => {
            // 加载中动画关闭
            if (res.code == 1) {
                userInfo = res.data
                $(".account").val(res.data.email)
                $(".password").val(res.data.password)
                $(".lastName").val(res.data.lastName)
                $(".firstName").val(res.data.firstName)
                $(".phone").val(res.data.phone)
                $(".address").val(res.data.address)
            }
        },
    })
    $('.button').click(function () {
        //发起post请求示例：
        var loginInfo = {
            userId: userInfo.userId,
            email: $(".account").val(),
            password: $(".password").val(),
            lastName: $(".lastName").val(),
            firstName: $(".firstName").val(),
            phone: $(".phone").val(),
            addresss: $(".address").val(),
            dateOfBirth: $(".dateOfBirth").val()
        }
        $.ajax({
            url: 'http://124.223.92.108:80/updateUser',
            type: 'post',
            dataType: 'json',
            headers: {
                'content-Type': 'application/json',
            },
            data: JSON.stringify(loginInfo),
            success: function (res) {
                // 加载中动画关闭
                if (res.code == 1) {
                    $.ajax({
                        url: 'http://124.223.92.108:80/getUser?userId=1',
                        type: 'get',
                        success: (res) => {
                            // 加载中动画关闭
                            if (res.code == 1) {
                                userInfo = res.data
                                $(".account").val(res.data.email)
                                $(".password").val(res.data.password)
                                $(".lastName").val(res.data.lastName)
                                $(".firstName").val(res.data.firstName)
                                $(".phone").val(res.data.phone)
                                $(".address").val(res.data.address)
                            }
                        }
                    })
                    window.alert('更新成功')
                    // resolve(ret)
                }
            },
        })
    })
})
