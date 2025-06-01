const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const { filterByCategory, getCategories } = require("./utils/helpers");

// Sample resources
const resources = [
  {
    name: "Bronx Food Bank",
    category: "food",
    address: "123 Jerome Ave",
    hours: "Mon–Fri 9am–5pm",
    contact: "718-123-4567",
    description: "Provides food assistance to Bronx residents.",
  },
  {
    name: "Mental Health Center",
    category: "health",
    address: "456 Grand Concourse",
    hours: "Mon–Sat 10am–6pm",
    contact: "718-555-7890",
    description: "Mental health services and counseling.",
  },
  {
    name: "Youth Tech Classes",
    category: "education",
    address: "789 Fordham Rd",
    hours: "Sat–Sun 10am–2pm",
    contact: "718-222-3333",
    description: "Free tech education for youth.",
  },
  {
    name: "Bronx Job Center",
    category: "jobs",
    address: "321 Tremont Ave",
    hours: "Mon–Fri 8am–4pm",
    contact: "718-999-1111",
    description: "Job search help and training.",
  },
];

// Set EJS view engine & static folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/", (req, res) => {
  const category = req.query.category;
  const filtered = category ? filterByCategory(resources, category) : resources; // show all if no category selected
  const categories = getCategories(resources);
  res.render("index", {
    resources: filtered,
    categories,
    selected: category || "",
  });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
