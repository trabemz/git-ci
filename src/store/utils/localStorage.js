export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key, initialState) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialState;
  } catch (e) {
    return initialState;
  }
}
