import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CakesService} from './cakes.service'
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CakesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
