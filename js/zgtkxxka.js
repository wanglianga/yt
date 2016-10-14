var yintaixuangxiangka=getClass("yintaixuangxiangka");
var yintaixuangxiangkaimg=getClass("yintaixuangxiangkaimg");
for (var i = 0; i < yintaixuangxiangka.length; i++) {
	yintaixuangxiangka[i].aa=i;
	yintaixuangxiangka[i].onmouseover=function(){
		for (var j = 0; j < yintaixuangxiangkaimg.length; j++) {
			yintaixuangxiangkaimg[j].style.display="none";
			yintaixuangxiangka[j].style.cssText="font-weight:normal;border-bottom:4px solid #333333";
		}
		yintaixuangxiangkaimg[this.aa].style.display="block";
	    this.style.cssText="font-weight:bold;border-bottom:4px solid #e5004f";
	}
	
}