define([
    'database',
    'backbone'
], function (DB, Backbone) {
    var PostModel = Backbone.Model.extend({
        defaults: {
            c_id: 0,
			post_id: 0,
            title: '',
			text: '',
			thread_id: 0,
			forum_id: 0,
            poster: '',
			date: '',
			path: [],
			filename: []
        }
    });
    return PostModel;
});
