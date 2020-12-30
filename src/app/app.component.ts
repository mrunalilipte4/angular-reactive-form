import { Component, VERSION } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  WeightForm = new FormGroup({
    Weight: new FormControl(""),
    unit: new FormControl("")
  });
  collectData() {
    //console.warn(this.WeightForm.value);
    console.log(this.WeightForm.get("Weight").value);
    console.log(this.WeightForm.get("unit").value);
    console.log(this.WeightForm.get("Weight").value * 10 + "gm");
  }
}
