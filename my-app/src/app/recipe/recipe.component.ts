import { Component, OnInit } from '@angular/core';
import {Recipe, RecipeDataService} from '../recipe-data.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})


export class RecipeComponent implements OnInit {
  selectedRecipeName: string;
  selectedRecipe: Observable<Recipe>;

  constructor(
    private recipeDataService: RecipeDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.selectedRecipe = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Recipe> => {
        return this.recipeDataService.getRecipe(params.get('name'));
      })
    );
  }
  public selectRecipe(name: string): void {
    this.selectedRecipe = this.recipeDataService.getRecipe(name);
    if (!this.selectedRecipe) {
      this.router.navigateByUrl('/notfound');
    }
  }
    public goBack(): void {
      this.location.back();
  }

}
