import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient';
export class ShoppingListService {
private items:Ingredient[]=[];
  constructor() {

  }
  getItems(){
  	return this.items;
  }

  addItems(nitems: Ingredient[]){
  	this.items.concat(nitems);
  }

  setItems(nitems){
  	this.items=nitems;
  }
}
