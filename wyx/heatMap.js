var xmlHttp;
function Test(){
	document.getElementById("txtHint").innerHTML="Success";
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
//url=url+"?sid="+Math.random();
xmlHttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlHttp.open("GET",url,true);
xmlHttp.send(null);
}

function GetXmlHttpObject()
{
var A=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 A=new XMLHttpRequest();
 }
catch (e)
 {
 //Internet Explorer
 try
  {
  A=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  A=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return A;
}
