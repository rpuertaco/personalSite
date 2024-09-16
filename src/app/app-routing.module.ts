import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {EducationComponent} from "./components/education/education.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {path: "contact", component: ContactComponent},
  {path: "education", component: EducationComponent},
  {path: "portfolio", component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
