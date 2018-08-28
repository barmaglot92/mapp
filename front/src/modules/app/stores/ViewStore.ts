import { action, observable } from 'mobx';
export class ViewStore {
  public router: any;

  @observable
  public currentView: {
    name: string;
    params?: { [key: string]: any };
  } = { name: 'main' };

  @observable
  public currentPath = '/';

  @action.bound
  public showMain() {
    this.currentView = {
      name: 'main',
    };
  }

  @action.bound
  public showLogin() {
    this.currentView = {
      name: 'login',
    };
  }

  public setPath(path: string) {
    this.router.dispatch('on', path);
    window.history.pushState(null, undefined, path);
  }
}
