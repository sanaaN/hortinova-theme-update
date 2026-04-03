$(document).ready(function() {
  
    if (window.location.href.indexOf("contact") > -1) {
     const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const product = urlParams.get('product');
      let title = 'Information Request';
       if (window.location.href.indexOf("fr/") > -1) {
         title = "Demande d'information"
       }
      $("form #contact-template--16476823257338__main-subject").val( title + ' - ' + product.replace(/-/g, ' ').toUpperCase())
    }
});
