function cebianlunbo(btnleft,btnright,ssnrimg){
	for (var i = 1; i < ssnrimg.length; i++) {
	ssnrimg[i].style.left="176px";
}
var now=0;
var next=0;
function zuoyi(){
	next++;
	if(next>=ssnrimg.length){
		next=0;
	}
	animate(ssnrimg[now],{left:-136},500);
	ssnrimg[next].style.left="176px";
	animate(ssnrimg[next],{left:20},500);
	now=next;
} 
function youyi(){
	next--;
	if(next<=-1){
		next=ssnrimg.length-1;
	}
	animate(ssnrimg[now],{left:176},500);
	ssnrimg[next].style.left="-136px";
	animate(ssnrimg[next],{left:20},500);
	now=next;
}
btnright.onclick=function(){
	youyi();
}
btnleft.onclick=function(){
	zuoyi();
}
}
var btnL=$('.ssnrltbtm-prebox');
var imgbox=$('.ssnrleft-bottom');
var btnR=$('.ssnrltbtm-next');
for(var i=0;i<imgbox.length;i++){
	var img=$('.ssnrltbtm-img',imgbox[i]);
	cebianlunbo(btnL[i],btnR[i],img)
}


