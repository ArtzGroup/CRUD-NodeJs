import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { EmployeeModel } from 'src/models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee : EmployeeModel;
  employees : EmployeeModel[];
  readonly baseUrl = 'http://localhost:3000/employees'

  constructor(private http: HttpClient) { }

  postEmployee(emp: EmployeeModel){
    return this.http.post(this.baseUrl, emp);
  }

  refreshEmployees(){
    return this.http.get(this.baseUrl);
  }

  updateEmployee(emp: EmployeeModel){
    return this.http.put(this.baseUrl+ `/${emp._id}`, emp)
  }

  deleteEmployee(_id){
    return this.http.delete(this.baseUrl+ `/${_id}`)
  }
}
