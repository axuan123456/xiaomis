//明星产品
$(function(){
//	toStar()要用将要滑动的元素的父级调用  它有4个参数 1：滑动的父级 2：滑动的子集 3：左滑按钮 4：右滑按钮  
		$('.star_banner').toStar($('.star_content'),$('.star_content .star_div'),$('.star-prev'),$('.star-next'));
})

//为你推荐
$(function(){
		$('.mend_content').toStar($('.mend_content'),$('.mend_content .mend_div'),$('.mend-prev'),$('.mend-next'));
	})

$(function(){
    $("#con_con_left ul li").hover(
        function(){
            $(this).find(".zj").show();
        }
        ,
        function(){
            $(this).find(".zj").hide();
        }
    )
});
$(function(){
    $("#con_hea_content").hover(
        function(){
            $(this).find(".list_xl").stop(true,true).slideDown();
            $("#con_hea_content ul li").hover(
            	function(){
            		$(this).find(".list_xl").css({"display":"block","z-index":"999"});
            	},
            	function(){$(this).find(".list_xl").css({"display":"none","z-index":"998"});}
            )
        }
        ,
        function(){
            $(this).find(".list_xl").stop(true,true).slideUp();
        }
    )
});
$("#hea_inp").focus(function(){
	$(".hea_span1").hide();
})
$("#hea_inp").blur(function(){
	$(".hea_span1").show();
})
//焦点图轮播
$(function(){
	//	changeImg()要用将要轮播的元素的父级调用  它有4个参数 1：轮播的父级 2：点的父级 3：左轮按钮 4：右轮按钮  
		$('.banner').changeImg($('.banner_ul'),$('.disc'),$('.click_prev'),$('.click_next'));
	})
