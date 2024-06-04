import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from 'src/app/Models/recipe';
import { RecipeService } from 'src/app/Services/recipeService.service';

@Component({
  selector: 'app-go-to-recipe',
  templateUrl: './go-to-recipe.component.html',
  styleUrls: ['./go-to-recipe.component.scss']
})
export class GoToRecipeComponent {
  recipes$:Observable<Recipe[]>;
  private sub = new Subscription();
  rec:String;
  r:Recipe;
  searchedRecipe: Recipe;


  constructor(private RecipeService:RecipeService,private activatedRoute:ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.rec = params.get('name'); //+ string to number
    });
    this.recipes$= this.RecipeService.Recipes$;
    this.sub=this.RecipeService.Recipes$.subscribe();
    this.recipes$.subscribe(recipes => {
      this.searchedRecipe = recipes.find(recipe => recipe.name === this.rec);
     
    });
  }
  
  changeFavorite(recipe:Recipe):Recipe{
    var x=this.RecipeService.changeFavorite(recipe);
    this.ngOnInit();
    return x;
  }
  
  }
  
  


