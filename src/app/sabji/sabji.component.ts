import { Component } from '@angular/core';

@Component({
  selector: 'app-sabji',
  templateUrl: './sabji.component.html',
  styleUrl: './sabji.component.css'
})
export class SabjiComponent {
products =[
{
   name:"Fulkofi",
   price:80,
   stock:20
},
{
  name:"Aloo",
  price:100,
  stock:10
},
{
  name:"Begun",
  price:120,
  stock:25
},
{
  name:"Bhindi",
  price:35,
  stock:250
}
];
}
