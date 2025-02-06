import ReactDOM from 'react-dom/client';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

import { Root } from '@/components/Root.tsx';
import { EnvUnsupported } from '@/components/EnvUnsupported.tsx';
import { init } from '@/init.ts';

import './index.css';

// Mock the environment in case, we are outside Telegram.
import './mockEnv.ts';
import { Provider } from 'react-redux';
import { store } from './store.ts';

const root = ReactDOM.createRoot(document.getElementById('thisbody')!);

try {
  // Configure all application dependencies.
  init(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV);

  root.render(
      <Provider store={store}>
        <Root/>
      </Provider>
  );
} catch (e) {
  root.render(<EnvUnsupported/>);
}
