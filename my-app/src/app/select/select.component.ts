import { Component, OnInit } from '@angular/core';
import {RecipeDataService} from '../recipe-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  recipeNames: Observable<string[]>;

  constructor(
    private recipeDataService: RecipeDataService
  ) { }

  ngOnInit(): void {
    this.recipeNames = this.recipeDataService.getRecipeNames();
  }

}
