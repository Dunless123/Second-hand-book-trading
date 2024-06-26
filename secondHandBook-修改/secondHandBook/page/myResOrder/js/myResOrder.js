$(function () {
	$.ajax({
		url: 'http://124.223.92.108:80/getOwnAskBook?userId=1&startPage=1&pageSize=14&bookName',
		type: 'get',
		dataType: 'json',
		success: function (res) {
			// 加载中动画关闭
			if (res.code == 1) {
				//添加数据到表格
				for (var i = 0; i < res.data.result.length; i++) {
					$('.userPoint').append('<tr><td>' + res.data.result[i].bookId + '</td><td>' + `2024-05-15` + '</td><td>' + res.data.result[i].bookName + '</td><td>' + res.data.result[i].bookPrice + '￥</td><td>' + res.data.result[i].bookCount + '</td><td>' + res.data.result[i].bookPhoto + '</td><td>' + `正在求购` + '</td><td>' + `<button class="btn btn-default updateBtn" type="button" style="opacity: 0.7;">编辑</button></td>` + `<td><button class="btn btn-default dele" type="button " style="opacity: 0.7;">删除 ` + '</td></tr>')
				}
			}
		},
	})
	var ssid = ''
	$('.shutIcon').click(function () {
		$('.addForm').hide()
	})

	$('.table-striped tbody').on('click', '.updateBtn', function (val) {
		//获取行
		var row = $('.userPoint tr').index($(this).closest('tr'))
		//获取某列（从0列开始计数）的值
		var id = $('.userPoint').find('tr').eq(row).find('td').eq(0).text()
		ssid = id
		$.ajax({
			url: `http://124.223.92.108:80/getAskBookByBookId?bookId=${id}`,
			type: 'get',
			dataType: 'json',
			success: function (res) {
				// 加载中动画关闭
				if (res.code == 1) {
					//添加数据到表格
					$('#addbookName').val(res.data.bookName)
					$('#addbookPrice').val(res.data.bookPrice)
					$('#addbookcount').val(res.data.bookCount)
				}
			},
		})

		// $(this).parent().parent().remove();

		$('.addForm').show()
	})

	$('.table-striped tbody').on('click', '.dele', function (val) {
		//获取行
		var row = $('.userPoint tr').index($(this).closest('tr'))
		//获取某列（从0列开始计数）的值
		var id = $('.userPoint').find('tr').eq(row).find('td').eq(0).text()

		$.ajax({
			url: `http://124.223.92.108:80/deleteAskBook?bookId=${id}`,
			type: 'DELETE',
			dataType: 'json',
			success: function (res) {
				// 加载中动画关闭
				if (res.code == 1) {
					$.ajax({
						url: 'http://124.223.92.108:80/getOwnAskBook?userId=1&startPage=1&pageSize=14&bookName',
						type: 'get',
						dataType: 'json',
						success: function (res) {
							// 加载中动画关闭
							if (res.code == 1) {
								location.href = '../myResOrder/myResOrder.html'
							}
						},
					})
					alert('删除成功')
				}
			},
		})

		// $(".addForm").show()
	})
	$(".btn-default").click(function () {
		$('.userPoint').html('')
		$.ajax({
			url: `http://124.223.92.108:80/getOwnAskBook?userId=1&startPage=1&pageSize=14&bookName=${$('#bookName').val()}`,
			type: 'get',
			dataType: 'json',
			success: function (res) {
				// 加载中动画关闭
				if (res.code == 1) {
					//添加数据到表格
					for (var i = 0; i < res.data.result.length; i++) {
						$('.userPoint').append('<tr><td>' + res.data.result[i].bookId + '</td><td>' + `2024-05-15` + '</td><td>' + res.data.result[i].bookName + '</td><td>' + res.data.result[i].bookPrice + '￥</td><td>' + res.data.result[i].bookCount + '</td><td>' + res.data.result[i].bookPhoto + '</td><td>' + `正在求购` + '</td><td>' + `<button class="btn btn-default updateBtn" type="button" style="opacity: 0.7;">编辑</button></td>` + `<td><button class="btn btn-default dele" type="button " style="opacity: 0.7;">删除 ` + '</td></tr>')
					}
				}
			},
		})

	})
	$('.submit2').click(function () {
		var zc = {
			bookId: ssid * 1,
			bookName: $('#addbookName').val(),
			bookPrice: $('#addbookPrice').val(),
			bookCount: $('#addbookcount').val(),
			bookPhoto: $('#exampleInputFile').val(),
			author: '新海诚',
			category: '小说',
			bookState: 4,
		}
		$.ajax({
			url: 'http://124.223.92.108:80/updateAskBook',
			type: 'post',
			dataType: 'json',
			headers: {
				'content-Type': 'application/json',
			},
			data: JSON.stringify(zc),
			success: function (ret) {
				// 加载中动画关闭
				if (ret.code == 1) {
					$('.addForm').hide()
					location.href = '../myResOrder/myResOrder.html'
					window.alert('更新成功')
				}
			},
		})
	})
})
