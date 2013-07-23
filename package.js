Package.describe({
	summary: "Bootstrap datepicker package for Meteor"
});

Package.on_use(function(api) {
	api.add_files('js/bootstrap-datepicker.js', 'client');
	api.add_files('css/datepicker.css', 'client');

	api.use('less', 'client');
});
