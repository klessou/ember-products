EmberProducts.ProductsCreateEditController = Ember.ObjectController.extend({
  needs: 'product',

  defaultCategory: 'Clothing',
  categories: ['Accessories', 'Clothing', 'People', 'Others'],

  brands: function() {
    var brandsPromise = this.get('store').find('brand');

    return brandsPromise;
  }.property(),

});

