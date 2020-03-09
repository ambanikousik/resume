/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface MfResume {
    'showDownloadLink': boolean;
  }
  interface SvgIcon {
    'name': string;
  }
}

declare global {


  interface HTMLMfResumeElement extends Components.MfResume, HTMLStencilElement {}
  var HTMLMfResumeElement: {
    prototype: HTMLMfResumeElement;
    new (): HTMLMfResumeElement;
  };

  interface HTMLSvgIconElement extends Components.SvgIcon, HTMLStencilElement {}
  var HTMLSvgIconElement: {
    prototype: HTMLSvgIconElement;
    new (): HTMLSvgIconElement;
  };
  interface HTMLElementTagNameMap {
    'mf-resume': HTMLMfResumeElement;
    'svg-icon': HTMLSvgIconElement;
  }
}

declare namespace LocalJSX {
  interface MfResume {
    'showDownloadLink'?: boolean;
  }
  interface SvgIcon {
    'name'?: string;
  }

  interface IntrinsicElements {
    'mf-resume': MfResume;
    'svg-icon': SvgIcon;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'mf-resume': LocalJSX.MfResume & JSXBase.HTMLAttributes<HTMLMfResumeElement>;
      'svg-icon': LocalJSX.SvgIcon & JSXBase.HTMLAttributes<HTMLSvgIconElement>;
    }
  }
}


