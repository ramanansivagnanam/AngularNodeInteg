import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';

const appRoute = [
  {
    path:'',
    redirectTo:'posts',
    pathMatch: 'full'
  },
  {
    path:'posts', component: PostsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
