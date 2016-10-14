var bannernav=$(".bannernav")[0];
var bnrnavleft=$(".bnrnav-left")[0];
var bannernavli=bnrnavleft.getElementsByTagName('li');
var bannerxxk=$(".bnr-xuanxiangka");
for (var i = 0; i < bannernavli.length; i++) {
	bannernavli[i].aa=i;
	bannernavli[i].onmouseover=function(){
		for (var j = 0; j < bannerxxk.length; j++) {
			bannerxxk[j].style.display="none";
		}
		bannerxxk[this.aa].style.display="block";	
	}
	for(var k=0;k<bannerxxk.length;k++){
		bannerxxk[k].bb=k;
		bannerxxk[k].onmouseover=function(){
			bannerxxk[this.bb].style.display="block";
		}
		bannerxxk[k].onmouseout=function(){
			bannerxxk[this.bb].style.display="none";
		}
	}
	bannernavli[i].onmouseout=function(){
		
		bannerxxk[this.aa].style.display="none";	
	}
	
	
	
}