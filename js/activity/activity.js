require(["../config"],function(){
	require(["jquery","loadHTML"],function($){
		function adctivity(){
			
		}
		adctivity.prototype = {
			init:function(){
				this.tab();
				this.f_top();
				this.to_top();
			},
			tab:function(){ //右侧tab切换
				$('.menu>a').on('click',function(){
					$('.menu>a').removeClass('current')
					$(this).addClass('current')
				})
			},
			f_top:function(){  //top返回顶部的显示和隐藏
				$(window).scroll(function(){
					if($('body').scrollTop()>window.innerHeight+100){
						$('.gototop').fadeIn(300)
					}else{
						$('.gototop').fadeOut(300)
					}
				})
			},
			to_top:function(){ //top返回顶部
				$('.gototop').on('click',function(){
					$('body').animate({
						scrollTop:0
					},500)
				})
			}
		}
		adctivity = new adctivity();
		adctivity.init()
	})
})
