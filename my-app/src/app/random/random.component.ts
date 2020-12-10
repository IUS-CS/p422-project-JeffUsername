import { Component, OnInit } from '@angular/core';
import {Recipe, RecipeDataService} from '../recipe-data.service';
import {Observable} from 'rxjs';
import { Console } from 'console';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  randRecipes: Observable<string[]>;
  
  constructor(
    private recipeDataService: RecipeDataService
  ) { }

  ngOnInit(): void {
    
    this.randRecipes =this.recipeDataService.getRandom();
    
    
  }

}
