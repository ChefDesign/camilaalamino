"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname)&&navigator.serviceWorker.register("service-worker.js",{scope:"./"}).then(function(o){"function"==typeof o.update&&o.update()})["catch"](function(o){console.error("Error during service worker registration:",o)});