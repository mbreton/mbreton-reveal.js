var casper = require('casper').create({
    logLevel: "info"
});
var baseUrl = 'http://localhost:8000/#/';
var A4 = { // A4 resolution for 200dpi
    width: 2339,
    height: 1654
}

function nextSlide(id) {
    casper.wait(1000, function () {
        this.capture('slide-' + ("0" + id).slice(-2) + '.png', undefined, {
            format: 'png',
            quality: 100
        });
        var hasNextSlide = this.evaluate(function revealNext() {
            if ($('.navigate-down').hasClass('enabled')) {
                Reveal.down();
            } else if ($('.navigate-right').hasClass('enabled')){
                Reveal.next();
            } else{
                return false;
            }
            while (Reveal.nextFragment()) {
            }
            return true;
        });
        if (hasNextSlide) {
            nextSlide(id + 1);
        }
    });
};

casper.start(baseUrl, function () {
    this.viewport(A4.width, A4.height);
    nextSlide(0);
});

casper.run();