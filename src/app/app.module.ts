import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AssinaturaComponent } from './pages/assinatura/assinatura.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'assinatura',
    component: AssinaturaComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AssinaturaComponent,
    // REGISTRA NOVOS COMPONENTES
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
