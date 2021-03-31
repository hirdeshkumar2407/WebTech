const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//Explaining Enity Product
let ProductSchema = new Schema({
    	name: {type: String, required: true, max: 100},
        price: {type: Number, required: true}});
        
// Export the model
module.exports = mongoose.model('Product', ProductSchema);
//The Model has to start captial letter Product
//Export the model
