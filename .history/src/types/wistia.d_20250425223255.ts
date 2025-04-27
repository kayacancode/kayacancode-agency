declare namespace JSX {
  interface IntrinsicElements {
    'wistia-player': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        'data-video-id': string;
        'data-options'?: string;
      },
      HTMLElement
    >;
  }
}

export {}; 