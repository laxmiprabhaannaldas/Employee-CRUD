import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id!:number;
  employee:Employee=new Employee();
  constructor(private service:EmployeeService,private route:ActivatedRoute,private router:Router){
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    });
  }
  onSubmit(){
    this.service.updateEmployee(this.id,this.employee).subscribe(data=>{
      this.gotoEmployeeList();
    })
  }

  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
