EmberProducts.BrandRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('brand', params.brand_id);
  }
});

