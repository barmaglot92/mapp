import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from '../app/components/Link';

@observer
export class LoginPage extends React.Component {
  public render() {
    return <Link to="/">main</Link>;
  }
}
