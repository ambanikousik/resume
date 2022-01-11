import { getAssetPath, h } from "@stencil/core";
export class StencilAsset {
    constructor() {
        this.image = "photo.jpeg";
    }
    render() {
        return h("img", { src: getAssetPath(`./assets/${this.image}`) });
    }
    static get is() { return "stencil-asset"; }
    static get originalStyleUrls() { return {
        "$": ["stencil-asset.css"]
    }; }
    static get styleUrls() { return {
        "$": ["stencil-asset.css"]
    }; }
    static get assetsDirs() { return ["assets"]; }
    static get properties() { return {
        "image": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "image",
            "reflect": false,
            "defaultValue": "\"photo.jpeg\""
        }
    }; }
}
