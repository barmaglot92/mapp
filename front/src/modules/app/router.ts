// @ts-ignore
import { Router } from 'director/build/director';
import { IStore } from 'store';

export function startRouter(viewStore: IStore['view']) {
  // update state on url change
  viewStore.router = new Router({
    '/login': () => viewStore.showLogin(),
    '/user/:userId': (userId: string) => viewStore.showUser({ userId }),
  })
    .configure({
      html5history: true,
      // notfound: () => viewStore.showNotfound(),
    })
    .init();
}
