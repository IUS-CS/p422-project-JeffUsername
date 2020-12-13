import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { by } from 'protractor';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RandomComponent } from './random/random.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchComponent } from './search/search.component';
import { SelectComponent } from './select/select.component';
import { SelectByTypeComponent } from './select-by-type/select-by-type.component';
import { SelectByIngredientComponent } from './select-by-ingredient/select-by-ingredient.component';
import { SelectByTypeIngredComponent } from './select-by-type-ingred/select-by-type-ingred.component';
import { SelectByNameComponent } from './select-by-name/select-by-name.component';


const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'select', component: SelectComponent},
  {path: 'select/:name', component: SelectComponent},
  {path: 'select-by-name', component: SelectByNameComponent},
  {path: 'select-by-name/:name', component: SelectByNameComponent},
  {path: 'select-by-type', component: SelectByTypeComponent},
  {path: 'select-by-type/:type', component: SelectByTypeComponent},
  {path: 'select-by-ingredient', component: SelectByIngredientComponent},
  {path: 'select-by-ingredient/:ingredient', component: SelectByIngredientComponent},
  {path: 'select-by-type-ingred', component: SelectByTypeIngredComponent},
  {path: 'select-by-type-ingred/:type/:ingredient', component: SelectByTypeIngredComponent},
  {path: 'random', component: RandomComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'recipe/:name', component: RecipeComponent},
  {path: 'add-recipe', component: AddRecipeComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
