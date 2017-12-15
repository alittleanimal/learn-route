import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JokesComponent } from './jokes.component';
import { jokesRoutes } from './jokes.routes';
import { SharedModule } from '../shared/shared.module';
import { JokesGuard } from './jokes-guard';


@NgModule ({
    declarations: [JokesComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(jokesRoutes)
    ],
    providers: [JokesGuard],
    bootstrap: []
})
export class JokesModule { }
