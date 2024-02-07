import { Product } from "../dataTupes/buyer";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:"root"
})
export class CartListService{
    items :any[]=[];
    
    
    addTocart(product:Product){
        this.items.push(product);
    }
    getItems(){
        return this.items;

    }

    claerCart(){
        this.items = [];
        return this.items;

    }
}





