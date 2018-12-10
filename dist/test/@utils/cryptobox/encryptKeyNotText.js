"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryptobox_1 = require("../../../src/utils/cryptobox");
var exceptions_1 = require("../../../src/exceptions");
function encryptKeyNotText() {
    expect(function () {
        cryptobox_1.Cryptobox.encrypt("lksjdflkjs", null);
    }).toThrow(exceptions_1.default.Exception);
}
exports.encryptKeyNotText = encryptKeyNotText;
