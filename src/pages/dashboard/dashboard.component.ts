import { Component } from '@angular/core';
import { GetdashboarddataService } from './getdashboarddata.service';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  providers: [GetdashboarddataService],
  imports: [JsonPipe, NgFor]
  
})
export class DashboardComponent {


  tableData: any;

  constructor(
    private getDashboardData: GetdashboarddataService
  ){}
  
  ngOnInit(): void {

    this.getData();
  }

  getData(){
 
    this.getDashboardData.getApiData().subscribe({
      next: (data)=>{
        console.log("Aadesh YZ", data);
        this.tableData = data;

      },
      error:(error) =>{
        console.log(error);
      },
      complete:()=> {
        console.log('Data fetched.');
      }
    })
  }
  
}
