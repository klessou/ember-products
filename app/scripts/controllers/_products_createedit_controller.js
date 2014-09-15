EmberProducts.ProductsCreateEditController = Ember.ObjectController.extend({
  needs: 'product',

  defaultCategory: 'Clothing',
  categories: ['Accessories', 'Clothing', 'People', 'Others'],
  brands: ['A.P.C.', 'Acne Studios', 'DKNY', 'Filson', 'Lanvin'],

});

