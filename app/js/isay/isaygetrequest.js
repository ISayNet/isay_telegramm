function IsayGetRequest(url,data,cdone,cerror,crerror)
{
     data['acesstoken'] = acesstoken;
     data['ptoken'] = ptoken;
	jQuery.getJSON( url, data )
	.done(function( json )
       {
        if(json.error)
        {
         cerror(json.error.code);
        }
	else if(json.notgrant)
        {
        GetGrantes(json.notgrant.service,json.notgrant.grants,function(status) {
	if(status == 200) IsayGetRequest(url,data,cdone,cerror,crerror);
	else cerror(status);
        }
        );
        }
        else if(json.response)
	{
        cdone(json.response);
	}
	})
	.fail(function( jqxhr, textStatus, error ) {
        crerror(error)
	});

}

function IsayGetRequestSecurity(url,data,cdone,cerror,crerror)
{
     data['acesstoken'] = acesstoken;
     data['ptoken'] = ptoken;
	jQuery.getJSON( url, data )
	.done(function( json )
       {
        if(json.error)
        {
         cerror(json.error.code);
        }
	else if(json.notgrant)
        {
        GetSecurityGrantes(json.notgrant.service,json.notgrant.grants,function(status) {
	if(status == 200) IsayGetRequestSecurity(url,data,cdone,cerror,crerror);
	else cerror(status);
        }
        );
        }
        else if(json.response)
	{
        cdone(json.response);
	}
	})
	.fail(function( jqxhr, textStatus, error ) {
        crerror(error)
	});

}

function IsayPostRequestSecurity(url,data,cdone,cerror,crerror)
{
     data['acesstoken'] = acesstoken;
     data['ptoken'] = ptoken;
	jQuery.post( url, data, 'json' )
	.done(function( json )
       {
        if(json.error)
        {
         cerror(json.error.code);
        }
	else if(json.notgrant)
        {
        GetSecurityGrantes(json.notgrant.service,json.notgrant.grants,function(status) {
	if(status == 200) IsayGetRequestSecurity(url,data,cdone,cerror,crerror);
	else cerror(status);
        }
        );
        }
        else if(json.response)
	{
        cdone(json.response);
	}
	})
	.fail(function( jqxhr, textStatus, error ) {
        crerror(error)
	});

}

function IsayGetRequest_nologin(url,data,cdone,crerror)
{
    jQuery.getJSON( url, data )
    .done(
    function( json )
    {
        cdone(json.response);
    })
    .fail(
    function( jqxhr, textStatus, error ) {
        crerror(error)
    });

}
function IsayGetRequest_nologin_noblocking(url)
{
var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText).response;
}

function IsayPostRequest_nologin_noblocking(url,data)
{
var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url, false ); // false for synchronous request
    xmlHttp.send( data );
    return JSON.parse(xmlHttp.responseText).response;
}