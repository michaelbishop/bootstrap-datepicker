Package.describe({
	summary: "Bootstrap datepicker package for Meteor"
});

Package.on_use(function(api) {
	api.add_files('js/bootstrap-datetimepicker.js', 'client');
	api.add_files('css/datetimepicker.css', 'client');

	api.use('less', 'client');
});
