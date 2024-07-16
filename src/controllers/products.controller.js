import { prisma } from "../db.js";

export const getProduct = async(req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: "Error en el método GET", message: error.message });
    }
};

export const createProduct = async(req, res) => {
    const { name, description, price } = req.body;
    try {
        const newProduct = await prisma.product.create({
            data: {
                name,
                description,
                price,
            },
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo crear el producto.' });
    }
};

export const updateProduct = async(req, res) => {
    const productId = parseInt(req.params.id);
    const { name, description, price } = req.body;
    try {
        const updatedProduct = await prisma.product.update({
            where: { id: productId },
            data: {
                name,
                description,
                price,
            },
        });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo actualizar el producto.' });
    }
};

export const deleteProduct = async(req, res) => {
    const productId = parseInt(req.params.id);
    try {
        await prisma.product.delete({
            where: { id: productId },
        });
        res.json({ message: 'Producto eliminado correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'No se pudo eliminar el producto.' });
    }
};