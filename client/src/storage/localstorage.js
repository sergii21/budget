export async function load(entityName) {
  const items = JSON.parse(localStorage.getItem(entityName)) || [];
  return items;
}

export async function create(entityName, item) {
  const items = JSON.parse(localStorage.getItem(entityName)) || [];
  const newItems = [item, ...items];
  localStorage.setItem(entityName, JSON.stringify(newItems));
  return item;
}

export async function replace(entityName, item) {
  localStorage.setItem(entityName, JSON.stringify(item));
  return item;
}
