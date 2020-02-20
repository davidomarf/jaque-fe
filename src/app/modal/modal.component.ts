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

  /** Emit an event to close the Modal
   * 
   */
  cancel() {
    this.handleModalChild.emit(false);
  }


  /**
   * Emit an event with the information to update the Users array
   * 
   * When whe user is a new user, index will be set to -1, and will be handled
   * in the user component.
   * When the user already exists, it'll send the index to update it.
   */
  saveUser() {
    this.handleUpdateUserChild.emit({
      info: this.updatedUser,
      index: this.modalInfo.user
    });

    // Close the Modal after emiting the event
    this.cancel();
  }

  /**
   * Updates the content for a key in the user object
   * 
   * @param event Contains the key and the new value
   */
  updateField(event: any) {
    this.updatedUser[event.target.id] = event.target.value;
  }


  /** Toggle the status of the user */
  toggleActive(){
    this.userInfo = {...this.userInfo, active: !this.userInfo.active}
  }

  uploadPhoto() {}

  removePhoto() {}

  constructor() {}

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
