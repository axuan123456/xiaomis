$.fn.extend({
	toStar: function(Class, classChild, leftBtn, rightBtn) {
		Class.width(classChild.length * classChild.width());
		var n = 0;
		leftBtn.css("opacity", "0.5");
		leftBtn.click(function() {
			n--;
			if(n < 0) {
				n = 0;
				leftBtn.css("opacity", "0.5");
			} else {
				Class.stop().animate({
					left: -n * classChild.width()
				});
				leftBtn.css("opacity", "1");
				rightBtn.css("opacity", "1");
			}
		})
		rightBtn.click(function() {
			n++;
			if(n >= classChild.length) {
				n = classChild.length - 1;
				rightBtn.css("opacity", "0.5");
			} else {
				Class.stop().animate({
					left: -n * classChild.width()
				});
				leftBtn.css("opacity", "1");
			}
		});

	},
	changeImg: function(ul,disc,leftBtn,rightBtn) {
		var index = 0;
		var stop = false;
		var $imgLi = ul.children('li');
		var $numLi = disc.children('li');
		var $prev = leftBtn;
		var $next = rightBtn;

		function change() {
			if(stop) return;
			index++;
			if(index >= $imgLi.length) {
				index = 0;
			}
			$imgLi.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$numLi.eq(index).addClass("on").stop(true, true).siblings().removeClass("on");
		}

		function changes() {
			if(stop) return;
			index--;
			if(index < 0) {
				index = 4;
				console.log(index);
			}
			$imgLi.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$numLi.eq(index).addClass("on").stop(true, true).siblings().removeClass("on");
		}
		$numLi.mouseover(function() {
			clearInterval(timer);
			stop = true;
			index = $numLi.index($(this));
			$imgLi.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$(this).addClass("on").stop(true, true).siblings().removeClass("on");
		}).mouseout(function() {
			stop = false;
			timer = setInterval(change, 3000);
		});
		$prev.click(function() {
			clearInterval(timer);
			changes();
			timer = setInterval(change, 3000);
		})
		$next.click(function() {
			change();
			timer = setInterval(change, 3000);
		})
		var timer = setInterval(change, 3000);
	},
})