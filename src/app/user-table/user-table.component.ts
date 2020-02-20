import { Component, Input, Output, EventEmitter } from "@angular/core";
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
export class UserTableComponent {
  @Input("users") users: User[];
  @Input("openModal") openModal: any;

  @Output() handleModalChild: EventEmitter<any> = new EventEmitter();

  /**
   * Update the values of a certain user when clicked the edit button.
   *
   * It sends the flag to update instead of creating a new user ({operation: "modify"})
   * @param index Index of the user to update
   */
  modifyUser(index: number) {
    this.handleModalChild.emit({
      open: true,
      operation: "modify",
      user: index
    });
  }

  /**
   * Toogle the activation status.
   *
   * @param index Index of the user to update
   */
  toogleStatus(index: number) {
    this.users[index]["active"] = !this.users[index]["active"];
  }

  /**
   * Delete an user from the users array.
   *
   * @param index Index of the user to delete
   */
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  constructor() {}
}
