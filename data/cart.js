export const cart = [];

export function addToCart(productId) {
  let alreadyAdded;
     cart.forEach((item)=>{
      if(productId === item.productId){
        alreadyAdded = item;
      }
     });

     if (alreadyAdded) {
      alreadyAdded.quantity +=1
     }else{
      cart.push({
        productId: productId,
        quantity: 1
      });
     }
}

