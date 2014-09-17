!function(){window.EmberProducts=Ember.Application.create()}(),function(){EmberProducts.ProductsCreateEditController=Ember.ObjectController.extend({needs:"product",defaultCategory:"Clothing",categories:["Accessories","Clothing","People","Others"],brands:["A.P.C.","Acne Studios","DKNY","Filson","Lanvin"]})}(),function(){EmberProducts.ProductController=Ember.ObjectController.extend({editMode:!1,actions:{"delete":function(){this.toggleProperty("deleteMode")},cancelDelete:function(){this.set("deleteMode",!1)},confirmDelete:function(){this.get("model").deleteRecord(),this.get("model").save(),this.transitionToRoute("products"),this.set("deleteMode",!1)}}})}(),function(){EmberProducts.ProductEditController=EmberProducts.ProductsCreateEditController.extend({needs:"product",edit:!0,created:function(){return moment(this.get("model.created")).fromNow()}.property("model.created"),changed:function(){return moment(this.get("model.changed")).fromNow()}.property("model.changed"),defaultCategory:"Clothing",categories:["Accessories","Clothing","People","Others"],actions:{save:function(){self=this,this.transitionToRoute("product",this.get("model"))},cancel:function(){self=this,this.get("bufferBackup").forEach(function(a){self.get("controllers.product.model").set(a.key,a.value)}),this.transitionToRoute("product",this.get("model"))}}})}(),function(){EmberProducts.ProductsController=Ember.ObjectController.extend({})}(),function(){EmberProducts.ProductsCreateController=EmberProducts.ProductsCreateEditController.extend({needs:"product",edit:!1,actions:{save:function(){var a=new Date;this.get("model").set("created",a),this.get("model").set("changed",a),this.get("model").save(),this.transitionToRoute("product",this.get("model"))},cancel:function(){this.transitionToRoute("products")}}})}(),function(){EmberProducts.ApplicationAdapter=DS.FixtureAdapter}(),function(){EmberProducts.Product=DS.Model.extend({name:DS.attr("string"),category:DS.attr("string"),brand:DS.attr("string"),usage:DS.attr("string"),mainImage:DS.attr("string"),description:DS.attr("string"),features:DS.attr("string"),specialFeatures:DS.attr("string"),fabricInfo:DS.attr("string"),productCare:DS.attr("string"),alternateNames:DS.attr("string"),changed:DS.attr("date"),created:DS.attr("date")}),EmberProducts.Product.reopen({attributes:function(){var a=this;return Ember.keys(this.get("data")).map(function(b){return Em.Object.create({model:a,key:b,valueBinding:"model."+b})})}.property()}),EmberProducts.Product.FIXTURES=[{id:0,name:"Filson 256",category:"Accessories",brand:"Filson",usage:"Workwear; Everyday; Travel",mainImage:"http://www.filson.com/images/products/detail/70256-alt-6.jpg",description:"Our toughest, most dependable briefcase is appropriate for everyday use in the field.       Inside is a wide carrying compartment, two full-length open pockets and sewn-on compartments for calculator,       business cards, pencils and pens. Narrow pockets on both ends and full-length outer pockets on both sides.       You won't find more durability in a fabric briefcase. Meets carry-on requirements. Made in USA.",features:"Zipper with storm flap 2 stow pockets, 2 utility pockets,     2 interior stow pockets,     2 interior utility pockets Abrasion- and water-repellent fabric with leather reinforcements     Removable, adjustable Bridle Leather shoulder strap with pad Large inner compartment with dividers     Meets standard airline carry-on size requirements",specialFeatures:"1 interior brass clasp to secure keys; 1 bridle leather carrying/hanging loop.",fabricInfo:"Made from 22-oz. 100% cotton oil finish Rugged Twill with 100% Genuine Bridle Leather.",productCare:"Wipe or brush clean only.",alternateNames:"",changed:"2014-09-01T00:00:00Z",created:"2014-09-01T00:00:00Z"},{id:1,name:"Filson 257",category:"Accessories",brand:"Filson",usage:"Travel, Field, Casual, Business",mainImage:"http://www.filson.com/images/products/detail/70257-alt-9.jpg",description:"Protect your laptop in this large briefcase made with our nearly indestructible Rugged Twill.       Inside are four roomy full-length sections. One is the perfect size for a laptop computer.       More pockets hold a battery pack, diskettes, calculator, business cards, pens, pencils and notebooks.       Narrow pockets on both ends, full-length outer pockets on both sides and adjustable, removable leather       shoulder strap with brass-plated roller buckle and leather pad. Leather grip and storm flap with snap closures.       Double bottom. Meets carry-on requirements. Made in USA.",features:"Water Repellent.       Two-way brass zipper with leather pulls and storm flap with bridle leather snap tab closure.       2 full length interior open pockets; 1 non-padded compartment for laptop;       1 interior business card pocket; 1 interior calculator/cell phone pocket;       2 full width exterior open side pockets; 2 small exterior end utility pockets. Formerly style #257",specialFeatures:"1 interior brass clasp to secure keys; 1 bridle leather carrying/hanging loop.",fabricInfo:"Made from 22-oz. 100% cotton oil finish Rugged Twill with 100% Genuine Bridle Leather.",productCare:"Wipe or brush clean only.",changed:"2014-09-01T00:00:00Z",created:"2014-09-01T00:00:00Z"}]}(),function(){EmberProducts.ApplicationRoute=Ember.Route.extend({})}(),function(){EmberProducts.ProductEditRoute=Ember.Route.extend({model:function(){return this.get("store").find("product",this.modelFor("product").id)},setupController:function(a,b){a.set("model",b),buffer=b.get("attributes").map(function(a){return{key:a.get("key"),value:a.get("value")}}),a.set("buffer",buffer),bufferBackup=buffer,a.set("bufferBackup",bufferBackup)}})}(),function(){EmberProducts.ProductRoute=Ember.Route.extend({model:function(a){return this.get("store").find("product",a.product_id)}})}(),function(){EmberProducts.ProductsCreateRoute=Ember.Route.extend({model:function(){return this.store.createRecord("product")},renderTemplate:function(){this.render("product.edit",{controller:"productsCreate"})}})}(),function(){EmberProducts.ProductsRoute=Ember.Route.extend({model:function(){return this.get("store").find("product"),this.store.filter("product",function(a){return!a.get("isNew")})}})}(),function(){Ember.TypeAheadBloodComponent=Ember.Component.extend({didInsertElement:function(){this._super();var a=this;if(!this.get("data"))throw"No data property set";var b=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("value"),queryTokenizer:Bloodhound.tokenizers.whitespace,local:$.map(a.get("data"),function(a){return{value:a}})});b.initialize(),$(".brandList .typeahead").typeahead({hint:!0,highlight:!0,minLength:1},{name:"brands",displayKey:"value",source:b.ttAdapter()})}}),Ember.Handlebars.helper("type-ahead-blood",Ember.TypeAheadBloodComponent)}(),function(){Ember.TypeAheadBrandsComponent=Ember.Component.extend({didInsertElement:function(){this._super();var a=this;if(!this.get("data"))throw"No data property set";var b=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("value"),queryTokenizer:Bloodhound.tokenizers.whitespace,local:$.map(a.get("data"),function(a){return{value:a}})});b.initialize(),$(".brandList .typeahead").typeahead({hint:!0,highlight:!0,minLength:1},{name:"brands",displayKey:"value",source:b.ttAdapter()})}}),Ember.Handlebars.helper("type-ahead-brands",Ember.TypeAheadBrandsComponent)}(),function(){EmberProducts.ProductEditView=Ember.View.extend({}),EmberProducts.FotoPreview=Ember.View.extend({attributeBindings:["src"],tagName:"img"}),EmberProducts.FotoUp=Ember.TextField.extend({type:"file",change:function(a){var b=a.target;if(b.files&&b.files[0]){var c=this,d=new FileReader;d.onload=function(a){var b=a.target.result;console.log(b),c.set("parentView.content",b)},d.readAsDataURL(b.files[0])}}})}(),function(){EmberProducts.ProductView=Ember.View.extend({})}(),function(){EmberProducts.ProductsCreateView=Ember.View.extend({})}(),function(){EmberProducts.ProductsView=Ember.View.extend({})}(),function(){EmberProducts.Router.map(function(){this.resource("products",function(){this.resource("product",{path:"/:product_id"},function(){this.route("edit")}),this.route("create")})})}();