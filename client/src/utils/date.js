export function getDate(date) {
  const month = date.toLocaleString("default", { month: "long" });
  return {
    month,
  };
}

export function getCurrentDate() {
    return getDate(new Date);
}