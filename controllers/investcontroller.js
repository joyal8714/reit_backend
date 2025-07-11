const Property = require('../models/Property');

exports.invest = async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) return res.status(404).json({ msg: "Property not found" });

  const amount = req.body.amount;
  if (amount > property.availableUnits) {
    return res.status(400).json({ msg: 'Not enough units available' });
  }

  property.investors.push({ user: req.user.id, amountInvested: amount });
  property.availableUnits -= amount;

  await property.save();
  res.json({ msg: 'Investment successful' });
};
