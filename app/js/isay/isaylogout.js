function isay_logout()
{
 setCookie("acesstoken","",5);
 window.location.replace(oauthserver+"logout?ptoken="+ptoken);
}