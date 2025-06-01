const resourceList = document.getElementById("resource-list");

// Function to create a resource card HTML element
function createResourceCard(resource) {
  const card = document.createElement("div");
  card.className = "resource-card";

  card.innerHTML = `
    <h3>${resource.name}</h3>
    <p><strong>Category:</strong> ${resource.category}</p>
    <p><strong>Address:</strong> ${resource.address}</p>
    <p><strong>Hours:</strong> ${resource.hours}</p>
    <p><strong>Contact:</strong> ${resource.contact}</p>
    <p>${resource.description || "No description available."}</p>
    <p>Rate this resource:</p>
    <button aria-label="Upvote ${resource.name}" onclick="vote('up', '${
    resource.name
  }')">👍</button>
    <button aria-label="Downvote ${resource.name}" onclick="vote('down', '${
    resource.name
  }')">👎</button>
  `;

  return card;
}

// Render all resources on page load
function renderResources() {
  resourceList.innerHTML = "";
  if (resources.length === 0) {
    resourceList.innerHTML = "<p>No resources found for this category.</p>";
    return;
  }
  resources.forEach((resource) => {
    const card = createResourceCard(resource);
    resourceList.appendChild(card);
  });
}

// Voting function
function vote(type, resourceName) {
  alert(`You voted ${type} for "${resourceName}"`);
}

renderResources();
