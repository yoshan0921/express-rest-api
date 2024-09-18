import { pool } from '../libs/database.js';

export const getAccounts = async (req, res) => {
  try {
    const result = await pool.query({
      text: `SELECT * FROM account`,
    });

    const users = result.rows;
    res.status(200).json({
      status: "200",
      message: "Success",
      data: users
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      status: "500",
      message: "Internal Server Error" 
    });
  }
}

export const getAccount = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await pool.query({
      text: `SELECT * FROM account WHERE id = $1`,
      values: [userId]
    });

    const user = result.rows[0];
    res.status(200).json({
      status: "200",
      message: "Success",
      data: user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      status: "500",
      message: "Internal Server Error" 
    });
  }
}