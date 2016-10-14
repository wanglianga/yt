var  bnrimgbox=getClass("bnrimgbox")[0];
var  bnrimg=getClass("bnrimg")[0];
var  immg=getClass('immg');
var  bnrlist=getClass("list")[0];
var  lii=getClass('lii');
var  bannerbodybox=getClass("bannerbodybox")[0];
var  bnrbtn=getClass("bnrbtn");
var  bnrbtnleft=getClass("bnrbtn-left")[0];
var  bnrbtnleftimg=bnrbtnleft.getElementsByTagName('img')[0];
var  bnrbtnright=getClass("bnrbtn-right")[0];
var  bnrbtnrightimg=bnrbtnright.getElementsByTagName('img')[0];
var  bnrright=getClass("bnr-right")[0];
var  bannerbody1=getClass("bannerboody");
var num=0;
function youyi(){
    num++;
    if (num>=immg.length) {
    	num=0;
    }
    for (var i = 0; i < immg.length; i++) {
    	immg[i].style.zIndex="0";
    	lii[i].style.background="#211616";
        bannerbody1[i].style.opacity="0";
    	
    }   immg[num].style.zIndex="6";
    	lii[num].style.background="#e5004f";
         bannerbody1[num].style.opacity="1";
}       
var t=setInterval(youyi,2000);
function zuoyi(){
    num--;
    if (num<=-1) {
        num=immg.length-1;
    }
    for (var i = 0; i < immg.length; i++) {
        immg[i].style.zIndex="0";
        lii[i].style.background="#211616";
         bannerbody1[i].style.opacity="0";
        
    }   immg[num].style.zIndex="6";
        lii[num].style.background="#e5004f";
         bannerbody1[num].style.opacity="1";
}       
bnrimg.onmouseover=function(){
    bnrbtnleft.style.display="block";
    bnrbtnright.style.display="block";
    clearInterval(t);
}
bnrimg.onmouseout=function(){
    bnrbtnleft.style.display="none";
    bnrbtnright.style.display="none";
    t=setInterval(youyi,2000);
}
bnrright.onmouseover=function(){
    bnrright.style.right="10px";
}
bnrright.onmouseout=function(){
    bnrright.style.right="0px";
}
bnrbtnleft.onmouseover=function(){
    bnrbtnleft.style.backgroundPosition="0px 60px";
}
bnrbtnright.onmouseover=function(){
    bnrbtnright.style.backgroundPosition="30px 60px";
}
bnrbtnleft.onmouseout=function(){
    bnrbtnleft.style.backgroundPosition="0px 0px";
}
bnrbtnright.onmouseout=function(){
    bnrbtnright.style.backgroundPosition="30px 0px";
}
bnrbtnleft.onclick=function(){
    zuoyi();
}
bnrbtnright.onclick=function(){
    youyi();
}
for (var i = 0; i < lii.length; i++) {
    lii[i].aa=i;
    lii[i].onmouseover=function(){
        for (var j = 0; j < immg.length; j++) {
        immg[j].style.zIndex="0";
        lii[j].style.background="#211616";
        bannerbody1[j].style.opacity="0";
        }
        immg[this.aa].style.zIndex="6";
        lii[this.aa].style.background="#e5004f";
        bannerbody1[this.aa].style.opacity="1";
       num=this.aa;
    }
    
}