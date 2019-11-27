import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AccountComponent } from './user/account/account.component';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';
import { DetailsComponent } from './user/details/details.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PostComponent } from './user/post/post.component';
import { MypostComponent } from './user/mypost/mypost.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UpdateComponent } from './user/update/update.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PlatformComponent } from './platform/platform.component';
import { GalleryComponent } from './user/gallery/gallery.component';
import { MapvComponent } from './content/mapv/mapv.component';
import { StoryComponent } from './content/story/story.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'platform', component: PlatformComponent },
  {path: 'Login', component: LoginComponent,canActivate: [BeforeLoginService] },
  {path: 'Signin', component: SigninComponent,canActivate: [BeforeLoginService] },
  {path: 'User', component: AccountComponent,canActivate: [AfterLoginService], 

  children: [
    
         {path: 'Profile', component: ProfileComponent, outlet: 'side',canActivate: [AfterLoginService]},
         {path: 'Details', component: DetailsComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'Post', component: PostComponent, outlet: 'side',canActivate: [AfterLoginService] },
         {path: 'Mypost', component: MypostComponent, outlet: 'side' ,canActivate: [AfterLoginService]},
         {path: 'Update/:id', component: UpdateComponent, outlet: 'side' ,canActivate: [AfterLoginService]},
         {path: 'gallery', component: GalleryComponent, outlet: 'side' ,canActivate: [AfterLoginService]}
     ],
        },

// {path: 'Content/:id', component: ContentComponent,

// children: [
    
//           {path: 'map_view/:id', component: MapvComponent, outlet: 'storymenu'},
//           {path: 'story/:id', component: StoryComponent, outlet: 'storymenu'},

//         ],

//     },

 

  {path: 'Admin', component: DashboardComponent}, 
  {path: 'Admin/signin', component: AdminLoginComponent},
  // {path: 'home', component: DashboardComponent },
  {path: 'Category/:id', component: CategoryComponent}, 
  {path: 'Content/:id', component: ContentComponent}, 
  {path: 'addcat', component:  AddcategoryComponent },
  {path: 'About', component:  AboutComponent },
  {path: 'Contact', component:  ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
