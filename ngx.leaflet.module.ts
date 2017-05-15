import { NgModule } from "@angular/core";
import { CandTLeafletComponent, CandTLeafletService } from "./index";

@NgModule({
    declarations: [...CandTLeafletComponent],
    providers: [...CandTLeafletService],
    exports: [...CandTLeafletComponent]
})

export class ngxLeafletModule { }