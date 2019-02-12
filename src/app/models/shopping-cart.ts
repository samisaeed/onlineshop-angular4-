import { ShoppingCartItem } from './shopping-cart-item';

 export class ShoppingCart {
    items: ShoppingCartItem[] = [];
     constructor( public itemMap: { [productId: string]: ShoppingCartItem }) {
         for( let productId in itemMap) {
         let item = itemMap[productId] ;
         this.items.push( new ShoppingCartItem(item.product, item.quantity));
         }
     }

 get totalItemsCount() {
  let  count = 0;
 for ( let producId in this.itemMap) {
        count += this.itemMap[producId].quantity;}
        return count;

     }
 }


