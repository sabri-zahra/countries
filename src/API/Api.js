const Api = async (url) => {
  const request = await fetch(url);
  if (!request.ok) {
    throw new Error("Some Thing wrong to fetch data...");
  }
  return request.json();
};

export default Api;
