import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RandomComponent } from './random/random.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchComponent } from './search/search.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'select', component: SelectComponent},
  {path: 'select/:name', component: SelectComponent},
  {path: 'select/:type', component: SelectComponent},
  {path: 'select/:ingredient', component: SelectComponent},
  {path: 'select/:type/:ingredient', component: SelectComponent},
  {path: 'random', component: RandomComponent},
  {path: 'random/recipe', component: RandomComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'add-recipe', component: AddRecipeComponent},
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
