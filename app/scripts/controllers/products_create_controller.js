EmberProducts.ProductsCreateController = Ember.ObjectController.extend({
  needs: 'product',

  edit: false,

  actions: {
    // in the template we used an {{action "save"}} wich will trigger these methods on click
    save: function(){
      // just before saving, we set the created and changed date
      var date = new Date();
      this.get('model').set('created', date);
      this.get('model').set('changed', date);
      // // create a new user and save it
      // var newProduct = this.store.createRecord('product', this.get('model'));
      // newProduct.save();
      this.get('model').save();

      // // redirects to the user itself
      this.transitionToRoute('product', this.get('model'));
      // this.transitionToRoute('products');
    },
    cancel: function() {
      this.transitionToRoute('products');
    }
  }
});
