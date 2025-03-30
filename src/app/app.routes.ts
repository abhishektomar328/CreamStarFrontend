import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    // // { path: '',component:SidebarComponent},
    // { path: 'about',component:AboutComponent},
    // {path:'services',component:ServicesComponent}
    {
        path: '', // Empty path for the default route
        component: HomeComponent,  // Use HomeComponent as the parent layout
        children: [
            {path:'login',component:LoginComponent},
            {path:'layout',component:LayoutComponent},

            { path: 'about', component: AboutComponent },  // About route
            { path: 'services', component: ServicesComponent },  // Services route
            { path: '', redirectTo: '/layout', pathMatch: 'full' },  // Default route to About
        ]
    }

];
