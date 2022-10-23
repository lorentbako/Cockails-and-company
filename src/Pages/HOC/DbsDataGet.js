const DbsDataGet = async (props) => {
  const options = {
    method: "GET",
    headers: props.headers,
  };
  const response = await fetch(props.url, options).then((response) =>
    response.json()
  );

  return response;
};
export default DbsDataGet;
