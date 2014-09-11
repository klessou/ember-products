EmberProducts.ProductsCreateEditController = Ember.ObjectController.extend({
  needs: 'product',

  defaultCategory: 'Clothing',
  categories: ['Accessories', 'Clothing', 'People', 'Others'],

});

