EmberProducts.ProductController = Ember.ObjectController.extend({
  editMode: false,

	actions: {
		delete: function(){
			this.toggleProperty('deleteMode');
		},
		cancelDelete: function(){
			this.set('deleteMode', false);
		},
		confirmDelete: function(){
			// delete a user
			this.get('model').deleteRecord();
			this.get('model').save();
			// then transition to the UsersRoute
			this.transitionToRoute('products');
			// set deleteMode back to false
			this.set('deleteMode', false);
		}
},
});

