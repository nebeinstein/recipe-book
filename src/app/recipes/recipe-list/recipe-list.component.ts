import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Lemony', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', []),
    new Recipe('Caesar Salad', 'Stabtastic', 'http://i.imgur.com/zI8WSMM.jpg', [])
  ];
	@Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(passedRecipe: Recipe){
  	this.recipeSelected.emit(passedRecipe);
  }

}
