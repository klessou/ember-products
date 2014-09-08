EmberProducts.ProductsRoute = Ember.Route.extend({
  model: function() {
  	this.get('store').find('product');
    return this.store.filter('product',function(myProduct){
      return !myProduct.get('isNew');
  	});
  }
});
