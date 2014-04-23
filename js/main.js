// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
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