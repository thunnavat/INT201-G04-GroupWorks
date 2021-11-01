import {product} from "./Product.js";

//1. query div of products as reference node
const divProductsEle = document.querySelector('#products');
console.log(divProductsEle);

for (let i = 0; i < product.length; i++) {

//create div
const divProductEle = document.createElement('div');
divProductEle.setAttribute('id', product[i].productId);
console.log(divProductEle);

const pProductImgEle = document.createElement('img');
pProductImgEle.src = product[i].productImg;
pProductImgEle.height = 278;
pProductImgEle.width = 275;
divProductEle.appendChild(pProductImgEle);

//create p 
const pProductIdEle = document.createElement('p');
pProductIdEle.textContent = 'Product Id: ' + product[i].productId;

//add <p> product id to div of product
divProductEle.appendChild(pProductIdEle);

const pProductNameEle = document.createElement('p');
pProductNameEle.textContent = 'Product Name: ' + product[i].productName;
divProductEle.appendChild(pProductNameEle);

const pProductDescEle = document.createElement('p');
pProductDescEle.textContent = 'Product Desc: ' + product[i].productDesc;
divProductEle.appendChild(pProductDescEle);

const pProductPriceEle = document.createElement('p');
pProductPriceEle.textContent = 'Price: ' + product[i].price + ' Baht';
divProductEle.appendChild(pProductPriceEle);

//add <div> of product1 to <div> of products
divProductsEle.appendChild(divProductEle);
}