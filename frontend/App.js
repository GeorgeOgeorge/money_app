import React from 'react';

import { AppProvider } from './app/app_context';
import Navigatior from './app/navigator/navigator';

const App = () => {
  return (
    <AppProvider>
      <Navigatior />
    </AppProvider>
  );
};

export default App;
