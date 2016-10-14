var chzhbody=getClass("chzhbody");
var chzhbodyli=getClass('chzhbodyli');
var chzhbody2=$(".chzhbody2");
	var tops=$(".imgtop");
	var bottoms=$(".imgbottom");
	var lefts=$(".imgleft");
	var rights=$(".imgright");
	for (var i = 0; i < chzhbodyli.length; i++) {
		chzhbodyli[i].index=i;
		chzhbodyli[i].onmouseover=function(){
			var ow=this.offsetWidth;
			var oh=this.offsetHeight;
			animate(tops[this.index],{height:oh},300);
			animate(bottoms[this.index],{height:oh},300);
			animate(lefts[this.index],{width:ow},300);
			animate(rights[this.index],{width:ow},300);
		}
		chzhbodyli[i].onmouseout=function(){
			var ow=this.offsetWidth;
			var oh=this.offsetHeight;
			animate(tops[this.index],{height:0},300);
			animate(bottoms[this.index],{height:0},300);
			animate(lefts[this.index],{width:0},300);
			animate(rights[this.index],{width:0},300);
		}

	}
	// for (var j = 0; j < chzhbody2img.length; j++) {
	// 	chzhbody2img[j].aa=j;
	// 	chzhbody2img[j].onmouseover=function(){
	// 		chzhbody2img[j].style.opacity=0.6;
	// 	}

	// }