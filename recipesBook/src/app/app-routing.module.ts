import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './Components/add-recipe/add-recipe.component';
import { GoToRecipeComponent } from './Components/go-to-recipe/go-to-recipe.component';
import { RecipesListComponent } from './Components/recipes-list/recipes-list.component';

const routes: Routes = 
[
  {
    path: 'AddRecipe',
    component: AddRecipeComponent,
  },
  {
    path: 'GoToRecipe',
    component: GoToRecipeComponent,
  },
  {
    path: 'RecipesList/:isFavorite',
    component:RecipesListComponent,
  }, 
  {
    path: '',
    component: RecipesListComponent,
  }
  ,{
    path: 'GoToRecipe/:name', component: GoToRecipeComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
