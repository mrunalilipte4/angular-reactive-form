import { Component, VERSION } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  WeightForm = new FormGroup({
    Weight: new FormControl('')
  });
  collectData(){
    //console.warn(this.WeightForm.value);
    console.log(this.WeightForm)
  }
}
