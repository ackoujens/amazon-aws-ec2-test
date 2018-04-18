// General imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Component imports
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// Google Material imports
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatCardModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
