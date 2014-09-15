EmberProducts.ProductEditView = Ember.View.extend({
});

EmberProducts.FotoPreview= Ember.View.extend({
    attributeBindings: ['src'],
    tagName: 'img',
});


EmberProducts.FotoUp= Ember.TextField.extend({
    type: 'file',

    change: function(evt) {
        var input = evt.target;
        if (input.files && input.files[0]) {
            var that = this;

            var reader = new FileReader();
            reader.onload = function(e) {
                var data = e.target.result;
                console.log(data);
                that.set('parentView.content', data);
            };
            reader.readAsDataURL(input.files[0]);
        }
    },
});