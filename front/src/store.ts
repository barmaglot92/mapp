import { AppStore, ViewStore } from 'modules/app'
import { LoginStore } from 'modules/login'

export interface IStore {
  app: AppStore
  login: LoginStore
  view: ViewStore
}

export const store: IStore = {
  app: new AppStore(),
  login: new LoginStore(),
  view: new ViewStore(),
}
