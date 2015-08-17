//WEBVIEW
//GOOGLE CAN CHANGE CLASS NAMES AT ANY TIME, SO CODE MAY NOT WORK! 
var wv = document.querySelector("webview");

function webView () {
  var a = "#lQGP9e { display:none  !important; }"; //NO HANGOUTS
  var b = "#gbwa { display:none  !important; }"; //NO GOOGLE APPS
//YOU CAN ADD YOUR OWN RULE: var x = "selector { style }";
  var scrollbar = "*::-webkit-scrollbar { display:none  !important; }"; //NO SCROLLBAR
  
  var rules = [a, b, scrollbar]; //ADD YOUR RULE NAME TO ARRAY
  for (var val of rules) {
    template(val);
  }
  
  function template(x) {
    wv.addEventListener("loadcommit", function() {
    wv.insertCSS({
      code: String(x),
      runAt: "document_start"
    });
    });
  }
}

webView();

//OPEN LINKS IN BROWSER WINDOW
wv.addEventListener("newwindow", function (e) {
  e.preventDefault();
  chrome.browser.openTab({
    url: e.targetUrl
  }, function () { });
});
