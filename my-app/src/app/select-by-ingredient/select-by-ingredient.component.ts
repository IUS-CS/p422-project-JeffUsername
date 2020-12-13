import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import { RecipeDataService } from '../recipe-data.service';


@Component({
  selector: 'app-select-by-ingredient',
  templateUrl: './select-by-ingredient.component.html',
  styleUrls: ['./select-by-ingredient.component.scss']
})
export class SelectByIngredientComponent implements OnInit {

  recipeByIngredNames: Observable<string[]>;
  show: boolean = false;
  recipeForm;
  temp;
  constructor(
    private recipeDataService: RecipeDataService, 
    private formBuilder: FormBuilder,
    //private location: Location
  ) {this.recipeForm = this.formBuilder.group({
    name: [''],
    primeIngredient: [''],
    type: [''],
    recipeBody: ['']
  });}
  
  primeIngredient() {
    return this.recipeForm.get('primeIngredient')
  }
  ngOnInit(): void {
    let temp;
    let temp2 =this.primeIngredient()
    //console.log(temp2.value)
    this.recipeByIngredNames =this.recipeDataService.getRecipeNamesbyIngredient(temp2.value);

    console.log("here");
    
  }
  onSubmit() {
       this.show = true
      
      this.ngOnInit();
  }

}
