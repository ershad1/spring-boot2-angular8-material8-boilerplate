import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../shared/service/api.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public static readonly DEPARTMENTS_URL = environment.apiUrl + '/api/departments';

  entityList: any = [];

  constructor(private apiService: ApiService) {
    this.entityList = this.apiService.get(DepartmentService.DEPARTMENTS_URL).subscribe(response => {
        this.entityList = response._embedded;
      }
    );
  }

  getDepartmentName(id) {
    if (id == '0') {
      return '';
    } else{
      return _.find(this.entityList, (obj) => {
        return obj.id == id
      })['name']
    }
  }

}
