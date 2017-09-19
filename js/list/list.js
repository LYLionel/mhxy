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
			},
			right_fixed: function() {
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
			loadli: function() {
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
			add_dec:function(){
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
			}
		}
		var mhlist = new list();
		mhlist.init()
	})
})