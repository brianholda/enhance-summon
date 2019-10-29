"use strict";

//begin jQuery document.ready
$(document).ready(function () {
  
  //-----------------------------------------------//
  // Add DU Libraries Custom Breadcrumbs //
  //----------------------------------------------//

  function addBreadcrumbs() {
    var duBreadcrumbsHtml = "\n        <!-- DU Libraries Breadcrumbs-->\n        <ol class=\"summonBreadcrumbs text-left\" aria-label=\"Breadcrumbs\">\n            <li><a href=\"https://my.davenport.edu/\">My Davenport</a></li>\n            <li><a href=\"https://my.davenport.edu/library\">Library</a></li>\n        </ol>\n      ";
    var siteHeaderDiv = document.querySelector(".siteHeader");
    siteHeaderDiv.insertAdjacentHTML("afterbegin", duBreadcrumbsHtml);
  } //end function

  addBreadcrumbs(); 
  
  //-----------------------------------------------//
  // Add ILL Option when No Results //
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
  // Add bX Recommender Stats Via Google Analytics //
  //----------------------------------------------//

  function tidyContentType(text) {
    if (text) {
      res = text.split(" (");
      text = res[0];
    }

    return text;
  }

  $("div.inner").on("click", ".bxRecommenderLink a", 
  //only applies to clicks on bxRecommender titles
  function () {
    var libContentType = $(this).closest("div.summary").find("div.contentType span.ng-binding").text();
    _gaq.push(["_trackEvent", "bXRecommenderClick", "clickOnRecommendation", "contentType:" + tidyContentType(libContentType)]);
  }); 
  
  //-----------------------------------------------//
  //                 Misc.                         //
  //----------------------------------------------//

  // Link to CSS File

  var cssPath = "https://cdn.davenport.edu/libguides2/summon/css/";
  $("head").append('<link rel="stylesheet" type="text/css" href="' + cssPath + 'Summon2.css" />'); // Accessibility titles

  $("div.searchBox div.queryBox span.caret").parent().attr("title", "advanced search");
  $("div.search div.queryBox span.caret").parent().attr("title", "advanced search"); // LibAnswers 2 Chat

  $('<div style="margin-left:1.8em;margin-bottom:1em;"><a href="https://v2.libanswers.com/chati.php?iid=360&hash=6d82b012177e080fb04dca732c9567de&online=true"  onclick="openWin();" title="Davenport Universty LibChat" class="btn xbtn-inverse btn-primary" target="_blank">Chat With Us!</a></div>').insertBefore(".quickFilters");
}); //end jQuery document.ready