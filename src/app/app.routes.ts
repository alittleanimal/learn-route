import { RouterModule, CanLoad } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'jokes',
        data: {preload: true},
        canActivate: [AuthGuard],
        loadChildren: './jokes/jokes.module#JokesModule'
    },
    {
        path: 'picture',
        data: {preload: false},
        canLoad: [AuthGuard],
        loadChildren: './picture/picture.module#PictureModule'
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
];
