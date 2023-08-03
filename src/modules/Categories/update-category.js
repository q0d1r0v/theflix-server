// imports
const database = require("../../../db/database");

const UpdateCategory = async (req, res) => {
  try {
    const { category_id, new_name, new_key } = req.body;
    if (category_id && new_name && new_key) {
      await database.query(
        `UPDATE categories SET name = '${new_name
          .split("'")
          .join('"')}', key = '${new_key
          .split("'")
          .join('"')}' WHERE id = '${category_id}'`
      );
      res.status(200).send({
        message: "Category is updated!",
      });
    } else {
      res.status(400).send({
        message: "You don't send full data for update category!",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = UpdateCategory;
