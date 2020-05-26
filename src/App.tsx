import React from 'react';

import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';

import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyles />
  </>
);

export default App;
