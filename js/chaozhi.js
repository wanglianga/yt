var chzhtopbox=getClass("chzhtopbox");
var chzhbody=getClass("chzhbody");
for (var i = 0; i < chzhtopbox.length; i++) {
	chzhtopbox[i].aa=i;
	chzhtopbox[i].onmouseover=function(){
		for (var j = 0; j < chzhbody.length; j++) {
			chzhbody[j].style.display="none";
			chzhtopbox[j].style.cssText="font-weight:bold;border-bottom:4px solid #333333";
		}
		chzhbody[this.aa].style.display="block";
	    this.style.cssText="font-weight:bold;border-bottom:4px solid #e5004f";
	}
	
}