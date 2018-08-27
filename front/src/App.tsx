import { configure } from 'mobx';
import { observer, Provider } from 'mobx-react';
import * as React from 'react';
import stores from './store';

import 'normalize.css';

configure({ enforceActions: 'observed' });

@observer
class App extends React.Component {
  public render() {
    return (
      <Provider {...stores}>
        <div>test</div>
      </Provider>
    );
  }
}

export default App;
