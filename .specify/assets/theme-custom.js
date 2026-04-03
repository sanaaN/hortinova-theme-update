var cookieName         = 'user_lang';
let userCookieName     = 'user_type';
var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
               navigator.language ||   // All browsers
               navigator.userLanguage; // IE <= 10*/



$(document).ready(function() {

  let cookieValue = getLangData();  
  let pathname = window.location.pathname;
  if (!cookieValue || !cookieValue.length) {
       var lang = language.substr(0, 2);
       setCookie(lang, 5);
        if(lang == 'fr' && pathname.indexOf("/"+lang+"/") === -1 ){
              $("#localization_form-ancmt .localization-form__item input").val(lang);
            
              $("#localization_form-ancmt").submit();
        }
  } 

  $(window).on('pageshow', function () {
    if (window.location.pathname === '/') {
        $.cookie(userCookieName, null, { path: '/' });
    }
  });

  
  let userType = getUserType();
  if(userType == "pro") {
    if(!$("#header-hobby").hasClass('hidden')) {
      $("#header-hobby").addClass('hidden');
    }
    $("#header-pro").removeClass('hidden');
  } else if (userType == "hobby") {
    if(!$("#header-pro").hasClass('hidden')) {
      $("#header-pro").addClass('hidden');
    }
     $("#header-hobby").removeClass('hidden');
      $("#header-hobby .header-container.header-container--bottom").removeClass('hidden');
     $("#header-hobby #site-menu-sidebar").removeClass('hidden');

    if ($(window).width() <= 1024) {
      $("#header-hobby .mobile-menu-button").removeClass('hidden');
      $("#header-hobby #site-header .mobile-menu-button").on('click', function(){
        
          if($("#header-hobby #site-menu-sidebar").hasClass(" sidebar--opened")) {
              $("#header-hobby #site-menu-sidebar").removeClass("sidebar--opened");
              $("#header-hobby #site-menu-sidebar").css('display','none','important;');
          } else {
             $("#header-hobby #site-menu-sidebar").addClass("sidebar--opened");
              $("#header-hobby #site-menu-sidebar").css('display','grid','important;');
          }
      });
    }
      
  } else {
      $("#header-pro").addClass('hidden');
      $("#header-hobby .header-container.header-container--bottom").addClass('hidden');
      $("#header-hobby #site-menu-sidebar").addClass('hidden');
  }

  
     

 $("#element-image_T4LbVn").find('a').on('click',function(){
    let cookieUserType = getUserType();  
    if (!cookieUserType || !cookieUserType.length) {
      setUserTypeCookie('pro', 30);
    }
   });

   $("#element-image_jxc6ih").find('a').on('click',function(){
    let cookieUserType = getUserType();  
    if (!cookieUserType || !cookieUserType.length) {
      setUserTypeCookie('hobby', 30);
    }
   });

  $("nav.footer-item__menu a.user_type").on('click',function(){
    let cookieUserType = getUserType(); 
    let footer_url = $(this).attr('href');
    console.log(footer_url.indexOf("pro") !== -1 );
    if(footer_url.indexOf("pro") !== -1) {
       if (cookieUserType == null || cookieUserType != 'pro') {
        setUserTypeCookie('pro', 30);
     }
    } else if (footer_url.indexOf("hobby") !== -1  ) {
      if (cookieUserType == null || cookieUserType != 'hobby') {
        setUserTypeCookie('hobby', 30);
     }
    }
   });

  $("#site-header #logo a.logo-img").click(function(){
    $.cookie(userCookieName, null, { path: '/' });
  });

 
});


function getLangData() {
    try {
        return JSON.parse($.cookie(cookieName));
    } catch (e) {
        return null;
    }
}
function getUserType() {
    try {
        return JSON.parse($.cookie(userCookieName));
    } catch (e) {
        return null;
    }
}
function setCookie(value, cookieLifetime)
{
    let expirationDate = new Date();
    data = JSON.stringify(value);
     expirationDate.setTime(expirationDate.getTime() + ( cookieLifetime * 60 * 60 * 1000));
    $.cookie(cookieName, data, {path: '/', expires: expirationDate});
}
function setUserTypeCookie(value, cookieLifetime)
{
    let expirationDate = new Date();
    data = JSON.stringify(value);
     expirationDate.setTime(expirationDate.getTime() + ( cookieLifetime * 60 * 60 * 1000));
    $.cookie(userCookieName, data, {path: '/', expires: expirationDate});
}



