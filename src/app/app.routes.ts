import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    
    {
        path: '', 
        component: HomeComponent,
        children: [
            {path:'layout',component:LayoutComponent},
            {path:'login',component:LoginComponent},
            // {path:'',component:HomeComponent},
            { path: 'about', component: AboutComponent },
            { path: 'services', component: ServicesComponent },
            { path: '', redirectTo: '/layout', pathMatch: 'full' },
        ]
    }

];
