import {products} from '../data/products.js';

const html = products.map((value, index)=>
  `<div class="item  col-md-2">
          <div class="product-image">
            <img src="${value.image}" alt="">
          </div>
          <div>
            <h3>${value.name}</h3>
          </div>
          <div class="rating py-2">
            <img src="../images/ratings/rating-${(value.rating.star)*10}.png" alt="">
            <span>${value.rating.count}</span>
            <h2>$${((value.priceCents) / 100).toFixed(2)}</h2>
          </div>
          <div class="w-25 pt-3">
            <select class="form-select form-select-sm " aria-label="Small select example">
              <option selected >1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div class="button-container text-center pt-3">
            <button class="btn btn-success btn-sm px-5">Add to cart</button>
          </div>
        </div>`
).join(" ");
document.querySelector('.js-products').innerHTML = html;