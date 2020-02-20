import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
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
  @Input("openModal") openModal: any;

  @Output() handleModalChild: EventEmitter<any> = new EventEmitter();

  modifyUser(index) {
    this.handleModalChild.emit({
      open: true,
      operation: "modify",
      user: index,
    });
  }

  constructor() {}

  toogleStatus(index: number) {
    this.users[index]["active"] = !this.users[index]["active"];
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  ngOnInit(): void {}
}
