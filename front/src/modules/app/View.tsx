import { inject, observer } from 'mobx-react';
import { LoginPage } from 'modules/login';
import { UserPage } from 'modules/user';
import * as React from 'react';
import { IStore } from 'store';

@inject('view')
@observer
export class View extends React.Component<{
  view?: IStore['view'];
}> {
  public render() {
    const { currentView } = this.props.view!;

    switch (currentView.name) {
      case 'user':
        return <UserPage />;
      case 'login':
        return <LoginPage />;
      default:
        return null;
    }
  }
}
