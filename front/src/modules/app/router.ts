// @ts-ignore
import { Router } from 'director/build/director'
// import { autorun } from 'mobx'
import { IStore } from 'store'

export function startRouter(viewStore: IStore['view']) {
  // update state on url change
  new Router({
    '/': viewStore.showMain(),
    '/login': viewStore.showLogin(),
  })
    .configure({
      html5history: true,
      // notfound: () => store.showOverview(),
    })
    .init()

  // update url on state changes
  // autorun(() => {
  //   const path = store.currentPath
  //   if (path !== window.location.pathname) {
  //     window.history.pushState(null, undefined, path)
  //   }
  // })
}
