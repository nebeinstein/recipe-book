import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://startgerman.co.uk/wp-content/uploads/2015/09/Schnitzel220x140-220x140.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'https://hugelolcdn.com/comments/1856221.jpg', [])
  ];
	@Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(passedRecipe: Recipe){
  	this.recipeSelected.emit(passedRecipe);
  }

}
