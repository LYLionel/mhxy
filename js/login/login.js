 require(["../config"],function(){
  	require(["jquery","loadHTML"],function($){
 		
 		function login(){
 			
 		}
 		login.prototype = {
 			init:function(){
 				this.user();
 				this.utip();
 				this.paword();
 				this.pd = true;
 				this.ajax();
 			},
 			user:function(){
 				$('#user_ipt').on('blur',function(){
					var value = $(this).val();
 					var email_reg = /^[^@\s\?]+@[^@\s\?]+(\.[^@\s\?]+)+$/;
 					
 					if(email_reg.test(value)){
 						$('#user').css('borderColor','#c5cddb')
 						$('.m-nerror').hide()
 						$(this).parent().find('.u-tip').hide()
 					}else{
 						$('#user').css('borderColor','red')
 						$('.m-nerror').show()
 						$('.ferrorhead').html('邮箱格式不正确')
 						$(this).parent().find('.u-tip').show()
 						this.pd = false;
 					}
 				})
 			},
 			paword:function(){
 				$('#password_input').on('blur',function(){
 					var value = $(this).val();
 					if(value.length >=6 && value.length <=16){
 						$('#password').css('borderColor','#c5cddb')
 						$('.m-nerror').hide()
 						$(this).parent().find('.u-tip').hide()
 					}else{
 						$('#password').css('borderColor','red');
 						$('.m-nerror').show();
 						$('.ferrorhead').html('密码格式不正确');
 						$(this).parent().find('.u-tip').show();
 						this.pd = false;
 					}
 				})
 			},
 			utip:function(){
 				$('.u-tip').on('click',function(){
 					$(this).parent().find('input').val('')
 					$(this).parent().css('borderColor','#c5cddb')
 				})
 			},
 			ajax:function(){
 				var _this = this
 				$('#doregister').on('click',function(){
 					var user = $('#user_ipt').val()
 					var password = $('#password_input').val()
 					if(user && password && _this.pd){
 						$.ajax({
 							type:'get',
 							url:'http://datainfo.duapp.com/shopdata/userinfo.php',
 							data:"status=register&userID="+user+"&password="+password+"",
 							success:function(data){
 								console.log(data)
 								if(data == 1){
 									window.location.href=('http://localhost:8080/html/index.html')
 								}else{
 									$('.m-nerror').show();
 									$('.ferrorhead').html('该用户已经注册过');
 								}
 							}
 						});
 					}else{
 						$('.m-nerror').show();
 						$('.ferrorhead').html('请把注册信息填写正确');
 					}
 				})
 			}
		}
 		var mhlogin = new login();
 		mhlogin.init()
  	})
  })