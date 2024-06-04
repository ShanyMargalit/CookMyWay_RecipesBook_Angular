import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesListComponent } from './Components/recipes-list/recipes-list.component';
import { AddRecipeComponent } from './Components/add-recipe/add-recipe.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { GoToRecipeComponent } from './Components/go-to-recipe/go-to-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeductiveRoutingComponent } from './Components/deductive-routing/deductive-routing.component';
import { RecipeService } from './Services/recipeService.service';
import { FooterComponent } from './Components/footer/footer.component';
import { HeartComponent } from './Components/heart/heart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    AddRecipeComponent,
    StatisticsComponent,
    GoToRecipeComponent,
    DeductiveRoutingComponent,
    FooterComponent,
    HeartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
