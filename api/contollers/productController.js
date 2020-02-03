import models from '../server/src/models/index'

const getAll = async (req, res) => {
    const products = await models.Products.findAll({ raw: true });
    res.json(products);
};

const addProduct = async (req, res) => {
    if (req.body.name && req.body.price && req.body.is_breakfast) {
        const newProduct = await models.Products.create(req.body);
        res.json(newProduct);
    } else {
        res.json({ message: 'complete name;price and if is breakfast' })
    }
};

const getProduct = async (req, res) => {
    const { id } = req.params
    const selectedProduct = await models.Products.findOne({ where: { id: id } });
    res.json(selectedProduct);
};

const updatedProduct = async (req, res) => {
    const { id } = req.params
    const productToModificate = await models.Products.findOne({ where: { id: id } })
    if(productToModificate){
        const modificatedProduct = await models.Products.update({ where: {id: id} })
        res.json(modificatedProduct);
    }
    
};

const deleteProduct = async (req, res) => {
    const { id } = req.params
    const productToDelete = await models.Products.findOne({ where: { id: id } })
    if (productToDelete) {
        const deletedProduct = await models.Products.destroy({ where: { id: id } })
        res.json(deletedProduct);
    }
};

    export default {
        getAll,
        addProduct,
        getProduct,
        updatedProduct,
        deleteProduct,
    }

