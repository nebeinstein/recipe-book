import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const APP_ROUTES: Routes = [
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'recipes', component: RecipeListComponent },
	{ path: '', component: RecipeListComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);