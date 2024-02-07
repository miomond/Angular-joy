import { Component, OnInit } from '@angular/core';
import { Product } from '../../dataTupes/buyer';
import { ActivatedRoute } from '@angular/router';
import { CartListService } from '../../services/cart-list.service';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartListService
  ) { }
  addToCart(product: Product) {
    this.cartService.addTocart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
  }
  Name = '';
  age = '';

P:Product[]=[
  new Product("5" ,'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?w=360&t=st=1705930137~exp=1705930737~hmac=a40ed07efbf9810f6994eef3c3a6a636575799c08f46ddee4251d4f28a29bed5' ,'katchup', ['tomato','souse'],['flavors'],'mohamed'),
  new Product("6" ,'https://img.freepik.com/free-photo/tech-device-with-nature-background_23-2150470431.jpg?w=740&t=st=1705930159~exp=1705930759~hmac=6e3292ef59358112c3e11d44dbc6c003995ffccdb7ae9165be910982373b5762', 'katchup', ['tomato','souse'],['flavors'],'mohamed'),
  new Product("2" , 'https://img.freepik.com/premium-psd/dark-copper-levitation-phone-mockup_23-2149104314.jpg?w=740', 'katchup', ['tomato','souse'],['flavors'],'mohamed'),
  new Product("6" , 'https://img.freepik.com/free-photo/tech-device-with-nature-background_23-2150470431.jpg?w=740&t=st=1705930159~exp=1705930759~hmac=6e3292ef59358112c3e11d44dbc6c003995ffccdb7ae9165be910982373b5762',  'katchup', ['tomato','souse'],['flavors'],'mohamed'),
  new Product("112", 'https://img.freepik.com/premium-psd/dark-copper-levitation-phone-mockup_23-2149104314.jpg?w=740' , 'katchup', ['tomato','souse'],['flavors'],'mohamed'),
  new Product("15" , 'https://img.freepik.com/premium-psd/dark-copper-levitation-phone-mockup_23-2149104314.jpg?w=740', 'katchup', ['tomato','souse'],['flavors'],'mohamed'),
  new Product("27", 'https://img.freepik.com/premium-psd/dark-copper-levitation-phone-mockup_23-2149104314.jpg?w=740','katchup', ['tomato','souse'],['flavors'],'mohamed'),
];

}
