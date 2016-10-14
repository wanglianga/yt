function shishangmp(shishangbox,shishangimg,shishangbtnleft,shishangbtnright,shishangli){
	var now=0;
    var next=0;
for (var i = 1; i < shishangimg.length; i++) {
	shishangimg[i].style.left="390px";
}
shishangbtnright.onclick=function(){
	if (next<1) {
		next++;
	}
    animate(shishangimg[now],{left:-390},1000);
    animate(shishangimg[next],{left:0},1000);
    shishangli[now].style.background="url(images/trriger.png) 0 0";
    shishangli[next].style.background="url(images/trriger.png) 0 13px";
}
shishangbtnright.onmouseover=function(){
	shishangbtnright.style.background="url(./images/prevnext.png) 30px 60px";
}
shishangbtnright.onmouseout=function(){
	shishangbtnright.style.background="url(./images/prevnext.png) 30px 0px";
}
shishangbtnleft.onclick=function(){
	if (next<1) {
		next++;
	}
    animate(shishangimg[now],{left:0},1000);
    animate(shishangimg[next],{left:390},1000);
    shishangli[now].style.background="url(images/trriger.png) 0 13px";
    shishangli[next].style.background="url(images/trriger.png) 0 0";
}
shishangli[0].onmouseover=function(){
	shishangbtnleft.onclick();
}
shishangli[1].onmouseover=function(){
	shishangbtnright.onclick();
}
shishangbtnleft.onmouseover=function(){
	shishangbtnleft.style.background="url(./images/prevnext.png) 0px 60px";
}
shishangbtnleft.onmouseout=function(){
	shishangbtnleft.style.background="url(./images/prevnext.png) 60px 0px";
}
shishangbox.onmouseover=function(){
	shishangbtnleft.style.display="block";
	shishangbtnright.style.display="block";
	shishangimg[now].style.opacity="0.8";
}
shishangbox.onmouseout=function(){
	shishangbtnleft.style.display="none";
	shishangbtnright.style.display="none";
	shishangimg[now].style.opacity="1";
}

}
var ssnrmid0=$(".ssnr-midimg0")[0];
var ssnrmidbox0=$(".ssnr-mid0")[0];
var ssnrmidimg0=ssnrmid0.getElementsByTagName('img');
var ssnrmidleftbtn0=$(".ssnr-midleftbtn0")[0];
var ssnrmidrightbtn0=$(".ssnr-midrightbtn0")[0];
var ssnrmidlist0=$(".ssnr-midlist0")[0];
var ssnrmidlistli0=ssnrmidlist0.getElementsByTagName('li');
shishangmp(ssnrmidbox0,ssnrmidimg0,ssnrmidleftbtn0,ssnrmidrightbtn0,ssnrmidlistli0);
var ssnrmid1=$(".ssnr-midimg1")[0];
var ssnrmidbox1=$(".ssnr-mid1")[0];
var ssnrmidimg1=ssnrmid1.getElementsByTagName('img');
var ssnrmidleftbtn1=$(".ssnr-midleftbtn1")[0];
var ssnrmidrightbtn1=$(".ssnr-midrightbtn1")[0];
var ssnrmidlist1=$(".ssnr-midlist1")[0];
var ssnrmidlistli1=ssnrmidlist1.getElementsByTagName('li');
shishangmp(ssnrmidbox1,ssnrmidimg1,ssnrmidleftbtn1,ssnrmidrightbtn1,ssnrmidlistli1);
var ssnrmid2=$(".ssnr-midimg2")[0];
var ssnrmidbox2=$(".ssnr-mid2")[0];
var ssnrmidimg2=ssnrmid2.getElementsByTagName('img');
var ssnrmidleftbtn2=$(".ssnr-midleftbtn2")[0];
var ssnrmidrightbtn2=$(".ssnr-midrightbtn2")[0];
var ssnrmidlist2=$(".ssnr-midlist2")[0];
var ssnrmidlistli2=ssnrmidlist2.getElementsByTagName('li');
shishangmp(ssnrmidbox2,ssnrmidimg2,ssnrmidleftbtn2,ssnrmidrightbtn2,ssnrmidlistli2);

