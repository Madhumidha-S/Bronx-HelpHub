function filterByCategory(resources, category) {
  return resources.filter((r) => r.category === category);
}

function getCategories(resources) {
  // To get unique categories from resources
  const cats = new Set(resources.map((r) => r.category));
  return Array.from(cats);
}

module.exports = { filterByCategory, getCategories };
