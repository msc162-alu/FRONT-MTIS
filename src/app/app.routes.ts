import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SensorFiltrosComponent } from './sensor-filtros/sensor-filtros.component';
import { AboutComponent } from './about/about.component';
import { ActasComponent } from './actas/actas.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'filtro', component: SensorFiltrosComponent},
    {path: 'actas', component: ActasComponent},
    {path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
