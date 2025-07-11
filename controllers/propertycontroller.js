const Property = require('../models/Property');

exports.addProperty = async (req, res) => {
  const { name, location, value, rentalincome, availableUnits } = req.body;

  const property = await Property.create({
    name,
    location,
    value,
    rentalIncome: rentalincome, 
    availableUnits,
  });

  res.json({ msg: "Property added", property });
};

exports.getAllProperties = async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
};

// Get property by ID with investor details
exports.getProperty = async (req, res) => {
  const property = await Property.findById(req.params.id).populate('investors.user', 'username email');
  
  if (!property) return res.status(404).json({ msg: 'Not found' });

  res.json(property);
};
