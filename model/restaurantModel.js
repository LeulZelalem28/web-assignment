const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { 
        type: String, 
        required: true 
    },
  address: { 
        type: String, 
        required: true 
    },
  contact: { 
    type: String 
    },
  openingHours: { 
    type: String
    },
  category: { 
    type: String 
    },
//   picture: { type: Buffer },
});

module.exports = mongoose.model("Restaurant", restaurantSchema)