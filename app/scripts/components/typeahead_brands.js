Ember.TypeAheadBrandsComponent = Ember.Component.extend({
      
  didInsertElement: function() {
    this._super();
    var brands = []; // brands list. 

    var brandsPromise = this.get('data');

    // Populates brands list.
    brandsPromise.then(function(results) {
      results.forEach(function(brand, index) {
        brands.push(brand.get('name'));
      });
    });

    // Constructs autocomplete when brands list is entierely populated.
    brandsPromise.finally(function() {
      // constructs the suggestion engine
      var brandList = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        
        local: $.map(brands, function(brand) { return { value: brand }; })
      });

      // kicks off the loading/processing of `local` and `prefetch`
      brandList.initialize();
       
      $('.brandList .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'brands',
        displayKey: 'value',
        // `ttAdapter` wraps the suggestion engine in an adapter that
        // is compatible with the typeahead jQuery plugin
        source: brandList.ttAdapter()
      });
    });
  },

});

Ember.Handlebars.helper('type-ahead-brands', Ember.TypeAheadBrandsComponent);
