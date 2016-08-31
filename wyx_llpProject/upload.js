var xmlHttp;

function getData()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
 {
 alert ("Browser does not support HTTP Request");
 return;
 }
var url="sendLoc.php";
//url=url+"?q="+str;
url=url+"?t="+Math.random();
//document.getElementById("textEx").innerHTML="Now Here";
xmlHttp.onreadystatechange=function()
  {
  if (xmlHttp.readyState==4 && xmlHttp.status==200)
    {
    	//alert("Ready");
      //document.getElementById("textEx").innerHTML=xmlHttp.responseText;
    }
  }
xmlHttp.open("GET",url,false);
xmlHttp.send();

}

function GetXmlHttpObject()
{
var A=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 A=new XMLHttpRequest();
 //document.getElementById("textEx").innerHTML="1111";
 }
catch (e)
 {
 //Internet Explorer
 try
  {
  A=new ActiveXObject("Msxml2.XMLHTTP");
  document.getElementById("textEx").innerHTML="2222";
  }
 catch (e)
  {
  A=new ActiveXObject("Microsoft.XMLHTTP");
  document.getElementById("textEx").innerHTML="3333";
  }
 }
return A;
}
