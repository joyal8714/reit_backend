const mongoose=require('mongoose')

const propertySchema=new mongoose.Schema({
    name:'String',
    location:'String',
    value:'Number',
    rentalincome:'Number',
    investors:[{
        user:{type: mongoose.Schema.Types.ObjectId, ref: 'user'},
        amountInvested:Number
    }],
    availableUnits:'Number',

})

module.exports=mongoose.model('Property',propertySchema)