// 不再提醒
// $(function(){
// 	if("true" == Cookies.get("notShow")){
//         $("#top").hide();
//     }
//     $(".span_l").on("click", function hideDialog() {
//         $("#top").hide();
//         var isCancel = $(".span_l")[0].checked;
//         Cookies.set("notShow", isCancel);
//         console.log(Cookies.get("notShow"));
//     })

// })
//banner1
$(function(){
	var sildBox = $('#banner');
	var ul = sildBox.find('.sildBox');
	var oneWidth = sildBox.find('.sildBox li').eq(0).width();
	var number = sildBox.find('.spanBox ul li');
	var timer=null;
	var sw=0;

	//每个span绑定click事件，完成切换颜色和动画，以及读取参数值
	number.on("click",function(){
		$(this).addClass("active").siblings(".spanBox ul li").removeClass("active");
		sw = $(this).index();
		ul.animate({
			"right":oneWidth*sw,
		});
	});

	//左右按钮的控制效果
	$(".next").stop(true,true).click(function(){
		sw++;
		if(sw==number.length){
			sw=0;
		}
		number.eq(sw).trigger("click");
	});
	$(".prev").stop(true,true).click(function(){
		sw--;
		if(sw==number.length){
			sw=0;
		}
		number.eq(sw).trigger("click");
	})
	//定时器的使用，自动开始
	timer = setInterval(function(){
		sw++;
		if(sw==number.length){
			sw=0;
		};
		number.eq(sw).trigger("click");
	},2000);
	//hover事件完成悬停和，左右图标的动画效果
	sildBox.hover(function(){
		$(".next,.prev").animate({
			"opacity":1,
		},200);
		clearInterval(timer);
	},function(){
		$(".next,.prev").animate({
			"opacity":.5,
		},500);
		timer = setInterval(function(){
			sw++;
			if(sw==number.length){
				sw=0;
			}
			number.eq(sw).trigger("click");
		},2000);
	})
})
// banner2
$(function(){
	var sildBox = $(".lbt");
	var oneWidth = sildBox.find("img").eq(0).width();
	var sw = 0;
	var timer = null;

	timer = setInterval(function(){
		sw++;
		sildBox.animate({
			"right":oneWidth*sw,
		});
		if(sw==5){
			sw=0;
		};
	},2000)
})


// 课程切换
$(function(){
	$(".span1").click(function(){
		$(".h_2").hide();
		$(".h_1").show();
		$(".span2").css({
			"background-color": "white",
			"box-shadow": "2px 2px 10px #D0C9D2",
			"color": "black",
		});
		$(".span1").css({
			"background-color": "green",
			"color": "white",
		});
	});

	$(".span2").click(function(){
		$(".h_1").hide();
		$(".h_2").show();
		$(".span1").css({
			"background-color": "white",
			"box-shadow": "2px 2px 10px #D0C9D2",
			"color": "black",
		});
		$(".span2").css({
			"background-color": "green",
			"color": "white",
		});
	});
});
	// $(".kp00").hide();
	// $(".a1").mouseover(function(){
	// 	$(".kp00").show();
	// });
	// $(".a1").mouseout(function(){
	// 	$(".kp00").hide();
	// });

	// $(".kp01").hide();
	// $(".a2").mouseover(function(){
	// 	$(".kp01").show();
	// });
	// $(".a2").mouseout(function(){
	// 	$(".kp01").hide();
	// });

	
	

// $(function(){
// 			$(".button").click(function(){
// 				$.ajax({
// 					type:"GET",
// 					url:"http://study.163.com/webDev/couresByCategory.htm",
// 					dataType:"json",
// 					data:{pageNo:1,psize:15,type:10},
// 					success:function(data){
// 						console.log(data);
// 					}
                      
// 				});
// 			});
// 		});

