import { a as patchEsm, b as bootstrapLazy } from './core-cd1fe455.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["mf-logotype", [[1, "mf-logotype"]]], ["stencil-asset", [[0, "stencil-asset", { "image": [1] }]]], ["mf-resume_2", [[1, "mf-resume", { "showDownloadLink": [4, "show-download-link"] }], [1, "svg-icon", { "name": [1], "small": [4] }]]]], options);
    });
};
export { defineCustomElements };
