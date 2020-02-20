import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

type Operation = {
  operation: string;
  open: boolean;
  user: number;
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

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  @Input("modalInfo") modalInfo: Operation;
  @Input("users") users: User[];
  @Output() handleModalChild: EventEmitter<any> = new EventEmitter();

  userInfo: User;

  cancel() {
    this.handleModalChild.emit(false);
  }

  constructor() {}

  saveUser() {}

  uploadPhoto() {}

  removePhoto() {}

  ngOnInit(): void {
    console.log(this.users);
    if (this.modalInfo.operation === "modify") {
      this.userInfo = { ...this.users[this.modalInfo.user] };
      console.log(this.userInfo);
    } else {
      this.userInfo = {
        picture:null,
        name:null,
        fathersLastName:null,
        mothersLastName:null,
        email:null,
        roleId: null,
        role: null,
        active: false
      };
    }
  }
}
