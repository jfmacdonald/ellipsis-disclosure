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
      <div class="ellipsis-disclosure__body" [attr.aria-hidden]="!expanded">
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

  onClick(event: Event) {
    this.expanded = !this.expanded;
    this.activeClass = this.expanded ? "expanded" : "";
  }

  ngOnInit(): void {}
}
