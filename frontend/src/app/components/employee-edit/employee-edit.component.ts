import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Employee } from '../../employee';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})

export class EmployeeEditComponent implements OnInit{
  id: any;
  data: any;
  employee = new Employee();
  constructor(private route: ActivatedRoute,
    private dataService: DataService) {}

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData(this.id);
  }

  getData(id: any) {
    this.dataService.getDataById(id).subscribe(res => {
      this.data = res;
      this.employee = this.data;
    })
  }

  updateData() {
    this.dataService.updateData(this.id, this.employee).subscribe(res => {
    });
  }

}
