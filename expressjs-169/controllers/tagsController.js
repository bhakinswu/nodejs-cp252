const tags = [];
var counter = 0;

const getTags = (req, res) => {
  tags.push(counter);
  counter++;
  res.json({ tags });
};

// Implement other controllers related to tags


module.exports = {
  getTags,
  // Export other tag controllers
};
