import conn from "../todos/DB/db";

async function methodGet() {
  //   throw "se paso de lanza xd";

  // try {
  //   const query = "INSERT INTO posts(content) VALUES($1)";
  //   const values = [req.body.content];
  //   const result = await conn.query(query, values);
  //   console.log("ttt", result);
  // } catch (error) {
  //   console.log(error);
  // }

  return {
    message: "Hello from Next.js! method GET",
    datos: [{ id: "1" }, { id: "2" }],
  };
}

async function methodPost(data) {
  const { id } = await data.json();

  try {
    const query = "Select * from BD-Novedades.persona where id=($1)";
    // const values = [req.body.content];
    const datos = await conn.query(query, id);

    console.log(datos);

    return {
      message: `Total de registro ${datos?.length}`,
      datos,
    };
  } catch (error) {
    throw error;
    console.log(error);
  }
}

export { methodGet, methodPost };
