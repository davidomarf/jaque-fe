import { Component, Input, OnInit } from '@angular/core';

/**
 * This will render a header with title, description, and buttons
 */
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  
  @Input('title') title: string;
  @Input('description') description: string;
  @Input('buttons') buttons: [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
