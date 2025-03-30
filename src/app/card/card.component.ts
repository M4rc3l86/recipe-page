import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "recipe-card",
  imports: [],
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
