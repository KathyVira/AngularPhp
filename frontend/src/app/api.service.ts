import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Policy } from "./policy";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8080";
  constructor(private httpClient: HttpClient) {}


  readDark():Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }



  createDark(policy: Policy): Observable<any> {
    return this.httpClient.post<any>(
      `${this.PHP_API_SERVER}/api/create.php`,
      policy
    );
  }
  updateDark(policy: any) {
    return this.httpClient.put<any>(
      `${this.PHP_API_SERVER}/api/update.php`,
      policy
    );
  }
  deleteDark(id: number) {
    return this.httpClient.delete<any>(
      `${this.PHP_API_SERVER}/api/delete.php/?id=${id}`
    );
  }
}
