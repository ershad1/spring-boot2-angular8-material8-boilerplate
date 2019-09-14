import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {DepartmentService} from '../service/department.service';
import {EmployeeService} from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  entityList: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'departmentName',  'actions'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  searchKey: string;

  constructor(private employeeService: EmployeeService,
              private departmentService: DepartmentService,
              private router: Router,) {
  }

  ngOnInit() {
    this.employeeService.getEntities().subscribe(response => {

  /*    let array = response._embedded.employees.map(item => {
        let departmentName = this.departmentService.getDepartmentName(item['id']);
        return {
          departmentName: departmentName,
          ...item
        };
      });
*/
      this.entityList = new MatTableDataSource<any>(response._embedded.employees);

      this.entityList.sort = this.sort;
      this.entityList.paginator = this.paginator;
      this.entityList.filterPredicate = (data, filter) => {
        return this.displayedColumns.some(ele => {
          return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
        })
      }
    });
  }

  onSearchClear() {
    this.searchKey = '';
  }

  applyFilter() {
    this.entityList.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.router.navigate(['/employees/employee-save']);
  }
}
