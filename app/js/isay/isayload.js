var acesstoken = getCookie("acesstoken");
var suserid = getCookie("userid");
if(acesstoken == "")
{
 window.location.replace(oauthserver+"?ptoken="+ptoken);
}

