import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { GetdashboarddataService } from '../dashboard/getdashboarddata.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-record',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss'],
  providers: [GetdashboarddataService]
})
export class AddRecordComponent {

  username: any;
  email: any;
  pnumber: any;
  ecode: any;

  constructor(
    private getdashboarddataService: GetdashboarddataService
  ) { }

  ngOnInit() {

    console.log('username', this.username);
    // this.submitData();
  }

  submitData() {
    console.log('Submitting username:', this.username); // Debug log

    

    const payLoad = {
      "empcode": this.ecode,
      "name": this.username,
      "email": this.email,
      "phone": this.pnumber,
    }

    this.getdashboarddataService.postData(payLoad).subscribe({
      next: (res) => {

        console.log('Response', res);
        // alert('response submitted.. !');

      },
      error: (err) => {

        console.error("Error check",err);
      }
    })

  }

}
