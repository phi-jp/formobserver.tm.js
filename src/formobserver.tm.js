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
                elm.initEvent("change", true, false);
                elm.dispatchEvent(e);
            }
            reveValue = elm.value;
        };
        
        prevValue = elm.value;
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
