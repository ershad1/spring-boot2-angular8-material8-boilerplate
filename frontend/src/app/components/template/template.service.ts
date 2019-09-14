import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private $userInfo: BehaviorSubject<User> = new BehaviorSubject(null);
  private $templateValues: BehaviorSubject<string[]> = new BehaviorSubject(['home', 'Home']);

  constructor() {
  }

  public get templateValues(): BehaviorSubject<string[]> {
    return this.$templateValues;
  }

  public get userInfo(): BehaviorSubject<User> {
    return this.$userInfo;
  }

  setTitle(values: string[]) {
    this.$templateValues.next(values);
  }

  setUser(user: User) {
    this.$userInfo.next(user);
  }

}
