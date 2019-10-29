"use strict";

//begin jQuery document.ready
$(document).ready(function () {
  
  //-----------------------------------------------//
  //       Add DU Libraries Custom Breadcrumbs     //
  //----------------------------------------------//

  function addBreadcrumbs() {
    var duBreadcrumbsHtml = "\n        <!-- DU Libraries Breadcrumbs-->\n        <ol class=\"summonBreadcrumbs text-left\" aria-label=\"Breadcrumbs\">\n            <li><a href=\"https://my.davenport.edu/\">My Davenport</a></li>\n            <li><a href=\"https://my.davenport.edu/library\">Library</a></li>\n        </ol>\n      ";
    var siteHeaderDiv = document.querySelector(".siteHeader");
    siteHeaderDiv.insertAdjacentHTML("afterbegin", duBreadcrumbsHtml);
  } //end function
  addBreadcrumbs(); 
  
  
  //-----------------------------------------------//
  //        Add ILL Option when No Results        //
  //----------------------------------------------//

  function showIll() {
    var illAlert = "\n    <!-- ILL Message -->\n    <hr>\n    <p class=\"alert alert-danger\">Try <a href=\"https://davenport.libguides.com/ill?from=SummonNoResults\">Interlibrary Loan (ILL)</a></p>\n      ";
    var noResultsDiv = document.querySelector(".noResults");
    if (noResultsDiv) {
      noResultsDiv.insertAdjacentHTML("beforeend", illAlert);
    }
  } //end function
  setTimeout(showIll, 500); 

  
  //-----------------------------------------------//
  //             Create CSS File link              //
  //----------------------------------------------//

  var cssPath = "https://cdn.davenport.edu/libguides2/summon/css/";
  $("head").append('<link rel="stylesheet" type="text/css" href="' + cssPath + 'Summon2.css" />');

  
}); //end jQuery document.ready
