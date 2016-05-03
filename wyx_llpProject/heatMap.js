var xmlHttp;
function Test(){
	document.getElementById("testHint").innerHTML="Success";
}

function getData()
{ 
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
 {
 alert ("Browser does not support HTTP Request");
 return;
 }
var url="forTest.php";
//url=url+"?q="+str;
url=url+"?t="+Math.random();
//document.getElementById("testHint").innerHTML="Now Here";
xmlHttp.onreadystatechange=function()
  {
  if (xmlHttp.readyState==4 && xmlHttp.status==200)
    {
    	//alert(xmlHttp.responseText);
    document.getElementById("testHint").innerHTML=xmlHttp.responseText;
    }
  }
xmlHttp.open("GET",url,true);
xmlHttp.send();
}

function GetXmlHttpObject()
{
var A=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 A=new XMLHttpRequest();
 //document.getElementById("testHint").innerHTML="1111";
 }
catch (e)
 {
 //Internet Explorer
 try
  {
  A=new ActiveXObject("Msxml2.XMLHTTP");
  document.getElementById("testHint").innerHTML="2222";
  }
 catch (e)
  {
  A=new ActiveXObject("Microsoft.XMLHTTP");
  document.getElementById("testHint").innerHTML="3333";
  }
 }
return A;
}
