$(function () {
	$('.login').click(function () {
		//发起post请求示例：
		var loginInfo = {
			email: $(".userLogin").val(),
			password: $('.passwordLogin').val(),
		}
		$.ajax({
			url: 'http://124.223.92.108:80/login',
			type: 'post',
			dataType: 'json',
			headers: {
				'content-Type': 'application/json',
			},
			data: JSON.stringify(loginInfo),
			success: function (ret) {
				// 加载中动画关闭
				if (ret.code == 1) {
					window.alert('登录成功')
					window.location.href = '../main/main.html'
					// resolve(ret)
				}
			},
		})
	})
	$('.register').click(function () {
		//发起post请求示例：
		var zc = {
			email: $(".userRegister").val(),
			password: $('.passwordRegister').val(),
		}
		$.ajax({
			url: 'http://124.223.92.108:80/addUser',
			type: 'post',
			dataType: 'json',
			headers: {
				'content-Type': 'application/json',
			},
			data: JSON.stringify(zc),
			success: function (ret) {
				// 加载中动画关闭
				if (ret.code == 1) {
					window.alert('注册成功')
					// window.location.href = '../main/main.html'
					// resolve(ret)
				}
			},
		})
	})
	$(".registerClick").click(function () {
		$(".centerLogin").css("display", "none")
		$(".centerRegister").css("display", "flex")
	})
	$(".back").click(function () {
		$(".centerLogin").css("display", "flex")
		$(".centerRegister").css("display", "none")
	})
})
