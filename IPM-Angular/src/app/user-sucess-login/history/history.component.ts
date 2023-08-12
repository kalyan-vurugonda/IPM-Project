import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class History {



  public appid!: number
  public policyPrice!: string
  public policyCatagory!: string
  public policyName!: string;
  public policyapplydate!: string
  public status!: string;
  public customername!: string
  public customerenmail!: string


}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.customeremai = localStorage.getItem('cemail');
    this.cemail = this.customeremai;
    this.getHistory();
  }

  x!: any;
  customeremai: any;
  cemail!: string;
  public y: History[] = [];
  h = new History();

  //Get data for Particuler User!
  getHistory() {
    this.HttpClient.get<History[]>('http://localhost:8085/historyofapplications/' + this.cemail + '').subscribe(
      response => {

        console.log("done-----------------------------------------------");
        this.y = response;
        console.log(this.y)



        // this.history=response;
        // console.log(this.history);

      }, error => {
        console.warn("not done--------------------------------")
      }
    )
  }

  //GetData For All User------------


  getStatusColorClass(status: string): string {
    switch (status) {
      case 'Rejected':
        return 'text-danger'; // Use CSS class for red color
      case 'Approved':
        return 'text-success'; // Use CSS class for green color
      case 'Pending':
        return 'text-warning'; // Use CSS class for orange color
      default:
        return ''; // Default to no specific class
    }
  }

  getAllHistory() {
    this.HttpClient.get<History[]>('http://localhost:8085/getallaplicationofpolicy').subscribe(
      response => {

        console.log("done-----------------------------------------------");
        this.y = response;
        console.log(this.y)



        // this.history=response;
        // console.log(this.history);

      }, error => {
        console.warn("not done--------------------------------")
      }
    )
  }

}
