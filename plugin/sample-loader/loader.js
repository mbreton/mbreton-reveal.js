(function(){
    var codeElements = document.querySelectorAll('[data-load]');
    Array.prototype.forEach.call(codeElements, function (codeElement) {
        var promise = $.ajax({
            url: '/samples/' + codeElement.getAttribute('id'),
            dataType: 'text'
        });
        promise.done(function (content) {
            codeElements.innerHTML = content;
        });
    });
})();