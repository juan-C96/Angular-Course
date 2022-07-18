import { NgModule } from "@angular/core";
import { CounterComponent } from './contador/counter.component';

@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ],
    imports: []
})

export class CounterModule{}