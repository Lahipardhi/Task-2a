
import{NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { OneComponent } from './one/one.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";





@NgModule({
    declarations :[
        AppComponent,
        OneComponent,
     
        
       
    ],

    imports :[
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
        
        
    
     
    ],
    providers:[],
    bootstrap :[AppComponent],
})
export class AppModule{}
