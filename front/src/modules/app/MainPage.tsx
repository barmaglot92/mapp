import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from './components/Link';

@observer
export class MainPage extends React.Component {
  public render() {
    return <Link to="/login">login</Link>;
  }
}
