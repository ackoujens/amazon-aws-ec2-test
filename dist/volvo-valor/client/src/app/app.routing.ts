// Routing center
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

// Component imports (where you want to route to and from)
import { LoginComponent } from './login/login.component';

// All routes
export const AppRoutes: Routes = [
  { path: '', component: LoginComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
