import { Component, OnInit } from "@angular/core";

import { SectionHeaderComponent } from "../section-header/section-header.component";

type Button = {
  icon: string;
  text: string;
  style: number;
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

  constructor() {
    this.title = "Usuarios";
    this.description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    this.buttons = [
      { icon: "assets/eye.svg", text: "Previsualizar", style: 0 },
      { icon: "assets/add.svg", text: "Agregar nuevo usuario", style: 1 }
    ];
  }

  ngOnInit(): void {}
}
