// Get the client
import mysql from 'mysql2/promise';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

const connection =  await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3309,
    user: process.env.DB_USER || 'feusi',
    password: process.env.DB_PASSWORD || 'feusi',
    database: process.env.DB_NAME || 'w3schools',
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({message: 'This is a simple REST API for the w3schools database'});
})

app.use(cors({ origin: 'http://localhost:3001' })); // Allow requests from your React app

const relations = [
    {
        name: "categories",
        id: "CategoryID"
    },
    {
        name: 'customers',
        id: 'customerID'
    },
    {
        name: "employees",
        id: "EmployeeID"
    },
    {
        name: "order_details",
        id: "OrderDetailIDs"
    },
    {
        name: "orders",
        id: "OrderID"
    },
    {
        name: "products",
        id: "ProductID"
    },
    {
        name: "shippers",
        id: "ShipperID"
    },
    {
        name: "suppliers",
        id: "SupplierID"
    }
]

for (let relation of relations) {
    app.get(`/${relation.name}`, async (req, res) => {
        // Get all rows of relation
        try {
            const [rows] =  await connection.query(`SELECT * FROM ${relation.name}`);
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error:');
        }
    })

    app.get(`/${relation.name}/:id`, async (req, res) => {
        // Get row by id of relation

        const id = req.params.id;

        try {
            const [rows] = await connection.query(
                `SELECT * FROM ${relation.name} WHERE ${relation.id} = ?`,
                [id]
            );
            res.json(rows);

        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error:');
        }}
    )

    app.post(`/${relation.name}`, async (req, res) => {
        // create new entry in relation

        try {
            const query = `INSERT INTO ${relation.name} (${Object.keys(req.body).join(', ')}) VALUES (${Object.keys(req.body).map(_ => '?')})`;
            console.log(query)

            const [rows] = await connection.query(
                query,
                Object.values(req.body)
            );
            res.json(rows);

        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error:');
        }
    })

    app.patch(`/${relation.name}/:id`, async (req, res) => {
        // update fields set in request body for relation

        const id = req.params.id;

        try {
            const query = `UPDATE ${relation.name} SET ${Object.keys(req.body).map(k => k + " = ?").join(', ')} WHERE ${relation.id} = ${id}`;
            console.log(query)

            const [rows] = await connection.query(
                query,
                Object.values(req.body)
            );
            res.json(rows);

        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error:');
        }

    })

    app.delete(`/${relation.name}/:id`, async (req, res) => {
        // delete by id for relation
        
        const id = req.params.id;
        try {
            const [rows] = await connection.query(
                `DELETE FROM ${relation.name} WHERE ${relation.id} = ?`,
                [id]
            );
            res.json(rows);

        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error:');
        }
    })
}
