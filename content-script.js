var elements = document.getElementsByTagName('*');

var mapObj_ = {
    男:"女",
    他:"她",
    先生:"小姐",
    老婆:"老公",
    姐:"哥",
    妹:"弟",
    妻子:"丈夫",
    爸:"妈",
    姨:"叔",
    女儿:"儿子"};


var mapObj = {};
for(var key in mapObj_){
    mapObj[key] = mapObj_[key];
    mapObj[mapObj_[key]] = key;
}

function replace_text(){
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.nodeValue;
                var re = new RegExp(Object.keys(mapObj).join("|"), "gi"); 
                var replacedText = text.replace(re, function(matched){  
                    return '『' + mapObj[matched] + '』';
                    
                });
                // var replacedText = mapObj.reduce((f, s)  => `${f}`.replace(`{${i}}`, s), text)

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}



document.addEventListener('DOMContentLoaded', function()
    {
       replace_text();
    });

    // var observer = new MutationObserver(function(e) {
    //     replace_text();
    //   });
      
    // observer.observe(document.getElementById('*'), {
    // attributes: true,
    // characterData: true,
    // childList: true,
    // subtree: true
    // });
