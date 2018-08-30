import { action, observable } from 'mobx';
export class ViewStore {
  public router: any;

  @observable
  public currentView: {
    name: string;
    params?: { [key: string]: any };
  } = { name: 'user' };

  @observable
  public currentPath = '/';

  @action.bound
  public showLogin() {
    this.currentView = {
      name: 'login',
    };
  }

  @action.bound
  public showUser(params: { userId: string }) {
    this.currentView = {
      name: 'user',
      params,
    };
  }

  public setPath(path: string) {
    this.router.dispatch('on', path);
    window.history.pushState(null, undefined, path);
  }
}
