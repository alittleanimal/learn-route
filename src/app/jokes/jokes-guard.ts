import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { JokesComponent } from './jokes.component';

@Injectable()
export class JokesGuard implements CanDeactivate<any> {
    canDeactivate(component: JokesComponent) {
        console.log(component);
        if (!component.saved) {
            return window.confirm('are you sure not save?');
        }
        return true;
    }
}
