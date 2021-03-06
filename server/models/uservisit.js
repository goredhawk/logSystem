const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserVisitSchema = new Schema({
	user_id:{type:ObjectId,ref:'User'},
	visit_id:{type:ObjectId,ref:'User'}
},{versionKey:false});
	
module.exports = mongoose.model('UserVisit',UserVisitSchema);