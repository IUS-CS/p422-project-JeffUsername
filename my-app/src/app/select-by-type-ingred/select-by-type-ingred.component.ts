import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';

import { RecipeDataService } from '../recipe-data.service';
@Component({
  selector: 'app-select-by-type-ingred',
  templateUrl: './select-by-type-ingred.component.html',
  styleUrls: ['./select-by-type-ingred.component.scss']
})
export class SelectByTypeIngredComponent implements OnInit {
  recipeByTINames: Observable<string[]>;
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
  
  type() {
    return this.recipeForm.get('type')
  }
  primeIngredient() {
    return this.recipeForm.get('primeIngredient')
  }
  ngOnInit(): void {
    let temp = this.type();
    let temp2 =this.primeIngredient()
    console.log(temp2.value)
    this.recipeByTINames =this.recipeDataService.getRecipeNamesbyTypeandIgred(temp.value,temp2.value);

    console.log("here");
    
  }
  onSubmit() {
       this.show = true
      
      this.ngOnInit();
  }

}
