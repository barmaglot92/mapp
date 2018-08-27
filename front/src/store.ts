import { AppStore, ViewStore } from 'modules/app';
import { LoginStore } from 'modules/login';

export default {
  app: new AppStore(),
  login: new LoginStore(),
  view: new ViewStore(),
};
