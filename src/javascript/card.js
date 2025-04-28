export const objects = {
  project: {
    title: [],
    description: [],
    dueDate: [],
  },
  event: {
    title: [],
    description: [],
    dueDate: [],
  },
  task: {
    title: [],
    description: [],
    dueDate: [],
  },
};

export const createCard = function createCard(type) {
  const container = document.createElement("div");
  container.classList.add("container-card");
  container.classList.add(type);
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
  container.style.gridGap = "10px";
  return container;
};

const card = (type) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add(type);
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.padding = "10px";
  card.style.margin = "10px";
  card.style.border = "1px solid black";
  card.style.boxShadow = "0px 0px 5px black";
  const content = contentOfCard(type);
  card.appendChild(content.title);
  card.appendChild(content.description);
  card.appendChild(content.dueDate);
  return card;
};

function contentOfCard(type) {
  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerText = objects[type].title;
  const description = document.createElement("p");
  description.classList.add("description");
  description.innerText = objects[type].description;
  const dueDate = document.createElement("p");
  dueDate.classList.add("dueDate");
  dueDate.innerText = objects[type].dueDate;

  return { title, description, dueDate };
}
