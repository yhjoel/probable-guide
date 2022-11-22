function ex32(){
    var p= parseInt( document.getElementById("p").value);
    var x1=p;
    var x2=(x1*(Math.pow(x1,3)+2*p))/(2*Math.pow(x1,3)+p);
    var E=Math.abs((x2-x1)/x1);
    while(E>0.00001){
        x1=x2;
        x2=(x1*(Math.pow(x1,3)+2*p))/(2*Math.pow(x1,3)+p);
        E=Math.abs((x2-x1)/x1);
   
    }
   
    document.getElementById('Ex32').innerHTML="The cubic root of a number: "+p+" is:"+"<br>"+x2;
   
   }
   function ex21(){
    var a= parseInt( document.getElementById("a").value);
    var b= parseInt( document.getElementById("b").value);
    var l=Math.PI*(a+b)
    var ra=Math.sqrt((3*a+b)*(a+3*b))
   var per=l*(3-(ra/(a+b)))
   
   
    document.getElementById('Ex21').innerHTML="The perimeter of an ellipse: "+a+"in ,"+b+"in"+"<br>"+per;
   
   }
   function ex12(){
    var alpha= Math.PI/8;
    var beta= Math.PI/6;
   
    var lado1=Math.tan(alpha+beta);
    var lado2=(Math.tan(alpha)+Math.tan(beta))/(1-Math.tan(alpha)*Math.tan(beta));
   lado1=lado1.toFixed(2)
   lado2=lado2.toFixed(2)
    var text1=""
   if (lado1==lado2){
       text1+="The Identity is correct "+lado1+"  =  "+lado2+""
   
   }else{
   text1+="The Identity isn't correct "+lado1+"  !=  "+lado2+""
   }

    document.getElementById('Ex12').innerHTML=text1;
   
   }
   
function ex11(){
    var x= parseInt( document.getElementById("x").value);
    var lado1=Math.pow((Math.sin(x)+Math.cos(x)),2);
    var lado2=1+2*(Math.sin(x)*Math.cos(x));
    var text1=""
   if (lado1==lado2){
       text1+="a) es verdadero "+lado1+"  =  "+lado2+""
   
   }else{
   text1+="a) es falso "+lado1+"  !=  "+lado2+""
   }
   text2=""
   var blado1=(1-2*Math.cos(x)-3*Math.pow(Math.cos(x),2))/Math.pow(Math.sin(x),2)
   var blado2=(1-3*Math.cos(x))/(1-Math.cos(x))
   blado1=blado1.toFixed(2)
   blado2=blado2.toFixed(2)
   if(blado1==blado2){
   text2+="b) es verdadero "+blado1+"  =  "+blado2+" "
   
   }else{
   text2+="b) es falso "+blado1+"  !=  "+blado2+""
   
   }
   
    document.getElementById('Ex11').innerHTML=text1+"<br>"+"<br>"+text2;
   
   }

