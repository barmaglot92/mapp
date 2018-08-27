import { configure } from 'mobx'
import { observer, Provider } from 'mobx-react'
import { startRouter } from 'modules/app/router'
import * as React from 'react'
import { store } from './store'

import 'normalize.css'

startRouter(store.view)
configure({ enforceActions: 'observed' })

@observer
class App extends React.Component {
  public render() {
    return (
      <Provider {...store}>
        <div>test</div>
      </Provider>
    )
  }
}

export default App
