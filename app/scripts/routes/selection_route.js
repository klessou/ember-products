EmberProducts.SelectionRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('selection', params.selection_id);
  }
});

