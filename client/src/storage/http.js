import { BASE_URL } from "../utils/helper";

export async function load(entityName) {
  const response = await fetch(BASE_URL + entityName);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(`Could not fetch ${entityName}`);
  }

  return resData;
}

export async function create(entityName, data) {
  const response = await fetch(BASE_URL + entityName, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(`Could not save ${entityName}`);
  }

  return resData;
}

export async function replace(entityName, data) {
  const response = await fetch(BASE_URL + entityName, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(`Could not save ${entityName}`);
  }

  return resData;
}
