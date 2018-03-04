function isay_telegram_set_phone(country_code,phone_number,userid)
{
  IsayGetRequest("https://account.isaynet.ru/setaccounttelephone", {"tid": userid, "tcode": country_code, "tnumber": phone_number} , 
  function(data) 
  {
  } , 
  function(error) 
  {  
  } , 
  function(error) 
  {
  });
}

function isay_telegram_get_phone(onfound,onnotfound)
{
  IsayGetRequest("https://account.isaynet.ru/gettelegramaccount", {} , 
  function(data) 
  {
    if(data.state == 0)
    {
    	 onnotfound();
    }
    else if(data.state == 1)
    {
       onfound(data.country_code,data.telnumber);
    }
  } , 
  function(error) 
  {  
  } , 
  function(error) 
  {
  }
  );
}