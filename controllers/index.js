var Note = require('../models/note');

module.exports = function(req, res, next) {
	Note.find({}, function(err, notes) {
		if (err) throw err;

		res.render('index', {noteinfos: notes});
	});
};
