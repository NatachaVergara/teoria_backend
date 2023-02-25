const {
  allAuthors,
  authorById,
  deleteAuthor,
  createAuthor,
  updateAuthor,
} = require("../models/authorsModel");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../utils/verifyToken");

module.exports.allAuthorsController = async (req, res) =>
{
  try
  {
    const data = await allAuthors();
    return res.send(data);
  } catch (error)
  {
    console.log(error);
    return res.send("Se produjo un error al realizar la request");
  }
};

module.exports.authorByIdController = async (req, res) =>
{
  verifyToken(req.token);
  const { id } = req.params;
  try
  {
    const data = await authorById(id);
    return res.send(data);
  } catch (error)
  {
    console.log(error);
    return res.send("Se produjo un error al realizar la request");
  }
};

module.exports.authorCreateController = async (req, res) =>
{
  //utilizo la función que compara el token
  verifyToken(req.token, res);
  const { name, lastName, alive } = req.body;
  const { filename } = req.file;
  console.log(filename, name, lastName, alive);

  try
  {
    const data = await createAuthor(name, lastName, alive, filename);
    return data.created
      ? res.status(201).send(data)
      : res.status(201).send(data);
  } catch (error)
  {
    console.log(error);
    return res.send("Se produjo un error al realizar la request");
  }
};

module.exports.authorUpdateController = async (req, res) =>
{
  verifyToken(req.token, res);
  const { id } = req.params;
  const { name, lastName, alive, image } = req.body;
  let updateImage;
  if (image)
  {
    updateImage = image;
  } else
  {
    const { filename } = req.file;
    updateImage = filename;
  }

  //Le envio a mi modelo los datos del body y de params
  try
  {
    const data = await updateAuthor(id, name, lastName, alive, updateImage);
    return data.updated
      ? res.status(201).send(data)
      : res.status(201).send(data);
  } catch (error)
  {
    console.log(error);
    return res.send("Se produjo un error al realizar la request");
  }
};

module.exports.authorDeleteController = async (req, res) =>
{
  verifyToken(req.token, res);
  const { id } = req.params;
  try
  {
    const data = await deleteAuthor(id);
    return data.deleted
      ? res.status(201).send(data)
      : res.status(201).send(data);
  } catch (error)
  {
    console.log(error);
    return res.send("Se produjo un error al realizar la request");
  }
};
