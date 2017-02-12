import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
    	new Recipe('Schnitzel', 'Lemony', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', [
    			new Ingredient('French Fries', 2),
    			new Ingredient('Pork Meat', 1)],
    			'Cut the veal into steaks, about as thick as your finger. Dredge in flour. In a shallow dish, beat the eggs with 1 tablespoon oil, salt and pepper. Coat the veal with egg mixture, then with bread crumbs. Heat 1/4 cup oil in a heavy skillet over medium heat. Fry veal until golden brown, about 5 minutes on each side.'),
    	new Recipe('The Best Parmesan Chicken Bake', 'Chicken Parmesan', 'http://images.media-allrecipes.com/userphotos/560x315/1010419.jpg', [
          new Ingredient('Tablespoon Olive Oil', 2),
          new Ingredient('Cloves of garlic', 2),
          new Ingredient('teaspoon crushed red pepper flakes', 0.25),
          new Ingredient('skinless, boneless chicken breast halves', 6),
          new Ingredient('cups prepared marinara sauce', 2),
          new Ingredient('cup chopped fresh basil', 0.25),
          new Ingredient('8 oz package shredded mozzarella cheese', 1),
          new Ingredient('cup grated parmesan cheese', 0.5),
          new Ingredient('5 oz package garlic croutons', 1)],
          'Preheat oven to 350 degrees F (175 degrees C). Coat the bottom of a 9x13 inch casserole dish with olive oil, and sprinkle with garlic and hot red pepper flakes. Arrange the chicken breasts in bottom of the dish, and pour marinara sauce over chicken. Sprinkle basil over marinara sauce, and top with half the mozzarella cheese, followed by half the Parmesan cheese. Sprinkle on the croutons, then top with the remaining mozzarella cheese and remaining Parmesan cheese. Bake in preheated oven until cheese and croutons are golden brown and the chicken is no longer pink inside, about 35 minutes to an hour, depending on the shape and thickness of your chicken breasts. An instant-read thermometer inserted into the thickest part of a chicken breast should read at least 160 degrees F (70 degrees C).'),
    	new Recipe('Caesar Salad', 'Stabtastic', 'http://i.imgur.com/zI8WSMM.jpg', [
          new Ingredient('salad', 1),
          new Ingredient('knives', 13)],
          'Make a salad. Stab it.')
	  ];
	
	constructor() { }
	getRecipes(){
		return this.recipes;
	}
}
