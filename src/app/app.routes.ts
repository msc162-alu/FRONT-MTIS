import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SensorFiltrosComponent } from './sensor-filtros/sensor-filtros.component';
import { AboutComponent } from './about/about.component';
import { ActasComponent } from './actas/actas.component';   
import { ReservaAulasComponent } from './reserva-aulas/reserva-aulas.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'filtro', component: SensorFiltrosComponent},
    {path: 'actas', component: ActasComponent},
    { path: 'reserva-aulas', component: ReservaAulasComponent },
    {path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
