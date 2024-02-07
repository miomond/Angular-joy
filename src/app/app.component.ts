import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './dataTupes/buyer';


@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memoshot';
  Product: any[]=[
    new Product("5" ,'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?w=360&t=st=1705930137~exp=1705930737~hmac=a40ed07efbf9810f6994eef3c3a6a636575799c08f46ddee4251d4f28a29bed5' ,'katchup', ['tomato','souse'],['flavors'],'mohamed'),
    new Product("6" ,'https://img.freepik.com/free-photo/tech-device-with-nature-background_23-2150470431.jpg?w=740&t=st=1705930159~exp=1705930759~hmac=6e3292ef59358112c3e11d44dbc6c003995ffccdb7ae9165be910982373b5762', 'katchup', ['tomato','souse'],['flavors'],'mohamed'),
    new Product("2" , 'https://img.freepik.com/premium-psd/dark-copper-levitation-phone-mockup_23-2149104314.jpg?w=740', 'katchup', ['tomato','souse'],['flavors'],'mohamed'),
    new Product("6" , 'https://img.freepik.com/free-photo/tech-device-with-nature-background_23-2150470431.jpg?w=740&t=st=1705930159~exp=1705930759~hmac=6e3292ef59358112c3e11d44dbc6c003995ffccdb7ae9165be910982373b5762',  'katchup', ['tomato','souse'],['flavors'],'mohamed'),
    new Product("112", 'https://img.freepik.com/premium-psd/dark-copper-levitation-phone-mockup_23-2149104314.jpg?w=740' , 'katchup', ['tomato','souse'],['flavors'],'mohamed'),
    new Product("15" , 'https://img.freepik.com/premium-psd/dark-copper-levitation-phone-mockup_23-2149104314.jpg?w=740', 'katchup', ['tomato','souse'],['flavors'],'mohamed'),
    new Product("27", 'https://img.freepik.com/premium-psd/dark-copper-levitation-phone-mockup_23-2149104314.jpg?w=740','katchup', ['tomato','souse'],['flavors'],'mohamed'),
  ];

}
