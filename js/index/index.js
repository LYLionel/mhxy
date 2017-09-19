require(["../config"], function() {
	require(["jquery", "jsonp", "canvas", "loadHTML","hoverdir"], function($, jsonp) {

		function index() {
		}
		index.prototype = {
			init: function() {
				this.ajax();
				this.banner();
				this.tab();
				this.index = 0;
				this.alltab('.m3_tab','m3_tab_active','.m3_tab_main','.m3-nav-line');
				this.alltab('.m3_m_tab','m3_tab_active','.m3_m_main','.m3_m_line');
				this.alltab('.news-nav','m3_tab_active','.slide-wrap','.status-00');
				this.alltab('.m2_news-nav','m3_tab_active','.mhrd-item','.status-01');
				this.jb('.img_mb','.m3_line');
				this.hoverdir('.m3_m1_img_box');
				this.m3_hover();
				this.hoverdir('.m3_m_l_imgbox');
				this.hoverdir('.m3_m_l_imgul>li');
				this.hoverdir('.mhtk-img');
				this.hoverdir('.tuku-list>li');
				this.go();
				this.m4_tab();
				this.m4_line();
				this.role();
				this.floor_dh();
				this.floor_audio();
			},
			ajax: function() {
				var _this = this
				jsonp.res('https://a.game.163.com/fz/interface/frontend/fz.do?pos=menghuanxiyou-lunhuan-485403', function(data) {
					var content = data.result.content['menghuanxiyou-lunhuan-485403']
					_this.data(content)
				})
			},
			data : function(content){
				var html = '';
				for(var i = 0; i < content.length; i++) {
						html += '<li><img src="' + content[i].src + '" alt="" /></li>'
					}
					$('.m2_banner_ul').html(html)
			},
			banner : function(){
				var _this = this
				$('.m2_banner_small>li').on('mouseenter',function(){
					
					if(_this.index == $(this).index()){
						return
					}else{
						$('.m2_banner_ul>li').eq($(this).index()).fadeIn(100).siblings().fadeOut(200)
						
						$(this).addClass('banner_active').siblings().removeClass('banner_active')
						_this.index = $(this).index()
					}
					
					
				})
			},
			tab : function(){
				var _this = this
				$('.m2_tab_ul>li').on('mouseenter',function(){
					$(this).css('color','#f24854').siblings().css('color','#3C3C3C')
					$('.m2_tab_main>li').eq($(this).index()).addClass('show').siblings().removeClass('show')
					$('.nav-line').stop().animate({
						left : $(this).index() * 72 
					},300)
					
				})
			},
			alltab : function(a,b,c,d){
				$(''+a+'>li').on('mouseenter',function(){
					$(this).addClass(b).siblings().removeClass(b)
					$(''+c+'>li').eq($(this).index()).addClass('show').siblings().removeClass('show')
					$(d).stop().animate({
						left: $(this).index()*$(d).width()
					},300)
				})
			},
			jb : function(a,b){
				$(a).on('mouseenter',function(){
					$(b).stop().animate({
						width : 50
					},300)
				})
				$(a).on('mouseleave',function(){
					$(b).stop().animate({
						width : 20
					},300)
				})
			},
			hoverdir : function(a){
				$(a).hoverdir()
			},
			m3_hover : function(){
				$('.m3_m1_img_box').on('mouseenter',function(){
					$('.mb_wen').stop().animate({
						bottom:15
					},500);
					$('.video').stop().animate({
						height:27,
						top:18
					},500)
				})
				$('.m3_m1_img_box').on('mouseleave',function(){
					$('.mb_wen').stop().animate({
						bottom:10
					});
					$('.video').stop().animate({
						height:0,
						top:32
					},500)
				})
				$('.m3_m_l_imgbox').on('mouseenter',function(){
					$(this).find('.img_test').stop().animate({
						bottom:62
					},500)
					$(this).find('.xianti').stop().animate({
						bottom:110,
						height:44
					},500)
				})
				$('.m3_m_l_imgbox').on('mouseleave',function(){
					$(this).find('.img_test').stop().animate({
						bottom:10
					},500)
					$(this).find('.xianti').stop().animate({
						bottom:40,
						height:0
					},500)
				})
				$('.m3_m_l_imgul>li').on('mouseenter',function(){
					$(this).find('.li_img_test').stop().animate({
						bottom:10
					},500)
					$(this).find('.li_pic').stop().animate({
						bottom:50,
						height:27
					},500)
				})
				$('.m3_m_l_imgul>li').on('mouseleave',function(){
					$(this).find('.li_img_test').stop().animate({
						bottom:-16
					},500)
					$(this).find('.li_pic').stop().animate({
						bottom:10,
						height:0
					},500)
				})
				$('.mhtk-img').on('mouseenter',function(){
					$(this).find('.img_test').stop().animate({
						bottom:62
					},500)
					$(this).find('.xianti').stop().animate({
						bottom:110,
						height:44
					},500)
				})
				$('.mhtk-img').on('mouseleave',function(){
					$(this).find('.img_test').stop().animate({
						bottom:10
					},500)
					$(this).find('.xianti').stop().animate({
						bottom:40,
						height:0
					},500)
				})
				$('.tuku-list>li').on('mouseenter',function(){
					$(this).find('.li_img_test').stop().animate({
						bottom:10
					},500)
					$(this).find('.li_pic').stop().animate({
						bottom:50,
						height:27
					},500)
				})
				$('.tuku-list>li').on('mouseleave',function(){
					$(this).find('.li_img_test').stop().animate({
						bottom:-16
					},500)
					$(this).find('.li_pic').stop().animate({
						bottom:10,
						height:0
					},500)
				})
			},
			go : function(){
				$('.i-go').on('mouseover',function(){
					var $i = $(this).find('i')
					$i.stop().animate({
						right:-5
					},300,function(){
						$i.hide()
					})
					$(this).stop().animate({
						paddingLeft : 8
					})
				})
				
				$('.i-go').on('mouseout',function(){
					var $i = $(this).find('i')
					$i.stop().show().animate({
						right:17
					},300)
					$(this).stop().animate({
						paddingLeft : 0
					})
				})
				
			},
			m4_tab : function(){
				var _this = this
				this.m4_timer = setInterval(function(){
					var index = $('.m4_show').index()
					if(index == 3){
						index = 0
					}else{
						index++
					}
					$('.m4_banner_ul>li').eq(index).addClass('show').siblings().removeClass('show')
					$('.m4_banner_nav>li').eq(index).addClass('m4_show').siblings().removeClass('m4_show')
				},2000)
				$('.brand-box').on('mouseover',function(){
					clearInterval(_this.m4_timer)
				});
				$('.m4_banner_nav>li').on('mouseover',function(){
					$('.m4_banner_ul>li').eq($(this).index()).addClass('show').siblings().removeClass('show')
					$('.m4_banner_nav>li').eq($(this).index()).addClass('m4_show').siblings().removeClass('m4_show')
				})
				$('.brand-box').on('mouseout',function(){
					_this.m4_timer = setInterval(function(){
						var index = $('.m4_show').index()
						if(index == 3){
							index = 0
						}else{
							index++
						}
						$('.m4_banner_ul>li').eq(index).addClass('show').siblings().removeClass('show')
						$('.m4_banner_nav>li').eq(index).addClass('m4_show').siblings().removeClass('m4_show')
					},2000)
				})
			},
			m4_line : function(){
				$('.link-list>li').on('mouseover',function(){
					$(this).find('.b_line').stop().animate({
						width:28,
						left:34
					},300)
				})
				$('.link-list>li').on('mouseout',function(){
					$(this).find('.b_line').stop().animate({
						width:0,
						left:47
					},300)
				})
			},
			role : function(){
				$('.peo .role-txt').on('mouseenter',function(){
					$(this).parent().width(538)
					$(this).parent().siblings().width(76)
					$(this).parent().addClass('role_show')
					$(this).parent().siblings().removeClass('role_show')
				})
				$('.role_tab > li').on('click',function(){
					if($('.w1016').index() < $(this).index()){
						$(this).find('.group-item').css('left','1016px')
					}
					$(this).addClass('w1016').siblings().removeClass('w1016')
					$(this).find('.group-item').animate({
						width:938,
						left:87
					},300)
					$(this).siblings().find('.group-item').width(0)
				})
			},
			floor_dh : function(){
				this.sum = 0 ;
				setInterval(function(){
					this.sum += 1
					if(this.sum == 8){
						this.sum = 0
					}
					$('.west-01').css('backgroundPositionX','-'+this.sum*200+'px')
					$('.west-02').css('backgroundPositionX','-'+this.sum*200+'px')
					$('.west-03').css('backgroundPositionX','-'+this.sum*170+'px')
					$('.west-04').css('backgroundPositionX','-'+this.sum*210+'px')
				}.bind(this),200)
			},
			floor_audio : function(){
				this.mp3 = ["cac","denlu","dhw","hgs","jnyw","jyc","nerc","tg","zzg"]
				console.log()
				var _this = this
				$(window).scroll(function(){
					var scrolltop = $(this).scrollTop()
					var bott_hei = $('body').height()-$('#floor_box').height()-990;
					if( scrolltop > bott_hei){
						if(!$('#adu').attr('src')){
							$('#adu').attr('src','../mp3/'+_this.mp3[Math.random()*9 | 0]+'.mp3')
						}else{
							
						}
					}
					if(scrolltop < bott_hei){
						$('#adu').attr('src','')
					}
					
				})
			}
			
		}
		var menghuan = new index()
		menghuan.init()

	});
})