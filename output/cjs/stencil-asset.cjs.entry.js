'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-f98ef8ec.js');

const StencilAsset = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.image = "photo.jpeg";
    }
    render() {
        return core.h("img", { src: core.getAssetPath(`./assets/${this.image}`) });
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return ""; }
};

exports.stencil_asset = StencilAsset;
