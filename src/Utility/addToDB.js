const safeParseArray = (str) => {
  try {
    const v = JSON.parse(str);
    return Array.isArray(v) ? v : [];
  } catch (error) {
    return [];
  }
};

// Get Read List
export const getStoredBook = () => {
  const str = localStorage.getItem("readList");
  return safeParseArray(str);
};

// Get Wishlist
export const getStoredWishList = () => {
  const str = localStorage.getItem("wishList");
  return safeParseArray(str);
};

// Add to Read List
export const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    return {
      success: false,
      message: "This book is already is your Read List!",
    };
  }

  // Remove from wishlist if it's there
  const wishListData = getStoredWishList();
  if (wishListData.includes(id)) {
    const updateWishList = wishListData.filter((bookId) => bookId !== id);
    localStorage.setItem("wishList", JSON.stringify(updateWishList));
  }

  storedBookData.push(id);
  const readListData = JSON.stringify(storedBookData);
  localStorage.setItem("readList", readListData);
  return { success: true, message: "Book added to Read List!" };
};

// Add to Wishlist
export const addToWishList = (id) => {
  const storedWishListData = getStoredWishList();
  const readListData = getStoredBook();

  if (readListData.includes(id)) {
    return {
      success: false,
      message: "This book is already in your Read List!",
    };
  }

  if (storedWishListData.includes(id)) {
    return {
      success: false,
      message: "This book is already in your Wishlist!",
    };
  }

  storedWishListData.push(id);
  const wishListData = JSON.stringify(storedWishListData);
  localStorage.setItem("wishList", wishListData);
  return { success: true, message: "Book added to Wishlist!" };
};
