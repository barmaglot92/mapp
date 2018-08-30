import { observer } from 'mobx-react';
import { MainMenu } from 'modules/common/MainMenu/MainMenu';
import * as React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { UserCard } from './UserCard';

const PageContent = styled.div`
  margin-top: 5em;
`;

@observer
export class UserPage extends React.Component {
  public render() {
    return (
      <Container style={{ padding: '2em' }} fluid>
        <MainMenu />
        <PageContent>
          <UserCard />
        </PageContent>
      </Container>
    );
  }
}
