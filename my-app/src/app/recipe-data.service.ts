import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Recipe {
  name: string;
  primeIngredient: string
  type: string;
  recipeBody: string
}

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  constructor(
    private http: HttpClient
    ) { }


  private url = '/v1/recipe';

  public getRecipe(name: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.url}/${name}`);
  }

  public getRecipeNames(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}