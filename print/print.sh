#!/bin/bash

rm -Rf *.png
casperjs print-casper.js
convert slide* -quality 100 prez.pdf
rm -Rf *.png