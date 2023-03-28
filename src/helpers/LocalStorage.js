export function setLocalStorage(key, value) {
  try {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
  } catch (error) {
    throw new Error('Set state error: ', error.message);
  }
}

export function getLocalStorage(key, defaultValue) {
  try {
    const storageValue = localStorage.getItem(key);
    return storageValue === null ? defaultValue : JSON.parse(storageValue);
  } catch (error) {
    throw new Error('Get state error: ', error.message);
  }
}
