declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'data-video-id': string;
        'data-options'?: string;
      }
    }
  }
}

export {}; 