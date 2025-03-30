// app.component.ts
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CardComponent } from "./card/card.component";

@Component({
  selector: "recipe-root",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
