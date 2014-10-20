EmberProducts.SelectionsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('selection');
  }
});

