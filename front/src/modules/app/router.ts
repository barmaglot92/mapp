// @ts-ignore
import { Router } from 'director/build/director';
import { IStore } from 'store';

export function startRouter(viewStore: IStore['view']) {
  // update state on url change
  viewStore.router = new Router({
    '/': () => viewStore.showMain(),
    '/login': () => viewStore.showLogin(),
  })
    .configure({
      html5history: true,
      // notfound: () => viewStore.showNotfound(),
    })
    .init();
}
