EmberProducts.BrandsRoute = Ember.Route.extend({
  model: function() {
    this.get('store').find('brand');
    return this.store.filter('brand',function(myProduct){
      return !myProduct.get('isNew');
    });
  }
});
