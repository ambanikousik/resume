import { r as registerInstance, h, g as getAssetPath } from './core-cd1fe455.js';
var StencilAsset = /** @class */ (function () {
    function StencilAsset(hostRef) {
        registerInstance(this, hostRef);
        this.image = "photo.jpeg";
    }
    StencilAsset.prototype.render = function () {
        return h("img", { src: getAssetPath("./assets/" + this.image) });
    };
    Object.defineProperty(StencilAsset, "assetsDirs", {
        get: function () { return ["assets"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StencilAsset, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return StencilAsset;
}());
export { StencilAsset as stencil_asset };
