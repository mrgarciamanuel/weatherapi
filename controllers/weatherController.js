const getLocation = (req, res, next) => {


    if(global.navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            res.status(200).json({
                success: true,
                data: {
                    latitude: lat,
                    longitude: lon
                }
            });
        })
    } else {
        res.status(400).json({
            success: false,
            message: 'Geolocation is not supported by this browser.'
        });
    }


}

module.exports = {
    getLocation
};