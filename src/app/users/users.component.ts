import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

type Button = {
  icon: string;
  text: string;
  style: number;
};

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

type Roles = {
  id: string;
};

type Operation = {
  operation: string;
  open: boolean;
  user: number;
};

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  title: string;
  description: string;
  buttons: Button[];
  users: User[];
  roles: Roles;

  modalInfo: Operation;

  /**
   * Stores the information of the modal invocation to know what operation to do
   * 
   * If the Modal has just opened (event.open), it must indicate what operation it'll
   * do:
   *   - Creating a new user, (event.operation === "new")
   *   - Updating an existing user, and who's that user. (event.user)
   * @param {Operation} event 
   */
  handleModal(event: Operation) {
    this.modalInfo = event;
  }

  /**
   * Updates the content of a temporary user if the values change in the modal
   * 
   * To update/create it uses an index:
   *  - If the index is above 0, it'll update the values of the user with such index.
   *  - If the index is below 0, it doesn't exist, so it creates a new user array with
   *    the new user at the index 0.
   * 
   * @param event Contains the information of the user and the current index
   */
  handleUpdateUser(event: any): void {
    if (event.index >= 0) {
      this.users[event.index] = event.info;
    } else {
      this.users = [event.info, ...this.users];
    }
  }

  constructor(private httpClient: HttpClient) {
    this.title = "Usuarios";
    this.modalInfo = { operation: "", open: false, user: null };
    this.description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    this.buttons = [
      { icon: "assets/eye.svg", text: "Previsualizar", style: 0 },
      { icon: "assets/add.svg", text: "Agregar nuevo usuario", style: 1 }
    ];
  }

  ngOnInit(): void {
    this.httpClient.get("assets/json/roles.json").subscribe(data => {
      // Fetch the roles before obtaining the user info
      this.roles = (data as any).roles.map(e => e.position);
      this.httpClient.get("assets/json/users.json").subscribe(data => {
        // Use the existing roles to create a {role} key before assignig it
        this.users = (data as any).users.map(e => {
          return { ...e, role: this.roles[e.roleId - 1] };
        });
      });
    });
  }
}
