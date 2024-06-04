import { Component, ElementRef, Injectable, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from 'src/app/Models/recipe';
// import {FormsModule} from '@angular/forms';
// import { FormControl, FormGroup ,ReactiveFormsModule} from '@angular/forms';
// import { Validators}  from '@angular/forms';
import { RecipeService } from 'src/app/Services/recipeService.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {

  //@ViewChild('heartOutline', { static: true }) heartOutline: ElementRef;
  recipes$:Observable<Recipe[]>;
  private sub = new Subscription();
  r:Recipe;
  isLiked: boolean;
  recipeFormGroup:FormGroup;
  constructor(private recipeService:RecipeService,private fb: FormBuilder,private activatedRoute:ActivatedRoute) {}

  ngOnInit():void{
    this.recipeFormGroup=this.fb.group({
      recipeName:this.fb.control(''),
      level:this.fb.control(''),
      ingredients: this.fb.array([]),
      instructions: this.fb.array([])
    });
  }

  get ingredients() {
    return this.recipeFormGroup.get('ingredients') as FormArray;
  }

  get instructions() {
    return this.recipeFormGroup.get('instructions') as FormArray;
  }

  addNewIngredient() {
    this.ingredients.push(this.fb.group({
      ingredient: new FormControl('')
    }));
  }

  addNewInstruction() {
    this.instructions.push(this.fb.group({
      instruction: new FormControl('')
    }));
  }
  changeFavorite(v:boolean):void{
    this.isLiked=v;
  }

  add(){
      this.r = {
        name: this.recipeFormGroup.get('recipeName').value,
        level: this.recipeFormGroup.get('level').value,
        favorite:this.isLiked,
        ingredients: this.recipeFormGroup.get('ingredients').value.map((ing: { ingredient: string }) => ing.ingredient),
        instructions: this.recipeFormGroup.get('instructions').value.map((ins: { instruction: string }) => ins.instruction),
        // img:this.recipeFormGroup.get('image').value
      };
      this.recipeService.AddRecipe(this.r);
    }

    // onFileSelected(event: any) {
    //   const file: File = event.target.files[0];
      
    //   // You can perform additional checks here like file type, size, etc.
      
    //   // Assuming you have a function to handle file upload and get the image URL
    //   this.uploadImage(file).subscribe((imageUrl: string) => {
    //     this.recipeFormGroup.get('image').setValue(imageUrl);
    //   });
    // }
    
    // uploadImage(file: File): Observable<string> {
    //   const formData = new FormData();
    //   formData.append('image', file);
    
    //   // Make a POST request to your server to upload the image
    //   return this.recipes$.post<{ imageUrl: string }>('/api/upload', formData)
    //     .pipe(
    //       map(response => response.imageUrl)
    //     );
    // }
  
  }


