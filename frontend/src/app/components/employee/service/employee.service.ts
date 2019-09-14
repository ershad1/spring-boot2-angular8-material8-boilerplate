import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ngx-custom-validators';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../../../shared/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public static readonly EMPLOYEES_URL = environment.apiUrl + '/api/employees';

  constructor(private fb: FormBuilder,
              private apiService: ApiService) {
  }

  form: FormGroup = this.fb.group({
    id: [null],
    fullName: ['', Validators.required],
    email: ['', CustomValidators.email],
    mobile: ['', [Validators.required, Validators.minLength(8)]],
    city: [''],
    gender: ['male'],
    department: [0],
    hireDate: [''],
    isPermanent: [false]
  });

  initializedFromGroup() {
    this.form.setValue({
      id: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: 'male',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

  getEntities() {
    return this.apiService.get(EmployeeService.EMPLOYEES_URL);
  }

  insertEntity(employee) {
    console.log('employees');
    console.log(employee);
    this.apiService.post(EmployeeService.EMPLOYEES_URL, employee).subscribe();
  }

  updateEntity(employee) {
    this.apiService.put(EmployeeService.EMPLOYEES_URL, employee);
  }

  deleteEntity(employee) {
    this.apiService.delete(EmployeeService.EMPLOYEES_URL, employee);
  }
}
