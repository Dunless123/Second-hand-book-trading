$(function () {
	$.ajax({
		url: 'http://124.223.92.108:80/getOwnSaleBook?userId=1&startPage=1&pageSize=14&bookName',
		type: 'get',
		dataType: 'json',
		success: function (res) {
			// 加载中动画关闭
			if (res.code == 1) {
				//添加数据到表格
				for (var i = 0; i < res.data.result.length; i++) {
					$('.userPoint2').append(
						'<tr><td>' +
						res.data.result[i].bookId +
						'</td><td>' +
						`2024-05-15` +
						'</td><td>' +
						res.data.result[i].bookName +
						'</td><td>' +
						res.data.result[i].bookPrice +
						'￥</td><td>' +
						res.data.result[i].bookCount +
						'</td>' +
						// res.data.result[i].bookPhoto + '</td><td>' +
						`<td><a href="../buyDetail/buyDetail.html">书籍详情</a></td>` +
						`<td>` +
						'正在求购' +
						'</td><td>' +
						`<button class="btn btn-default updateBtn1" type="button" style="opacity: 0.7;">编辑</button></td>` +
						`<td><button class="btn btn-default dele1" type="button " style="opacity: 0.7;">删除 ` +
						'</td></tr>'
					)
				}
			}
		},
	})
	var ssid = ''
	$('.shutIcon').click(function () {
		$('.addForm').hide()
	})
	$('.shutIcon2').click(function () {
		$('.addForm2').hide()
	})

	$('.table-striped tbody').on('click', '.updateBtn1', function (val) {
		//获取行
		var row = $('.userPoint2 tr').index($(this).closest('tr'))
		//获取某列（从0列开始计数）的值
		var id = $('.userPoint2').find('tr').eq(row).find('td').eq(0).text()
		ssid = id
		$.ajax({
			url: `http://124.223.92.108:80/getSaleBookByBookId?bookId=${id}`,
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

	$('.table-striped tbody').on('click', '.dele1', function (val) {
		//获取行
		var row = $('.userPoint2 tr').index($(this).closest('tr'))
		//获取某列（从0列开始计数）的值
		var id = $('.userPoint2').find('tr').eq(row).find('td').eq(0).text()

		$.ajax({
			url: `http://124.223.92.108:80/deleteSaleBook?bookId=${id}`,
			type: 'DELETE',
			dataType: 'json',
			success: function (res) {
				// 加载中动画关闭
				if (res.code == 1) {
					location.href = '../sale/sale.html'
					alert('删除成功')
				}
			},
		})

		// $(".addForm").show()
	})

	$('.submit3').click(function () {
		var zc2 = {
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
			url: 'http://124.223.92.108:80/updateSaleBook',
			type: 'post',
			dataType: 'json',
			headers: {
				'content-Type': 'application/json',
			},
			data: JSON.stringify(zc2),
			success: function (ret) {
				// 加载中动画关闭
				if (ret.code == 1) {
					location.href = '../sale/sale.html'
					window.alert('更新成功')
					$('.addForm').hide()
				}
			},
		})
	})
	$('.submit4').click(function () {
		var zc3 = {
			userId: 1,
			bookName: $('#addbookName2').val(),
			bookPrice: $('#addbookPrice2').val(),
			bookCount: $('#addbookcount2').val(),
			bookPhoto: $('#exampleInputFile2').val(),
			author: '新海诚',
			category: '小说',
			bookState: 4,
		}
		$.ajax({
			url: 'http://124.223.92.108:80/addSaleBook',
			type: 'post',
			dataType: 'json',
			headers: {
				'content-Type': 'application/json',
			},
			data: JSON.stringify(zc3),
			success: function (res) {
				// 加载中动画关闭
				alert('更新成功')
				location.href = '../sale/sale.html'
				$('.addForm2').hide()
			},
		})
	})


	$(".btn-default").click(function () {
		$('.userPoint2').html('')
		$.ajax({
			url: `http://124.223.92.108:80/getOwnSaleBook?userId=1&startPage=1&pageSize=14&bookName=${$('#bookName').val()}`,
			type: 'get',
			dataType: 'json',
			success: function (res) {
				// 加载中动画关闭
				if (res.code == 1) {
					//添加数据到表格
					for (var i = 0; i < res.data.result.length; i++) {
						$('.userPoint2').append(
							'<tr><td>' +
							res.data.result[i].bookId +
							'</td><td>' +
							`2024-05-15` +
							'</td><td>' +
							res.data.result[i].bookName +
							'</td><td>' +
							res.data.result[i].bookPrice +
							'￥</td><td>' +
							res.data.result[i].bookCount +
							'</td>' +
							// res.data.result[i].bookPhoto + '</td><td>' +
							`<td><a href="../buyDetail/buyDetail.html">书籍详情</a></td>` +
							`<td>` +
							'正在求购' +
							'</td><td>' +
							`<button class="btn btn-default updateBtn1" type="button" style="opacity: 0.7;">编辑</button></td>` +
							`<td><button class="btn btn-default dele1" type="button " style="opacity: 0.7;">删除 ` +
							'</td></tr>'
						)
					}
				}
			},
		})

	})

	$('.addbtn').click(function () {
		$('.addForm2').show()
	})
})
