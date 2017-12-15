import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { appRoutes } from './app.routes';
import { PictureComponent } from './picture/picture.component';
import { PreloadAllModules } from '@angular/router';
import { MyPreloadingStrategy } from './common/my-preloading-strategy';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: MyPreloadingStrategy})
  ],
  providers: [
    MyPreloadingStrategy,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
