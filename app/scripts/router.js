EmberProducts.Router.map(function () {
  
  this.resource('brands', function(){
    this.resource('brand', { path: '/:brand_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('products', function(){
    this.resource('product', { path: '/:product_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('selections', function(){
    this.resource('selection', { path: '/:selection_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
