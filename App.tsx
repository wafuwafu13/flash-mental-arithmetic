import React from 'react';

import AppNavigator from './navigation/AppNavigator';

import { confirmDatabase } from './database/Confirm/confirmDatabase';

confirmDatabase();

const App = () => {
    return <AppNavigator />;
};

export default App;
