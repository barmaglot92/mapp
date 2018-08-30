import { observer } from 'mobx-react';
import * as React from 'react';
import { Container, Grid, Header, Image, Label, Segment } from 'semantic-ui-react';
import ava from './11.png';

@observer
export class UserCard extends React.Component<{ className?: string }> {
  public render() {
    return (
      <Container fluid className={this.props.className}>
        <Grid>
          <Grid.Column width={4}>
            <Image src={ava} />
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment basic>
              <Header as="h1">
                Андрей Жвакин <Label color="grey">@barmaglot</Label>
              </Header>
              <p>разработчик</p>
              <Segment vertical>Подразделение</Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
