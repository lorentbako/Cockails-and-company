const DbsDataPost = async (props) => {
  const response = await fetch(
    "https://praktika-roi-default-rtdb.europe-west1.firebasedatabase.app/employees.json",
    {
      method: "POST",
      body: JSON.stringify(props),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export default DbsDataPost;
