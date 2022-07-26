import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <h1>The Whitehouse</h1>
      <div class="disclosures">
        <app-ellipsis-disclosure icon="location_city" label="Location">
          1600 Pennsylvania Avenue NW, Washington, DC 20500
        </app-ellipsis-disclosure>
        <app-ellipsis-disclosure icon="call" label="Phone Number">
          (202) 456-1111
        </app-ellipsis-disclosure>
        <app-ellipsis-disclosure icon="add" label="Plus Code">
          VXX7+39 Washington, District of Columbia
        </app-ellipsis-disclosure>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        width: max-content;
        min-width: 20rem;
        max-width: 40rem;
        margin: 1.5rem auto;
      }
    `,
  ],
})
export class AppComponent {
  title = "EllipsisDisclosure Demonstration";
}
