/*var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{
//android.content.Context.VIBRATOR_SERVICE

var layout = new android.widget.LinearLayout(ctx); 
var button = new android.widget.Button(ctx); 
button.setText("点我呀"); 

var guix=0;
var guiy=ctx.getWindowManager().getDefaultDisplay().getHeight()/2;

button.setOnClickListener(new android.view.View.OnClickListener( { 
onClick: function(v,e){ 
//点击内容
switch(e.getAction())
{
case 0:
guix=e.getX();
guiy=e.getY();
ctx.vibrate(3);
break;
case 1:
var guix2=parseInt(e.getX()-guix1)*-1/10;
var guiy2=parseInt(e.getY()-guiy1)*-1/10;
guix=guix+guix2;
guiy=guiy+guiy2;
window.update(guix,guiy,-1,-1);
break;
}
return true;
}})); 
layout.addView(button); 
button=new android.widget.PopupWindow(layout, dip2px(ctx,85), dip2px(ctx,45)); 
button.setContentView(layout); 
window.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/15);
window.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight()/10);
button.showAtLocation(ctx.getWindow().getDecorView(),4,android.view.Gravity.LEFT | android.view.Gravity.TOP,4);

}}));

}
catch(err){ print("很抱歉，无法显示按钮"); 

function dip2px(ctx, dips){ 
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

*/
