import { Component, Input, OnInit } from "@angular/core";
type User = {
  picture: string;
  name: string;
  fathersLastName: string;
  mothersLastName: string;
  email: string;
  roleId: number;
  role: string;
  active: boolean;
};
@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.scss"]
})
export class UserTableComponent implements OnInit {
  @Input("users") users: User[];
  
  constructor() {}

  toogleStatus(index: number){
    this.users[index]["active"] = !this.users[index]["active"];
  }

  deleteUser(index: number){
    this.users.splice(index, 1);
  }

  ngOnInit(): void {}
}
