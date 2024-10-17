const BookingService = require("../services/booking-service");

module.exports = (app) => {
    
    const service = new BookingService();

    app.use('/app-events',async (req,res,next) => {

        const { payload } = req.body;
        console.log("============= BOOKING ================");
        
        console.log(payload);

         //handle subscribe events
         service.SubscribeEvents(payload);
         
       return res.status(200).json({message: 'notified!'});

    });

}
