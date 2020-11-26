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
    let temp = this.url+'/name';
    //return this.http.get<Recipe>(`${this.url}/${name}`);
    return this.http.get<Recipe>(`${temp}/${name}`);
  }
  

  public getRecipeNames(): Observable<string[]> {
    //console.log(this.url);
    return this.http.get<string[]>(this.url);
  }
  
  public getRecipeNamesbyType(type: string): Observable<string[]> {
    //let temp = this.url+'/type/';//this.http.get<Recipe>(`${temp}/${name}`);
    //console.log(temp);
    console.log(this.http.get<string[]>(this.url) + "this is what you want")
    return this.http.get<string[]>(`${this.url}/type/${type}`);
  }

  public getRecipeNamesbyIngredient(primeIngredient: string): Observable<string[]> {
    //console.log(this.url);
    //let temp = this.url+'/primeIngredient/'+primeIngredient;
    return this.http.get<string[]>(`${this.url}/primeIngredient/${primeIngredient}`);
  }

  public getRecipeNamesbyTypeandIgred(type: string, primeIngredient: string ): Observable<string[]> {
    //console.log(this.url);
    //let temp = this.url+'/type/'+type+'/primeIngredient/'+primeIngredient;
    return this.http.get<string[]>(this.url+'/type/'+type+'/primeIngredient/'+primeIngredient);
  }
}