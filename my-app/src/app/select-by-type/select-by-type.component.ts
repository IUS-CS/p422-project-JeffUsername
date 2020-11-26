import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-select-by-type',
  templateUrl: './select-by-type.component.html',
  styleUrls: ['./select-by-type.component.scss']
})

export class SelectByTypeComponent implements OnInit {
  recipeByTypeNames: Observable<string[]>;
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
  ngOnInit(): void {
    let temp;
    let temp2 =this.type()
    console.log(temp2.value)
    this.recipeByTypeNames =this.recipeDataService.getRecipeNamesbyType(temp2.value);

    console.log("here");
    
  }
  onSubmit() {
       this.show = true
       //this.temp = this.type();
      this.ngOnInit();
  }
  
}
