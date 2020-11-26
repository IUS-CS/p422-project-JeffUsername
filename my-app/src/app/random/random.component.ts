import { Component, OnInit } from '@angular/core';
import {RecipeDataService} from '../recipe-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  recipeNames: Observable<string[]>;
  
  constructor(
    private recipeDataService: RecipeDataService
  ) { }

  ngOnInit(): void {
    
    this.recipeNames =this.recipeDataService.getRecipeNames();
    
  }

}
