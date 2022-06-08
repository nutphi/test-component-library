import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-my-button',
  template: `
    <button (click)="onClick.emit()" [class.primary]="primary">
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
    :host {
      display: block;
      button.primary { background-color: #f00; color: #fff; }
    }
    `,
  ]
})
export class ButtonComponent implements OnInit {
  @Input() primary: boolean = false;
  @Output() onClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