$(function(){
			$.ajax({
				type:"GET",
				url:"http://study.163.com/webDev/couresByCategory.htm",
				dataType:"json",
				data:{pageNo:1,psize:15,type:10},
				success:function(data){
					var leng = data.list;
					var x="";
					for(var i=0;i<leng.length;i++){
						x = x + '<div class="kc1 a1"><img src="' + data.list[i].middlePhotoUrl + '"><p>' + data.list[i].name + '</p><p>' + data.list[i].categoryName +'</p><p><span><img src="images/tb1.png">' + data.list[i].learnerCount + '</span></p><p class="p0">' + "￥" + data.list[i].price +'</p><div class="kp kp00"><div class="kp1"><div class="kp_img"><img src="' + data.list[i].middlePhotoUrl + '" class="img1"></div><div class="kp_wz"><h4>' + data.list[i].name +'</h4><p class="p1"><img src="images/tb1.png">' + data.list[i].learnerCount + "人在学" + '</p><p class="p2">'+ data.list[i].provider +'</p><p class="p3">' + data.list[i].categoryName +'</p></div></div><div class="kp2"><p class="p4">' + data.list[i].description +'</p></div></div></div>';
					};
					document.getElementById("aj0").innerHTML=x;

					// document.getElementById('aj1').innerHTML='';
					$(".kp00").hide();
					var b = $(".kc1").find(".kp00");
					$(".kc1").hover(function(){
						$(this).find(".kp00").show();
					},function(){
						b.hide();

					});

								},
				                      
							});
		
	});
$(function(){
			$.ajax({
				type:"GET",
				url:"http://study.163.com/webDev/couresByCategory.htm",
				dataType:"json",
				data:{pageNo:1,psize:12,type:20},
				success:function(data){
					var leng = data.list;
					var x="";
					for(var i=0;i<leng.length;i++){
						x = x + '<div class="kc1 a1"><img class="img1" src="' + data.list[i].middlePhotoUrl + '"><p>' + data.list[i].name + '</p><p>' + data.list[i].categoryName +'</p><p><span><img src="images/tb1.png">' + data.list[i].learnerCount + '</span></p><p class="p0">' + "￥" + data.list[i].price +'</p><div class="kp kp00" id="aj1"><div class="kp1"><div class="kp_img"><img src="' + data.list[i].middlePhotoUrl + '" class="img1"></div><div class="kp_wz"><h4>' + data.list[i].name +'</h4><p class="p1"><img src="images/tb1.png">' + data.list[i].learnerCount + "人在学" + '</p><p class="p2">'+ data.list[i].provider +'</p><p class="p3">' + data.list[i].categoryName +'</p></div></div><div class="kp2"><p class="p4">' + data.list[i].description +'</p></div></div></div>';
					};
					document.getElementById("aj1").innerHTML=x;
					$(".kp00").hide();
					var b = $(".kc1").find(".kp00");
					$(".kc1").hover(function(){
						$(this).find(".kp00").show();
					},function(){
						b.hide();

					});


								},
				                      
							});
		
	});

// 热门排行
$(function(){
	$.ajax({
		type:"GET",
		url:"http://study.163.com/webDev/hotcouresByCategory.htm",
		dataType:"json",
		data:null,
		success:function(data){
			
			var y = "";

			for(var i=0;i<data.length;i++){
				y = y + '<div class="c1"><img class="img2" src="' + data[i].smallPhotoUrl +'"><div class="c1_con"><p>' + data[i].name +'</p><span><img src="images/tb1.png">' + data[i].price +'</span></div></div>';
			}
			document.getElementById("aj3").innerHTML= y;

			var sildBox = $(".aj3");
			// var oneWidth = sildBox.find(".c1").eq(0).height();
			var sw = 0;
			var timer = null;

			timer = setInterval(function(){
				sw++;
				sildBox.animate({
					"bottom":70*sw,
				});
				if(sw==10){
					sw=0;
				};
			},3000)
				}
	});

	 
	
})


