import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RandomComponent } from './random/random.component';
import { SelectComponent } from './select/select.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SelectByTypeComponent } from './select-by-type/select-by-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectByIngredientComponent } from './select-by-ingredient/select-by-ingredient.component';
import { SelectByTypeIngredComponent } from './select-by-type-ingred/select-by-type-ingred.component';
import { SelectByNameComponent } from './select-by-name/select-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RandomComponent,
    SelectComponent,
    RecipeComponent,
    PageNotFoundComponent,
    AddRecipeComponent,
    SelectByTypeComponent,
    SelectByIngredientComponent,
    SelectByTypeIngredComponent,
    SelectByNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
