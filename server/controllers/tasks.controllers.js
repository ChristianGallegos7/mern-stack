import { pool } from "../db.js";
//OBTIENE TODAS LAS TAREAS EN PLURAL
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
//obtiene una tarea por id
export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("Select * from tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({
        message: "No se encontro",
      });
    }

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
//crea una tarea
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title,description) VALUES (?,?)",
      [title, description]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
//ACTUALIZA LA TAREA
export const updateTask = async (req, res) => {
  try {
    const result = pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
//ELIMINA UNA TAREA
export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404);
    }

    return res.status(404).json({
      message: "No se encontro",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
