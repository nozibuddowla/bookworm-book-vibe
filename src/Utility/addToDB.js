const getStoredBook = () => {
  const storedBookStr = localStorage.getItem("readList");
  return storedBookStr ? JSON.parse(storedBookStr) : [];
};

export const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    alert("This is already added!");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
};
