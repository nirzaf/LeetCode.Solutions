import { Injectable } from '@angular/core';
import {ProductData} from "../home/home.component";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getProductData() : ProductData[]{
     return productData;
  }
}

let productData: ProductData[] = [
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone 12', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: false,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone 11', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone XR', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone XS', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone X', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone 8', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone 7', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone 6', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone 5', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone 4', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone 3', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone 2', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
  { productId: getRandomInt(1,1000), productName: 'Apple iPhone 1', SKU: randomString(10), created: randomDate() , retailPrice: getRandomInt(500,1000), salePrice: getRandomInt(500,1000), lowestPrice: getRandomInt(500,1000) ,status: true,},
];


//create a function to generate random string of length n
function randomString(n:number){
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < n; i++ ) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

//create a function to generate random number of length n
function getRandomInt(min:number, max:number) : number{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//create a function to generate random date
function randomDate(){
  let date = Math.floor(Math.random() * (31 - 1 + 1)) + 1;
  let month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  let year = Math.floor(Math.random() * (2022 - 2018 + 1)) + 2018;
  return date + '/' + month + '/' + year;
}
