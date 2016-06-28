var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var DairySchema = new Schema({
	user_id:{type:ObjectId,ref:'User'},
	title:{type:String,default:''},
	content:{type:String,default:''},
	create_date:{type:Date,default:Date.now},
	last_update:{type:Date,default:Date.now}
});
	
module.exports = mongoose.model('Dairy',DairySchema);