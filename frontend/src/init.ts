import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  expandViewport,
  $debug,
  init as initSDK,
} from '@telegram-apps/sdk-react';

import {
  disableVerticalSwipes,
} from '@telegram-apps/sdk';

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
  // Set @telegram-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK();

  // Add Eruda if needed (for debugging in development).
  // 

  import('eruda')
    .then((lib) => lib.default.init())
    .catch(console.error);

  // Check if all required components are supported.
  if (!backButton.isSupported() || !miniApp.isSupported()) {
    throw new Error('ERR_NOT_SUPPORTED');
  }

  // Mount all components used in the project.
  backButton.mount();
  miniApp.mount();
  themeParams.mount();
  initData.restore();
  disableVerticalSwipes.ifAvailable()

  // Mount and configure the viewport
  void viewport
    .mount()
    .catch((e) => {
      console.error('Something went wrong mounting the viewport', e);
    })
    .then(() => {
      // Bind the CSS variables for the viewport
      viewport.bindCssVars();
      viewport.safeAreaInsets();
      viewport.contentSafeAreaInsets();
    });

  // Bind the theme parameters to CSS variables (colors, etc.).
  miniApp.bindCssVars();
  themeParams.bindCssVars();

  // Expand the viewport to full screen
  expandViewport()

}
