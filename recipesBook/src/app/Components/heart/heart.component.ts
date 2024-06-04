import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/Models/recipe';
import { RecipeService } from 'src/app/Services/recipeService.service';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss']
})

export class HeartComponent {
  
  @Output() changeLikeEvent = new EventEmitter<boolean>();
  isLiked: boolean;
  @Input() recipe1:Recipe;

  constructor(){}

  ngOnInit(){
    if(this.recipe1.favorite)
      this.isLiked=true;
    else
      this.isLiked=false;
  }

  toggleLike(e:Event) {
    this.isLiked = !this.isLiked;
    this.changeLikeEvent.emit(this.isLiked);
  }



}
