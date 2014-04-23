(function () {
    Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,

        // Optional libraries used to extend on reveal.js
        dependencies: [
            { src: 'plugin/sample-loader/loader.js', async: false, condition: function () {
                return !!document.querySelector('[data-load]');
            } },
            { src: 'lib/js/classList.js', condition: function () {
                return !document.body.classList;
            } },
            { src: 'plugin/markdown/marked.js', condition: function () {
                return !!document.querySelector('[data-markdown]');
            } },
            { src: 'plugin/markdown/markdown.js', condition: function () {
                return !!document.querySelector('[data-markdown]');
            } },
            { src: 'plugin/highlight/highlight.js', async: true, callback: function () {
                hljs.initHighlightingOnLoad();
            } },
            { src: 'plugin/zoom-js/zoom.js', async: true, condition: function () {
                return !!document.body.classList;
            } },
            { src: 'plugin/notes/notes.js', async: true, condition: function () {
                return !!document.body.classList;
            } },
            { src: 'plugin/ace/ace.js', async: true, condition: function () {
                return !!document.querySelector('.editor');
            } }
        ]
    });


    function callIfExist(funcName, event) {
        var hasFunction = typeof window[funcName] == "function";
        if (hasFunction) window[funcName](event);
        return hasFunction;
    }

    Reveal.addEventListener('ready', function (event) {
        var id = event.currentSlide.getAttribute('id');

        function checkState(){
            if(document.readyState == 'complete') {
                clearInterval(checkCompleteLoading);
                callIfExist(id + "_onReady", event);
                callIfExist(id + "_onChanged", event);
            }
        }
        var checkCompleteLoading = setInterval(checkState,100);
    });
    Reveal.addEventListener('slidechanged', function (event) {
        var id = event.currentSlide.getAttribute('id');
        callIfExist(id + "_onChanged", event);
    });
})();
