import { r as registerInstance, h, g as getAssetPath } from './core-cd1fe455.js';

const StencilAsset = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.image = "photo.jpeg";
    }
    render() {
        return h("img", { src: getAssetPath(`./assets/${this.image}`) });
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return ""; }
};

export { StencilAsset as stencil_asset };
