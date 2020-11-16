const mongoose = require('mongoose');

const AssignmentSchema = mongoose.Schema({
    name:{
        type: String,
		required: true,
    },
    Pingredient: {
        type: String,
		required: true,
    },
    type: {
        type: String,
		required: true,
    },
    Rbody: {
        type: Number,
        min: [1, 'Must be greater than 0'],
        required: true

    }, 

});

AssignmentSchema.static('all', function() {
    return this.find();
});

const Assignment = mongoose.model('assignment', AssignmentSchema);

module.exports = Assignment;