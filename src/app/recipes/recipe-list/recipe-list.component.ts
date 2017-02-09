import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Lemony', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', [], 'Cut the veal into steaks, about as thick as your finger. Dredge in flour. In a shallow dish, beat the eggs with 1 tablespoon oil, salt and pepper. Coat the veal with egg mixture, then with bread crumbs. Heat 1/4 cup oil in a heavy skillet over medium heat. Fry veal until golden brown, about 5 minutes on each side.'),
    new Recipe('The Best Parmesan Chicken Bake', 'Chicken Parmesan', 'http://images.media-allrecipes.com/userphotos/560x315/1010419.jpg', [], 'Preheat oven to 350 degrees F (175 degrees C). Coat the bottom of a 9x13 inch casserole dish with olive oil, and sprinkle with garlic and hot red pepper flakes. Arrange the chicken breasts in bottom of the dish, and pour marinara sauce over chicken. Sprinkle basil over marinara sauce, and top with half the mozzarella cheese, followed by half the Parmesan cheese. Sprinkle on the croutons, then top with the remaining mozzarella cheese and remaining Parmesan cheese. Bake in preheated oven until cheese and croutons are golden brown and the chicken is no longer pink inside, about 35 minutes to an hour, depending on the shape and thickness of your chicken breasts. An instant-read thermometer inserted into the thickest part of a chicken breast should read at least 160 degrees F (70 degrees C).'),
    new Recipe('Caesar Salad', 'Stabtastic', 'http://i.imgur.com/zI8WSMM.jpg', [], 'Make a salad. Stab it.')
  ];
	@Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(passedRecipe: Recipe){
  	this.recipeSelected.emit(passedRecipe);
  }

}
