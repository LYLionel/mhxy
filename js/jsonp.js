define(['jquery'],function($){
	return{
		res : function(src,callback){
			var xhr = new XMLHttpRequest();
			xhr.open("get",src,true);
		
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					var data = JSON.parse(xhr.response)
					callback(data)
				}
				
				
				/*return(xhr.response.content.menghuanxiyou-lunhuan-485403)*/
			}
			xhr.send()
		}
	}

})
