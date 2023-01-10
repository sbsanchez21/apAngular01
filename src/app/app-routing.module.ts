import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from '../app/components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';

const routes: Routes = [
  {path: 'experiencia', component:ExperienciaComponent},
  {path: 'educacion', component:EducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
