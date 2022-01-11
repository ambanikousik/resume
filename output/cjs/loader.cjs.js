'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-f98ef8ec.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["mf-logotype.cjs",[[1,"mf-logotype"]]],["stencil-asset.cjs",[[0,"stencil-asset",{"image":[1]}]]],["mf-resume_2.cjs",[[1,"mf-resume",{"showDownloadLink":[4,"show-download-link"]}],[1,"svg-icon",{"name":[1],"small":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
