import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-ellipsis-disclosure",
  template: `
    <div class="ellipsis-disclosure" [ngClass]="activeClass">
      <div class="ellipsis-disclosure__header">
        <button
          id="btn"
          mat-icon-button
          [matTooltip]="label"
          matTooltipPosition="before"
          [attr.aria-label]="label"
          [attr.aria-expanded]="expanded"
          (click)="onClick($event)"
        >
          <mat-icon>{{ icon }}</mat-icon>
        </button>
      </div>
      <div
        class="ellipsis-disclosure__body"
        [attr.aria-hidden]="!expanded"
        (pointerover)="onMouseover($event)"
        (pointerout)="onMouseout($event)"
      >
        <div #content class="ellipsis-disclosure__ellipsis-text">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./ellipsis-disclosure.component.css"],
})
export class EllipsisDisclosureComponent implements OnInit {
  @Input() label = "";
  @Input() icon = "";

  expanded = false;
  activeClass = "";

  constructor() {}

  _show() {
    this.expanded = true;
    this.activeClass = "expanded";
  }

  _hide() {
    this.expanded = false;
    this.activeClass = "";
  }

  onMouseover(event: Event) {
    this._show();
  }

  onMouseout(event: Event) {
    this._hide();
  }

  onClick(event: Event) {
    if (this.expanded) this._hide();
    else this._show();
  }

  ngOnInit(): void {}
}
