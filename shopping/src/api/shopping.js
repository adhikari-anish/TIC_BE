const ShoppingService = require("../services/shopping-service");
const UserAuth = require('./middlewares/auth');
const { PublishCustomerEvent } = require("../utils");

module.exports = (app) => {
    
    const service = new ShoppingService();

    app.post('/order',UserAuth, async (req,res,next) => {

        const { _id } = req.user;
        const { txnNumber } = req.body;


        try {
            const { data } = await service.PlaceOrder({_id, txnNumber});

            const payload = await service.GetOrderPayload(_id, data, 'CREATE_ORDER');

            PublishCustomerEvent(payload);

            return res.status(200).json(data);
            
        } catch (err) {
            next(err)
        }

    });

    app.get('/orders',UserAuth, async (req,res,next) => {

        const { _id } = req.user;

        try {
            const { data } = await service.GetOrders(_id);
            return res.status(200).json(data);
        } catch (err) {
            next(err);
        }

    });

    app.put('/cart', UserAuth, async (req,res,next) => {

        try {
            const { _id } = req.user;

            const { data } = await service.AddToCart(_id, req.body._id);
            
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }


    });

    app.delete('/cart/:id',UserAuth, async (req,res,next) => {
        try {

            console.log(">>>>> hereee");
            
            const { _id } = req.user;


            const { data } = await service.AddToCart(_id, req.body._id);
            
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }

    });
       
    
    app.get('/cart', UserAuth, async (req,res,next) => {

        const { _id } = req.user;
        try {
            const { data } = await service.GetCart({ _id });
            return res.status(200).json(data);
        } catch (err) {
            throw err;
        }
    });
}