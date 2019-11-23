import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JarwisService } from './service/jarwis.service';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoryComponent } from './category/category.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AccountComponent } from './user/account/account.component';
import { FormsModule } from '@angular/forms';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import { ProfileComponent } from './user/profile/profile.component';
import { DetailsComponent } from './user/details/details.component';
import { PostComponent } from './user/post/post.component';
import { MypostComponent } from './user/mypost/mypost.component';
import {MatSelectModule,MatInputModule, MatListModule, MatSnackBarModule,} from '@angular/material';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete'​;
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PopulationComponent } from './admin/population/population.component';
import { UsersComponent } from './admin/users/users.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { UpdateComponent } from './user/update/update.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component'​;
import {NgxPaginationModule} from 'ngx-pagination';
import { PlatformComponent } from './platform/platform.component';
import { GalleryComponent } from './user/gallery/gallery.component';
import { VideoComponent } from './user/video/video.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
// import { OwlModule } from 'ngx-owl-carousel';
// import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ContentComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    AccountComponent,
    ProfileComponent,
    DetailsComponent,
    PostComponent,
    MypostComponent,
    AddcategoryComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    PopulationComponent,
    UsersComponent,
    SettingsComponent,
    UpdateComponent,
    AdminLoginComponent,
    PlatformComponent,
    GalleryComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatSnackBarModule,
    NgxPaginationModule,
    // LazyLoadImageModule.forRoot({
    //   preset: scrollPreset 
    // }),
    ScrollingModule,
    MatAutocompleteModule​,
    MatFormFieldModule,
    // BrowserModule,
    // OwlModule
  
  ],
  providers: [JarwisService,TokenService,AuthService,BeforeLoginService,AfterLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
