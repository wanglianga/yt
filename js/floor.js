var imgbox=$(".shishangbox");
var leftnav=$(".youcedaohang")[0];
var li=leftnav.getElementsByTagName('a');    // 定义一个数组存储背景颜色
document.documentElement.scrollTop=1;
var obb=document.documentElement.scrollTop?
	document.documentElement:document.body;               //获取滚轮到浏览器可视区域的TOp值的兼容函数                    // 在浏览器title显示obb.scrollTop值
var now=0;
window.onscroll=function(){
	for (var i = 0; i < imgbox.length; i++) {             //遍历imgbox
		if (imgbox[i].offsetTop<=obb.scrollTop+100) {         //判断imgbox[0]的scrollTop值与obb.scrollTop值
			now=i;
			for (var j = 0; j < li.length; j++) {         //遍历li 实现跳出当前img值时 背景颜色变回原来的
				li[j].style.opacity="0";
			}
			li[i].style.opacity="1";
		}
		else{
			li[i].style.opacity="0";
	    }
	}
	if (obb.scrollTop>=1600) {
		leftnav.style.opacity="1";
	}
	else{
		leftnav.style.opacity="0";
	}
}
for (var i = 0; i < li.length; i++) {
	li[i].aa=i;
	li[i].onclick=function(){	
		now=this.aa;
		animate(obb,{scrollTop:imgbox[this.aa].offsetTop-100},400);
		li[now].style.opacity="1";
	}
	li[i].onmouseover=function(){
		for (var j = 0; j < li.length; j++) {
			if(now!=j){
               li[j].style.opacity="0";
			}
		}
		this.style.opacity="1";
	}
	li[i].onmouseout=function(){
		for (var j = 0; j < li.length; j++) {
			if(now!=j){
               li[j].style.opacity="0";
			}
		}
	}
	
}