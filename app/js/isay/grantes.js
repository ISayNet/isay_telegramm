function GetGrantes(service, grantes, callback)
{
var resgetgrantes = jQuery.get(oauthserver+"sapisetgrantes", {"ptoken":ptoken, "acesstoken":acesstoken,"userid":suserid, "service":service, "grant":JSON.stringify(grantes)}, function(json){ 
});
resgetgrantes.complete( function() { 
if(resgetgrantes.status == 401 ) 
{ 
    console.log(acesstoken+":Session Not Found")
    window.location.replace(oauthserver+"?ptoken="+ptoken);
   
}
else if(resgetgrantes.status == 400 ) 
{
    console.log(acesstoken+":App not registred")
    window.location.replace(oauthserver+"?ptoken="+ptoken);   
}
else if(resgetgrantes.status == 424 ) 
{
    console.log(acesstoken+":IP Changed")
    window.location.replace(oauthserver+"?ptoken="+ptoken);
}
else if(resgetgrantes.status == 422) 
{
    console.log(acesstoken+":Access token not found")
    window.location.replace(oauthserver+"?ptoken="+ptoken);
}
else if(resgetgrantes.status == 404) 
{
    console.log(acesstoken+":Service not found")
    window.location.replace("getgrant.html");
}
else if(resgetgrantes.status == 403) 
{
    console.log(acesstoken+":Grant not found")
    window.location.replace("getgrant.html");
}
else
{
 callback(resgetgrantes.status)
}
});      
}

function GetSecurityGrantes(service, grantes, callback)
{
var resgetgrantes = jQuery.get(oauthserver+"sapisetgrantessecure", {"ptoken":ptoken, "acesstoken":acesstoken,"userid":suserid, "service":service, "grant":JSON.stringify(grantes)}, function(json){ 
});
resgetgrantes.complete( function() { 
if(resgetgrantes.status == 401 ) 
{ 
    console.log(acesstoken+":Session Not Found")
    window.location.replace(oauthserver+"?ptoken="+ptoken); 
}
else if(resgetgrantes.status == 400 ) 
{
    console.log(acesstoken+":App not registred")
    window.location.replace(oauthserver+"?ptoken="+ptoken);   
}
else if(resgetgrantes.status == 424 ) 
{
    console.log(acesstoken+":IP Changed")
    window.location.replace(oauthserver+"?ptoken="+ptoken);
}
else if(resgetgrantes.status == 422) 
{
    console.log(acesstoken+":Access token not found")
    window.location.replace(oauthserver+"?ptoken="+ptoken);
}
else if(resgetgrantes.status == 404) 
{
    console.log(acesstoken+":Service not found")
    window.location.replace("getgrant.html");
}
else if(resgetgrantes.status == 403) 
{
    console.log(acesstoken+":Grant not found")
    window.location.replace("getgrant.html");
}
else
{
 callback(resgetgrantes.status)
}
});      
}
