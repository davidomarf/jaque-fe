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

  handleModal(event: Operation) {
    this.modalInfo = event;
  }

  handleUpdateUser(event: any) {
    if (event.index > 0) {
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
      this.roles = (data as any).roles.map(e => e.position);
      this.httpClient.get("assets/json/users.json").subscribe(data => {
        this.users = (data as any).users.map(e => {
          return { ...e, role: this.roles[e.roleId - 1] };
        });
      });
    });
  }
}
