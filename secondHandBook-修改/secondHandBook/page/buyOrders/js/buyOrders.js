$(function () {
	$('.btn-lg').click(function () {
		prompt('请输入账号')
		prompt('请输入密码')
		//发起post请求示例：
		var info = {
			bookId: 81, //被购买书的Id
			bookName: '你好世界',
			bookPrice: 12.1,
			bookCount: 1, //购买数量
			bookPhoto: '1.jpg',
			author: '新海诚',
			category: '小说',
			userId: 1, //购买的用户
		}
		$.ajax({
			url: 'http://124.223.92.108:80/buyBook',
			type: 'post',
			dataType: 'json',
			headers: {
				'content-Type': 'application/json',
			},
			data: JSON.stringify(info),
			success: function (ret) {
				// 加载中动画关闭
				if (ret.code == 1) {
					window.alert('支付成功')
					window.location.href = '../buy/buy.html'
					// resolve(ret)
				}
			},
		})
	})
})
