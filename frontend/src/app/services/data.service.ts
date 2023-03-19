import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../employee';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient: HttpClient) { }

  getData () {
    return this.httpClient.get('http://localhost:80/api/employees');
  }

  insertData(employee: Employee) {
    return this.httpClient.post("http://localhost:80/api/employees/createEmployee", employee);
  }

  deleteData(id: any) {
    return this.httpClient.delete('http://localhost:80/api/employees/deleteEmployee/'+id);
  }

  getDataById(id: any) {
    return this.httpClient.get('http://localhost:80/api/employees/'+id);
  }

  updateData(id: any, employee: Employee) {
    return this.httpClient.put("http://localhost:80/api/employees/updateEmployee/"+id, employee);
  }
}
