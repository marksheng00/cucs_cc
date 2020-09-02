window.onload=function () {
		        var Odiv=document.createElement("div"); 
				var img=document.createElement("img");
				img.src="http://baike.baidu.com/cms/rc/240x112dierzhou.jpg";
				Odiv.appendChild(img);		
				img.style.cssText="width:100%;height:auto;overflow: hidden";
		        Odiv.style.cssText=" position: fixed; top: 0; left: 0;width:100%;height:auto;overflow: hidden";    
		        document.body.appendChild(Odiv);
}
