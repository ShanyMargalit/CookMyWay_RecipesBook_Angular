import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from 'src/app/Models/recipe';
import { RecipeService } from 'src/app/Services/recipeService.service';
import {  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
 
  @ViewChild('heartOutline', { static: true }) heartOutline: ElementRef;
  recipes$:Observable<Recipe[]>;
  private sub = new Subscription();

  counter$:Observable<number>;
  private sub2 = new Subscription();
  isFavorite:string="false";
 

  constructor(private RecipeService:RecipeService,private renderer: Renderer2, private el: ElementRef,private activatedRoute:ActivatedRoute) {}
  
  
  ngOnInit(): void {
    this.recipes$= this.RecipeService.Recipes$;
    this.sub=this.RecipeService.Recipes$.subscribe();
    this.counter$=this.RecipeService.ViewsCounter$;
    this.sub2=this.RecipeService.ViewsCounter$.subscribe();

    this.activatedRoute.paramMap.subscribe((params) => {
      this.isFavorite= params.get('isFavorite'); 
      if (this.isFavorite==='true')
          this.recipes$= this.RecipeService.filterRecipes$;
      else
          this.recipes$= this.RecipeService.Recipes$;
      });
  }

  DeleteRecipe(recipeToDelete:Recipe){
    if (confirm('Are you sure you want to delete this recipe?'))
      this.RecipeService.DeleteRecipe(recipeToDelete);
    else
      console.log('Deletion canceled.');
  }
  
  SetRecipe(recipeToSet:Recipe){
      this.RecipeService.SetRecipe(recipeToSet);
  }
  
  addToCounter(){
    this.RecipeService.AddToCounter();
  }
  
  changeFavorite(recipe:Recipe):Recipe{
    var x=this.RecipeService.changeFavorite(recipe);
    this.ngOnInit();
    return x;
  }
  


 
}
