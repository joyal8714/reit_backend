const Property=require('../models/Property')

exports.addproperty=async(req,res)=>{

const{name,location,value,rentalincome,availableUnits}=req.body
const property=await Property.create({name,location,value,rentalincome,availableUnits})
res.json({msg:"property added",property})

}

exports.getallproperties=async(req,res)=>{

    const properties=await Property.findd()
    res.json(properties)
}

exports.getproperty=async(req,res)=>{
const property=await Property.findById(req.params.id).populate('investors.user', 'username email');
 if (!property) return res.status(404).json({ msg: 'Not found' });
  res.json(property);
}