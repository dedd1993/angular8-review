import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/layouts/not-found/not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
