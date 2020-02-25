import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../api.service";

@Component({
  selector: "app-dashboar",
  templateUrl: "./dashboar.component.html",
  styleUrls: ["./dashboar.component.css"]
})
export class DashboarComponent implements OnInit {
  // policies: any[];
  // selectedPolicy: any = { id: null, number: null, amount: null };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // this.apiService.readW().subscribe((policies: any[]) => {
    //   this.policies = policies;
    //   console.log(this.policies);
    // });
  }

  // createOrUpdatePolicy(form) {
  //   if (this.selectedPolicy && this.selectedPolicy.id) {
  //     form.value.id = this.selectedPolicy.id;
  //     this.apiService.updatePolicy(form.value).subscribe((policy: any) => {
  //       console.log("Policy updated", policy);
  //     });
  //   } else {
  //     this.apiService.createPolicy(form.value).subscribe((policy: any) => {
  //       console.log("Policy created, ", policy);
  //     });
  //   }
  // }

  // selectPolicy(policy: any) {
  //   this.selectedPolicy = policy;
  // }

  // deletePolicy(id) {
  //   this.apiService.deletePolicy(id).subscribe((policy: any) => {
  //     console.log("Policy deleted, ", policy);
  //   });
  // }

  getWeather(f) {
    console.log("in dashboard " + f.latitude);
  }
}
