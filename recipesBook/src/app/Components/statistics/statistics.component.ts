import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RecipeService } from 'src/app/Services/recipeService.service';
import { OnInit } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  animations: [
    trigger('fadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class StatisticsComponent {
  
  constructor(private RecipeService:RecipeService) {}

  counter$:Observable<number>;
  Favorites$:Observable<Recipe[]>;
  private sub1 = new Subscription();
  private sub2 = new Subscription();
  counterGreaterThanZero: boolean = false;

  currentDate:Date;

  ngOnInit(): void {
    this.counter$=this.RecipeService.ViewsCounter$;
    this.sub2=this.RecipeService.ViewsCounter$.subscribe();

    this.Favorites$=this.RecipeService.filterRecipes$;
    this.sub1=this.RecipeService.filterRecipes$.subscribe();

    this.currentDate = new Date();
    this.counter$.subscribe(value => {
      this.counterGreaterThanZero = value > 0;
    });
    
    }
   
}
