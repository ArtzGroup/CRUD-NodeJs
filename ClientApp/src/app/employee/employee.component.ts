import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from 'src/models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  id1: string;
  nam: string;
  salary: number;
  employees= [];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.employees= this.employeeService.employees;

  }
  resetForm(form? : NgForm){
    if(form){
      form.reset();
        this.id1= "",
        this.nam= "",
        this.salary= null
    }
  }

  onSubmit(form: NgForm){
    if(this.id1 == ""){
      this.employeeService.postEmployee(form.value).subscribe((res) => {
      this.resetForm(form);
    })
    }
    else{
      this.employeeService.updateEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.onRefresh();
      });
    }
  }
onRefresh(){
  this.employeeService.refreshEmployees().subscribe((res)=>{
    this.employees = res as EmployeeModel[];
  })
}

onEdit(emp: EmployeeModel){
  this.employeeService.selectedEmployee = emp;
  this.id1 = emp._id;
  this.nam = emp.name;
  this.salary = emp.salary;
}

ondelete(id: string, form: NgForm){
  this.employeeService.deleteEmployee(id).subscribe((res)=>{
    this.resetForm(form);
    this.onRefresh();
  })
}

}
