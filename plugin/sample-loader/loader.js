(function(){
    var codeElements = document.querySelectorAll('[data-load]');
    Array.prototype.forEach.call(codeElements, function (codeElement) {
        var fileName = codeElement.getAttribute('id');
        var promise = $.ajax({
            url: '/samples/' + fileName,
            dataType: 'text'
        });
        promise.done(function (content) {
            console.log(fileName + " loaded")
            codeElement.innerHTML = content;
        });
    });
})();