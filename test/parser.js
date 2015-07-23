'use strict';

var chai = require('chai');
var expect = chai.expect;
var request = require('request');
var path = require('path');
var fs = require('fs');
var C = require('./setup/test-constants');

describe('per-bundle npm packages', function() {
    it('should get installed', function () {
        var dir = path.join(C.BUNDLE_DIR, 'node_modules/commander');
        expect(fs.existsSync(dir)).to.be.true();
    });
});

describe('per-bundle bower packages', function() {
    it('should get installed', function () {
        var dir = path.join(C.BUNDLE_DIR, 'bower_components/webcomponentsjs');
        expect(fs.existsSync(dir)).to.be.true();
    });

    it('should be accessible via /panel', function(done) {
        request(C.PANEL_COMPONENTS_URL + '/webcomponentsjs/webcomponents.js', function (error, response) {
            expect(error).to.be.null();
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should be accessible via /graphics', function(done) {
        request(C.GRAPHIC_URL + '/components/webcomponentsjs/webcomponents.js', function (error, response) {
            expect(error).to.be.null();
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
