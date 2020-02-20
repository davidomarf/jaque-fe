import { Component, Input, Output, EventEmitter } from "@angular/core";

/**
 * This will render a header with title, description, and buttons
 */
@Component({
  selector: "app-section-header",
  templateUrl: "./section-header.component.html",
  styleUrls: ["./section-header.component.scss"]
})
export class SectionHeaderComponent {
  @Input("title") title: string;
  @Input("description") description: string;
  @Input("buttons") buttons: [];
  
  @Output() handleModalChild: EventEmitter<any> = new EventEmitter();

  /**
   * Emits an event to Modal handler to mount the component to create a new user
   *
   */
  newUserClick() {
    this.handleModalChild.emit({ operation: "new", open: true, user: null });
  }

  constructor() {}
}
