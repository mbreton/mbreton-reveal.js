function js_show_onChanged() {
    console.log('js_show_onChanged');
    var isStoppingPropagation = false;
    var settings = {
        greetings: 'Javascript Console',
        completion: true,
        name: 'js_demo',
        width: "100%",
        prompt: 'js> ',
        keydown: function (event) {
            if (isStoppingPropagation) {
                event.stopImmediatePropagation();
            }
        },
        onBlur: function () {
            isStoppingPropagation = false;
        },
        onFocus: function () {
            isStoppingPropagation = true;
        }
    };


    function evaluator(command, term) {
        if (command !== '') {
            var result = window.eval(command);
            if (result != undefined) {
                term.echo(String(result));
            }
        }
    }

    $('#js-terminal').terminal(evaluator, settings);
}

function ut_editor_onReady() {
    var utEditor = ace.edit('unit-test.js');
    var iframe = document.getElementById('utRenderer');

    iframe.onload = function () {
        var utCode = utEditor.getSession().getValue();
        var script = iframe.contentWindow.document.getElementById('source');
        setTimeout(function () {
            try {
                script.innerHTML = utCode;
                iframe.contentWindow.QUnit.start();
            } catch (e) {
            }
        }, 0);
    };

    function injectSourceInUtIframe() {
        iframe.contentWindow.location.reload();
    }

    injectSourceInUtIframe();
    utEditor.on('change', injectSourceInUtIframe);
}