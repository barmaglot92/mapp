import { inject, observer } from 'mobx-react';
import { LoginPage } from 'modules/login';
import * as React from 'react';
import { IStore } from 'store';
import { MainPage } from './MainPage';

@inject('view')
@observer
export class View extends React.Component<{
  view?: IStore['view'];
}> {
  public render() {
    const { currentView } = this.props.view!;

    switch (currentView.name) {
      case 'main':
        return <MainPage />;
      case 'login':
        return <LoginPage />;
      default:
        return null;
    }
  }
}
