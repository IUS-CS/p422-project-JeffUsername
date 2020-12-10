import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-select-by-name',
  templateUrl: './select-by-name.component.html',
  styleUrls: ['./select-by-name.component.scss']
})
export class SelectByNameComponent implements OnInit {
  recipeByNames: Observable<string[]>;
  show: boolean = false;
  recipeForm;
 
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
  
  name() {
    return this.recipeForm.get('name')
  }
  ngOnInit(): void {
    
    let temp2 =this.name()
    console.log(temp2.value)
    this.recipeByNames =this.recipeDataService.getRecipeNamesbyName(temp2.value);

   
    
  }
  onSubmit() {
       this.show = true
       //this.temp = this.type();
      this.ngOnInit();
  }

}
