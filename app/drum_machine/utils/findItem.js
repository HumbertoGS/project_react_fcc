export const findItem = (item, keyValue) => {
    const existsItem = item.filter((item) => item.id === keyValue)[0];
  
    return existsItem ? { sound: true, ...existsItem } : { sound: false };
  };
  