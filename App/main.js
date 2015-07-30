//WEBVIEW//
//*GOOGLE CAN CHANGE CLASSES AT ANY TIME, SO THAT CODE MAY BE OUTDATED!*//
var wv = document.querySelector("webview");

wv.addEventListener("loadcommit", function() {
  wv.insertCSS({
    code: "*::-webkit-scrollbar { display:none  !important; }",
    runAt: "document_start"
  });
});
wv.addEventListener("loadcommit", function() {
  wv.insertCSS({
    code: "#lQGP9e { display:none  !important; }",
    runAt: "document_start"
  });
});
wv.addEventListener("loadcommit", function() {
  wv.insertCSS({
    code: "#gbwa { display:none  !important; }",
    runAt: "document_start"
  });
});
wv.addEventListener("loadcommit", function() {
  wv.insertCSS({
    code: ".gb_ga { display:none  !important; }",
    runAt: "document_start"
  });
});
wv.addEventListener("loadcommit", function() {
  wv.insertCSS({
    code: ".gb_C { display:none  !important; }",
    runAt: "document_start"
  });
});
wv.addEventListener("loadcommit", function() {
  wv.insertCSS({
    code: ".gb_y { display:none  !important; }",
    runAt: "document_start"
  });
});
wv.addEventListener("loadcommit", function() {
  wv.insertCSS({
    code: ".gb_ec { display:none  !important; }",
    runAt: "document_start"
  });
});
wv.addEventListener("loadcommit", function() {
  wv.insertCSS({
    code: ".gb_gc { display:none  !important; }",
    runAt: "document_start"
  });
});

//OPEN LINKS IN BROWSER WINDOW//
wv.addEventListener("newwindow", function (e) {
  e.preventDefault();
  chrome.browser.openTab({
    url: e.targetUrl
  }, function () { });
});
