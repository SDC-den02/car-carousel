export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) { throw new Error(`Fetch call failed.`) };
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}