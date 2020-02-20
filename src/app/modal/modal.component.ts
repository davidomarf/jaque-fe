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
  @Output() handleUpdateUserChild: EventEmitter<any> = new EventEmitter();

  userInfo: User;

  updatedUser: User;

  cancel() {
    this.handleModalChild.emit(false);
  }

  constructor() {}

  saveUser() {
    this.handleUpdateUserChild.emit({
      info: this.updatedUser,
      index: this.modalInfo.user
    });
    this.cancel();
  }

  uploadPhoto() {}

  removePhoto() {}

  updateField(event: any) {
    this.updatedUser[event.target.id] = event.target.value;
  }

  ngOnInit(): void {
    if (this.modalInfo.operation === "modify") {
      this.userInfo = { ...this.users[this.modalInfo.user] };
    } else {
      this.userInfo = {
        picture: null,
        name: null,
        fathersLastName: null,
        mothersLastName: null,
        email: null,
        roleId: null,
        role: null,
        active: false
      };
    }

    this.updatedUser = { ...this.userInfo };
  }
}
