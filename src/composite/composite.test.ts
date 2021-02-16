import { Product, ProductWithExtraOptions, Cart } from './composite';

describe('composite pattern', () => {
   it('should return the correct total for the cart', () => {
       const p1 = new Product('p1', 100);
       const p2 = new Product('p2', 300);
       const cp1 = new ProductWithExtraOptions(new Product('p3', 50));
       cp1.addExtraOption(new Product('o1', 15));
       cp1.addExtraOption(new Product('o2', 20));

       const cart = new Cart();
       cart.addProduct(p1);
       cart.addProduct(p2);
       cart.addProduct(cp1);

       expect(cart.calculateTotal()).toBe(485);
   });
});
