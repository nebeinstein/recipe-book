import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const APP_ROUTES: Routes = [
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'recipes', component: RecipesComponent },
	{ path: '', component: RecipesComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);