window.onload = function(){
	 var music = document.getElementById("music"),
		 audio = document.getElementsByTagName("audio")[0],
		 page1 = document.getElementById("page1"),
		 page2 = document.getElementById("page2"),
		 page3 = document.getElementById("page3");				  
	
	//当音乐停止时，音乐图标停止转动
	 audio.addEventListener("ended", function(event){
		 music.setAttribute("class","")
	 },false);
	 
	 //点击音乐按钮，开启音乐播放
	 music.addEventListener("touchstart", function(event){
		 if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
		}else{
			audio.pause();
			this.setAttribute("class","stop");
		}
	},false);

	//翻页效果
	page1.addEventListener("touchstart",function(event) {
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top     = "100%";
		   

		setTimeout(function(){
			 page2.setAttribute("class","fadeOut");
			 page3.setAttribute("class","fadeIn")
		},3500)
	})
	
}