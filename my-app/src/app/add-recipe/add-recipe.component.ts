import { Component, OnInit } from '@angular/core';
import { Recipe,RecipeDataService  } from '../recipe-data.service';
import {Observable, pipe, zip} from 'rxjs';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  addRecipe: Observable<Recipe>;

  status = '';
  statusIsError = false;
  
  
  newRecipe = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    primeIngredient: new FormControl(''),
    recipeBody: new FormControl(''),
  });  


  constructor(private recipeDataService: RecipeDataService) {}
  

  ngOnInit(): void {
  
  }

  onSubmit(): void {

    let recipe ={
      name: this.newRecipe.controls.name.value,
      primeIngredient: this.newRecipe.controls.primeIngredient.value,
      type: this.newRecipe.controls.type.value,
      recipeBody: this.newRecipe.controls.recipeBody.value
    };
    console.log(JSON.stringify(recipe));
    this.recipeDataService.addRecipe(recipe)
    .subscribe(
      next => {
        this.status = 'Saved!';
        this.statusIsError = false;
      },
      err => {
        this.status = err;
        this.statusIsError = true;
      }
    );
  }

}


