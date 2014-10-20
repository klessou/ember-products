EmberProducts.SelectionEditController = Ember.ObjectController.extend({
  needs: 'selection',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.selection.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('selection',this.get('model'));
    }
  }
});

