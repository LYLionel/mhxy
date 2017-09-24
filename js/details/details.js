require(["../config"], function() {
	require(["jquery", "loadHTML", "list_loadHTML"], function($) {
		function list() {

		}
		list.prototype = {
			init: function() {
				this.right_fixed();
				this.loadli();
				this.add_dec();
				this.size = 20;
				this.num = $('.book>li').length;
				this.index = 1;
				this.book();
			},
			right_fixed: function() { //右侧fixed的定位
				var top = $('.move-part-wrap').offset().top;
				$(window).scroll(function() {
					var scrolltop = $(this).scrollTop()
					if(scrolltop >= top) {
						$('.move-part-wrap').addClass('list_active')

					} else {
						$('.move-part-wrap').removeClass('list_active')
					}
				})
				$('.totop').on('click',function(){
					$('body').animate({
						scrollTop:0
					},500)
				})
			},
			loadli: function() {  //懒加载
				$(window).scroll(function() {
					if(Math.ceil($('body').scrollTop() + window.innerHeight) + 100 >= $('body').height()) {
						var html = ''
						for(var i = 0; i < 5; i++) {
							html += `<li class="newslist">
										<div class="news-info">
											<a href="javascript:;">
												<h5>
													<span>小梅沙服战大唐龙宫硬件秀</span>
													<p class="time">2017-09-18</p>
												</h5>
											</a>
										</div>
										<div class="img-wrap">
											<a href="javascript">
												<div class="img_box" style="background-image:url(../img/list/img1.webp);">
												</div>
												<div class="img_box" style="background-image:url(../img/list/img2.webp)"></div>
												<div class="img_box" style="background-image:url(../img/list/img3.webp)"></div>
											</a>
										</div>
									</li>`
						}
						$('.news>ul').append(html)
					}
				})

			},
			add_dec:function(){  //字号大小的变换
				$('.add-font').on('click',function(){
					var size = parseInt($('.artText').css('fontSize'));
					if(size >= 22){
						size = 22
					}else{
						size += 2
					}
					$('.artText').css('fontSize',size)
				})
				$('.dec-font').on('click',function(){
					var size = parseInt($('.artText').css('fontSize'));
					if(size <= 16){
						size = 16
					}else{
						size -= 2
					}
					$('.artText').css('fontSize',size)
				})
			},
			book:function(){ // 翻页效果  动态特效
				var _this = this
				$('.book_left').on('click',function(){
					if(_this.num == $('.book>li').length){
					}else{
						$('.book>li').eq(_this.num).css({
							"animation":"fzhuan 1s linear",
	    		            "animation-fill-mode":"forwards",
	    		             "z-index":_this.index
						})
						
						_this.num++;
					}
				})
				$('.book_right').on('click',function(){
					if(_this.num == 2){
					}else{
						_this.num--;
						_this.index++;
						$(".book>li").eq(_this.num).css({
							"animation":"zhuan 1s linear",
	    		            "animation-fill-mode":"forwards",
	    		            "z-index":_this.index
						})
					}
				})
			}
		}
		var mhlist = new list();
		mhlist.init()
	})
})