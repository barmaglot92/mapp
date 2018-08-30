import { observer } from 'mobx-react';
import * as React from 'react';
import { MainMenu } from '../common/MainMenu/MainMenu';

@observer
export class UserPage extends React.Component {
  public render() {
    return <MainMenu />;
  }
}
