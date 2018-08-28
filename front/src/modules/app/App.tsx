import { configure } from 'mobx';
import { observer, Provider } from 'mobx-react';
import { startRouter } from 'modules/app/router';
import * as React from 'react';
import { store } from 'store';

import 'normalize.css';
import { View } from './View';

startRouter(store.view);

configure({ enforceActions: 'observed' });

@observer
export class App extends React.Component {
  public render() {
    return (
      <Provider {...store}>
        <View />
      </Provider>
    );
  }
}
