EmberProducts.ProductsCreateRoute = Ember.Route.extend({
  model: function(){
    // // the model for this route is a new empty Ember.Object
    // return Em.Object.create({});
    return this.store.createRecord('product');
  },
  
  // in this case (the create route) we can re-use the user/edit template
  // associated with the productsCreateController
  renderTemplate: function(){
    this.render('product.edit', {
      controller: 'productsCreate'
    });
  }
});
