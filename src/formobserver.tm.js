/*
 * phi
 */

var tm = tm || {};

(function() {
    
    tm.FormObserver = {};
    
    tm.FormObserver.observe = function(elm, fps)
    {
        fps = fps || 100;
        
        var prevValue = elm.value;
        var timerID   = null;
        
        var observeForm = function() {
            if (elm.value != prevValue) {
                var e = document.createEvent("HTMLEvents");
                e.initEvent("change", true, false);
                elm.dispatchEvent(e);
            }
            prevValue = elm.value;
        };
        
        elm.addEventListener("focus", function() { timerID = setInterval(observeForm, fps); });
        elm.addEventListener("blur", function() { clearInterval(timerID); });
    };
    
    tm.FormObserver.observeAll = function(className)
    {
        className = className || "tm-form-observer";
        var targetList = document.getElementsByClassName(className);
        
        for (var i=0,len=targetList.length; i<len; ++i) {
            this.observe(targetList[i]);
        }
    };
    
})();
