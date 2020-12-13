import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Recipe {
  name: string;
  primeIngredient: string;
  type: string;
  recipeBody: string;
};


@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  constructor(
    private http: HttpClient
    ) { }


  private url = '/v1/recipe';
  
  public getRandom(): Observable<string[]> { //random get
    let temp = this.url+'/random';
    
    return this.http.get<string[]>(temp);
  }
  public getRecipe(name: string): Observable<Recipe> { //gets name of individual recipe
    let temp = this.url+'/name';
    return this.http.get<Recipe>(`${temp}/${name}`);
  }
  
  public getRecipeNames(): Observable<string[]> { //gets names for full db dump
    //console.log(this.url);
    return this.http.get<string[]>(this.url);
  }

  public getRecipeNamesbyName(name: string): Observable<string[]> { //is a dumb work around solution for a recipe
    return this.http.get<string[]>(`${this.url}/names/${name}`);
  }

  public getRecipeNamesbyType(type: string): Observable<string[]> { //by type
    console.log(this.http.get<string[]>(this.url) + "this is what you want")
    return this.http.get<string[]>(`${this.url}/type/${type}`);
  }

  public getRecipeNamesbyIngredient(primeIngredient: string): Observable<string[]> { //by prime ingredient
    //console.log(this.url);
    //let temp = this.url+'/primeIngredient/'+primeIngredient;
    return this.http.get<string[]>(`${this.url}/primeIngredient/${primeIngredient}`);
  }

  public getRecipeNamesbyTypeandIgred(type: string, primeIngredient: string ): Observable<string[]> { //why am I doing this the name is right there to the left
    
    return this.http.get<string[]>(this.url+'/type/'+type+'/primeIngredient/'+primeIngredient);
  }

  public addRecipe(add: Recipe): Observable<any> {
    return this.http.post(`${this.url}`, add);
  }

}