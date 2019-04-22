import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'callbackwidget',
  bundles: [
    {components: ['callback-widget', 'widget-modal', 'widget-button', 'widget-dropdown']}
  ],
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: 'src/global/variables.css'
};
