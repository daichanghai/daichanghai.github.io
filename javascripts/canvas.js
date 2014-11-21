/**
 * Created by Administrator on 2014/11/21.
 */
window.onload=function(){
    var canvas1 = document.getElementById('canvas1');//获取显示原图的canvas元素
    canvas1.style.display="inline-block";
    if (canvas1 == null)
        return false;
    context = canvas1.getContext('2d'); //获取显示原图的canvas元素的图形上下文对象
    //获取图像源
    var image = new Image();
    image.src = "images/car.jpg";
    //绘制原图
    image.onload=function(){
        context.drawImage(image,0,0);
    };
    canvas1.onmousemove=canvas1_onmousemove;//添加原图像获取鼠标焦点时的处理函数
    canvas1.onmouseout=canvas1_onmouseout;//添加原图像失去鼠标焦点时的处理函数
};
function canvas1_onmousemove(imgObj)
{
    var canvas1,canvas2;//原图像使用的canvas元素与放大镜中图像使用的canvas元素
    var x,y;//鼠标在canvas元素中的相对坐标点
    var drawWidth,drawHeight;//鼠标所指区域的宽度与高度
    canvas1=document.getElementById("canvas1");//获取原图像使用的canvas元素
    canvas2=document.getElementById("canvas2");//获取放大镜中图像使用的canvas元素
    var context = canvas2.getContext('2d'); //获取放大镜中图像使用的canvas元素的图形上下文对象
    canvas2.style.display="inline"; //显示放大镜
    context.clearRect(0,0,canvas2.width,canvas2.height);//擦除放大镜中原图像
    x=imgObj.pageX-canvas1.offsetLeft+2;//鼠标在canvas元素中X轴上的相对坐标点+2,+2是为了避免鼠标移动到放大镜上
    y=imgObj.pageY-canvas1.offsetTop+2;//鼠标在canvas元素中Y轴上的相对坐标点+2,+2是为了避免鼠标移动到放大镜上
    canvas2.style.left=(imgObj.pageX+2)+"px";//设置放大镜在原图上的X轴上的坐标点
    canvas2.style.top=(imgObj.pageY+2)+"px";//设置放大镜在原图上的Y轴上的坐标点
    //获取放大镜图像的图像源
    var image = new Image();
    image.src = "images/car.jpg";
    //获取鼠标所指区域的宽度
    if(x+40>canvas1.width)//如果鼠标所指区域的宽度超出原图宽度
        drawWidth=canvas1.width-x;//设置鼠标所指区域宽度为原图中剩余宽度
    else
        drawWidth=40;//设置鼠标所指区域的宽度为40像素
    //获取鼠标所指区域的高度
    if(y+40>canvas1.height)//如果鼠标所指区域的高度超出原图高度
        drawHeight=canvas1.height-y;//设置鼠标所指区域高度为原图中剩余高度
    else
        drawHeight=40;//设置鼠标所指区域的高度为40像素
    //放大2倍绘制放大镜图像
    context.drawImage(image,x,y,drawWidth,drawHeight,0,0,drawWidth*2,drawHeight*2);
}
//鼠标移出原图像外
function canvas1_onmouseout()
{
    var canvas2=document.getElementById("canvas2");//获取放大镜所用canvas元素
    //重置canvas元素的位置
    canvas2.style.left="0px";
    canvas2.style.top="0px";
    //隐藏放大镜
    canvas2.style.display="none";
}
