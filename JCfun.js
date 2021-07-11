(function() {
    'use strict';
    var loop = function(func) {
        var loop_time = 10;
        func.interval = setInterval(function() {
            if (func.time) {
                if (func.time >= loop_time) {
                    clearInterval(func.interval);
                    return 0;
                }
                func.time += 1;
            } else {
                func.time = 1;
            }
            if (func()) {
                clearInterval(func.interval);
                return 0;
            }
        }, 500);
    };

    var main = function() {
        Array.prototype.forEach.call(document.getElementsByTagName("*"), function(el) {
            ["user-select", "-webkit-user-select", "-moz-user-select", "-ms-user-select"].forEach(xcanwin => {
                var filterstyle = document.defaultView.getComputedStyle(el, null)[xcanwin];
                if (filterstyle && filterstyle == 'none') {
                    el.style = xcanwin + ": text !important";
                }
            });

            ["onselect", "onselectstart", "oncopy", "onbeforecopy", "oncontextmenu"].forEach(xcanwin => {
                el[xcanwin] = function(e) {
                    e.stopImmediatePropagation();
                }
            });
        });
    };
    loop(main);
})();