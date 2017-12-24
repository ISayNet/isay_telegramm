var args = ParseGet();
setCookie("acesstoken",args["acesstoken"],5);
setCookie("userid",args["userid"],5);
window.location.replace(isay_homeurl);
