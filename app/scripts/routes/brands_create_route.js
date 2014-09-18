EmberProducts.BrandsCreateRoute = Ember.Route.extend({
  model: function(){
    // // the model for this route is a new empty Ember.Object
    // return Em.Object.create({});
    return this.store.createRecord('brand');
  },
  
  // in this case (the create route) we can re-use the user/edit template
  // associated with the productsCreateController
  renderTemplate: function(){
    this.render('brand.edit', {
      controller: 'brandsCreate'
    });
  }
});
