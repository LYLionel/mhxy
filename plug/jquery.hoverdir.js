define(['jquery'], function($) {
	(function($, undefined) {
		$.fn.extend({
			hoverdir: function() {
				var $this = this;

				$this.on("mouseenter mouseleave", function(e) {
					var mouse = {
						x: e.offsetX,
						y: e.offsetY
					};

					var _left = {
						dir: 3,
						val: mouse.x / $(this).width()
					}
					var _right = {
						dir: 1,
						val: 1 - _left.val
					}
					var _top = {
						dir: 0,
						val: mouse.y / $(this).height()
					}
					var _bottom = {
						dir: 2,
						val: 1 - _top.val
					}
					moveCover($(this).find("div"), e.type, getDir(_left, _right, _top, _bottom));
				});

				function moveCover(cover, eventtype, dir) {
					switch(dir) {
						case 0:
							{
								eventtype == "mouseenter" ? cover.css({
									left: 0,
									top: "-100%"
								}).stop().animate({
									top: 0
								}, 500) : cover.stop().animate({
									top: "-100%"
								}, 500);
								break;
							}
						case 1:
							{
								eventtype == "mouseenter" ? cover.css({
									left: '100%',
									top: 0
								}).stop().animate({
									left: 0
								}, 500) : cover.stop().animate({
									left: "100%"
								}, 500);
								break;
							}
						case 2:
							{
								eventtype == "mouseenter" ? cover.css({
									left: 0,
									top: "100%"
								}).stop().animate({
									top: 0
								}, 500) : cover.stop().animate({
									top: "100%"
								}, 500);
								break;
							}
						case 3:
							{
								eventtype == "mouseenter" ? cover.css({
									left: '-100%',
									top: 0
								}).stop().animate({
									left: 0
								}, 500) : cover.stop().animate({
									left: "-100%"
								}, 500);
								break;
							}

					}
				}

				function getDir() {
					var minval = arguments[0].val;
					var minindex = 0;
					for(var i = 0; i < arguments.length; i++) {
						if(arguments[i].val < minval) {
							minval = arguments[i].val;
							minindex = i;
						}
					}
					return arguments[minindex].dir;
				}
			}
		})

	})(jQuery);

})