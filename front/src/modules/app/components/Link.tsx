import { inject } from 'mobx-react';
import * as React from 'react';
import { IStore } from 'store';

@inject('view')
export class Link extends React.Component<{
  view?: IStore['view'];
  to: string;
  params?: {};
}> {
  public click(evt: React.MouseEvent<HTMLAnchorElement>) {
    evt.preventDefault();
    this.props.view!.setPath(this.props.to);
  }
  public render() {
    return (
      <a href="#" onClick={evt => this.click(evt)}>
        {this.props.children}
      </a>
    );
  }
}
