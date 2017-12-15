import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JokesComponent } from './jokes.component';
import { jokesRoutes } from './jokes.routes';
import { SharedModule } from '../shared/shared.module';


@NgModule ({
    declarations: [JokesComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(jokesRoutes)
    ],
    providers: [],
    bootstrap: []
})
export class JokesModule { }
