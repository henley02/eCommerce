import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'center',
        component: HomePage,
        children: [
            {
                path: 'index',
                children: [
                    {
                        path: '',
                        loadChildren: '../index/index.module#IndexPageModule'
                    }
                ]
            },
            {
                path: 'classify',
                children: [
                    {
                        path: '',
                        loadChildren: '../classify/classify.module#ClassifyPageModule'
                    }
                ]
            },
            {
                path: 'cart',
                children: [
                    {
                        path: '',
                        loadChildren: '../cart/cart.module#CartPageModule'
                    }
                ]
            },
            {
                path: 'my',
                children: [
                    {
                        path: '',
                        loadChildren: '../my/my.module#MyPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/index',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/center/index',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomePageRoutingModule {
}
