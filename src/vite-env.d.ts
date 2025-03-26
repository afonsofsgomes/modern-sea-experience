
/// <reference types="vite/client" />

interface Window {
  dataLayer: any[];
  fbq: any;
  _fbq: any;
  Tally: {
    loadEmbeds: () => void;
  };
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

// Bokun Widget related type
declare namespace bkn {
  function init(options: any): void;
  function load(options: any): void;
  function ui: {
    Widget: any;
  };
}

interface Window {
  bkn: typeof bkn;
}
