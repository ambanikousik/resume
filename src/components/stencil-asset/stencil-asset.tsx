import { Component, Prop, getAssetPath, h } from '@stencil/core';

@Component({
    tag: 'stencil-asset',
    styleUrl: 'stencil-asset.css',
    assetsDirs: ['assets']
})
export class StencilAsset {

    @Prop() image = "photo.jpeg";

    render() {
        return <img src={getAssetPath(`./assets/${this.image}`)} />
    }
}