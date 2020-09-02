//常规事件

$(function() {

	var H1 = $(window).height();
	var W1 = $(window).width();
	var wdh = W1 / H1;
	if(wdh < 0.66)
		$('html').css('font-size', W1 / 23.1)
	//fhtml.style.fontSize = wd / 23.1 + 'px';
	/*if(W1 < 1200) {
		$(".top6").hide();
		$(".top6").attr('class', 'top6')
	} else {
		$(".top6").show();
	}*/
	//partner

	$(".navclose").click(function() {
		$("body").toggleClass('on');
		//$(".top6").slideToggle();
	});
	$(".header_moico").click(function() {
		$(this).toggleClass('header_rtt');
		$(this).parent().find(".navhide").slideToggle();
		$(this).parent().siblings('li').find(".navhide").slideUp();
	});
	
	$(".header_mo2").click(function() {
		$(this).toggleClass('header_rtt');
			$(this).parent().find("dl").slideToggle();
			$(this).parent().siblings('.navhdd2').find("dl").slideUp();
	});

	$(window).resize(function() {
		var W1 = $(window).width();
		if(W1 < 1200) {
			$(".header_main").hide();
			$(".header_main").attr('class', 'header_main');
		} else {
			$(".header_main").show();
		}
	});

	$(".foot_6").hover(function() {
		$(".lang").show()
	}, function() {
		$(".lang").hide()
	});

	$(".header_main li").hover(function() {
		$(this).addClass('topnag').siblings().removeClass('topnag');
	});
	$(".lang p").click(function() {
		var ttxt = $(this).text();
		$('.foot_60').text(ttxt);
		$(this).parent().hide()
	});

	$(".detaii_xl").click(function() {
		$(".detaii_12").slideToggle();
	});
	$(".detaii_12 p").click(function() {
		var ttxt = $(this).text();
		$('.detaii_nu').text(ttxt);
		$(this).parent().hide()
	});
	$(".vclose").click(function(){
		$(".proifo_mp4").hide();
	});
	$(".mp4show").click(function(){
		$(".proifo_mp4").fadeIn();
	});

	//放大镜
	/*
	if($(window).scrollTop() >= 10) {
		$(".top").addClass('fixtop');
	}
	$(window).scroll(function(){

	if($(window).scrollTop() >= 10) {
		$(".top").addClass('fixtop');
	} else {
		$(".top").removeClass('fixtop');
	}
})
	*/
	

	// $(".palne_2 dl").eq(0).addClass('slow');
	// $(".palne_2 dl").eq(1).addClass('slower');
	// $(".palne_2 dl").eq(2).addClass('slowest');

	
	$(".product_6 .prod_info").eq(0).addClass('slower');
	$(".product_6 .prod_info").eq(1).addClass('slow');
	$(".product_6 .prod_info").eq(2).addClass('slowest');

	$(".prdct_3 dl").eq(0).addClass('slow');
	$(".prdct_3 dl").eq(1).addClass('slower');
	$(".prdct_3 dl").eq(2).addClass('slowest');
	$(".prdct_3 dl").eq(3).addClass('slower');
	$(".prdct_3 dl").eq(4).addClass('slower');
	$(".prdct_3 dl").eq(5).addClass('slow');
	$(".prdct_3 dl").eq(6).addClass('slower');
	
	$(".news_3 dl").eq(0).addClass('slow');
	$(".news_3 dl").eq(1).addClass('slower');
	$(".news_3 dl").eq(2).addClass('slowest');
	$(".news_3 dl").eq(3).addClass('slower');
	$(".news_3 dl").eq(4).addClass('slowest');
	$(".news_3 dl").eq(5).addClass('slow');
	
	$(".caves_1 dl").eq(0).addClass('slow');
	$(".caves_1 dl").eq(1).addClass('slower');
	$(".caves_1 dl").eq(2).addClass('slowest');
	$(".caves_1 dl").eq(3).addClass('slower');
	$(".caves_1 dl").eq(4).addClass('slowest');
	$(".caves_1 dl").eq(5).addClass('slow');
	//
	$(".gpksc").click(function(){
		$(".gpk_serch").show()
	});
	
	//手机菜单展开
	$('.topli i').click(function() {
		$(this).next('.navhide').slideToggle()
		$(this).parent().siblings('li').find('.navhide').slideUp();
		$(this).parent().toggleClass('acoove');

	});
	
	
	//产品详情内页
	
	$('.detail_1 ul span').click(function() {
	$(this).next().next().slideToggle();
	$(this).parent().siblings('li').find('.detailmenu').slideUp();
	$(this).parent().toggleClass('acoove');

	});
	
	
	//产品列表菜单
	$('.classify_n dt').click(function() {
		
		
		$(this).next().next('.classify_n_child').slideToggle();
		$(this).parent().siblings('dl').find('.classify_n_child').slideUp();
		$(this).parent().toggleClass('mdon');
	
	});
	
	//右侧炫富
	$(".yb_conct").hover(function() {
		$(".yb_conct").css("right", "5px");
		$(".yb_bar .yb_ercode").css('height', '200px');
	}, function() {
		$(".yb_conct").css("right", "-127px");
		$(".yb_bar .yb_ercode").css('height', '53px');
	});
	// 返回顶部
	$(".yb_top").click(function() {
		$("html,body").animate({
			'scrollTop': '0px'
		}, 300)
	});
	//
	
		
	
	
	//内页菜单展开
	
	$(".moclassify_out").click(function() {
		$(".classify_3").toggleClass('moclassify_in');
	    $(".detail_1").toggleClass('moclassify_in');
	});
	$(".moclassify_sand").click(function() {
		$(".classify_3").addClass('moclassify_in');
	
	});
	
	$(".modetail_out").click(function() {
		$(".detail_1").toggleClass('moclassify_in');
	
	});
	$(".detail_fx_l span").click(function() {
		$(".detail_1").addClass('moclassify_in');
	
	});
	
	
	$(window).load(function () {
		if(W1 < 1200) {
		$(".mobile-inner-header-icon").click(function(){
			$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
			$(".mobile-inner-nav").slideToggle(250);
		});
		$(".mobile-inner-nav a").each(function( index ) {
			$( this ).css({'animation-delay': (index/180)+'s'});
		});
			
		$(".header_onenav:odd").css({'transform': 'translateX(50%) rotate(30deg)'});
		$(".header_onenav:even").css({'transform': 'translateX(-50%) rotate(-30deg)'});
		}
	});
	
	$(".topserch_1 span").click(function(){
		$(this).parent().addClass('topfc');
	})
	
	
	
	
})
