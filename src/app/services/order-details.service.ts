import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // food Details
foodDetails = [

{
  id:1,
  foodName:"Bergger",
  foodDetails:"bergger and jam",
  foodPrice:200,
  foodImg:"https://5.imimg.com/data5/IG/FC/GLADMIN-51382316/veg-berger-500x500.png"
},

{
  id:2,
  foodName:"Pizza",
  foodDetails:"cheese with cream",
  foodPrice:400,
  foodImg:"https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg"
},

{
  id:3,
  foodName:"Ice Cream",
  foodDetails:"cone ice with cream",
  foodPrice:300,
  foodImg:"https://www.milkmaid.in/sites/default/files/2022-03/Strawberry-IceCream-590x436.jpg"
},

{
  id:4,
  foodName:"chiken",
  foodDetails:"chiken leg piece",
  foodPrice:500,
  foodImg:"https://hips.hearstapps.com/hmg-prod/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg"
}]

}
