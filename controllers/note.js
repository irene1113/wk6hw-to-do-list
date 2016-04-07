var Note = require('../models/note');
var multiparty	=	require('multiparty');
var fs = require('fs');

var note = new Note();
var t_note,t_date,t_ball;

module.exports = function(req, res, next) {
	//res.send('Thank you!');
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
      console.log(files.userPhoto[0].path);
      t_note = fields.note;
      t_date = fields.date;
  //    t_type = fields.n_type;
      t_ball = fields.ball;
      console.log(t_note);
      note.note = t_note;
      note.date = t_date;
  //    note.n_type = t_type;
      note.ball = t_ball;
      note.imgContentData = fs.readFileSync(files.userPhoto[0].path, "base64");
      note.imgContentType = 'image/png';
  		note.save(function(err){
  			if (err) throw err;
  			console.log('note saved!');
  		});

      res.redirect('/');
    });
};
