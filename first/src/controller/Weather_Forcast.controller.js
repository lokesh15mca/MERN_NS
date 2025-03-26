const express = require("express");
const route = express.Router();

const WeatherForcast = require('../model/weather_Forcast.model');
const redis = require('../config/redis')

route.get("", (req, res)=>{
    console.log("Line no 8");
    redis.get("weather_Forcast", async function(err, forcasts){
        console.log("Line no 10");
        if(err) console.log(err)
        if(forcasts) return res.status(200).send({cashed_forcast : JSON.parse(forcasts)})
        const weather_Forcast = await WeatherForcast.find().lean().exec();
        redis.set("weather_Forcast", JSON.stringify(weather_Forcast))
        return res.status(200).send({weather_Forcast})
    })
})

route.post("", async function(req, res){
    const weather_Forcast = await WeatherForcast.create(req.body);
    const weather_Forcasts = await WeatherForcast.find().lean().exec();
    redis.set("weather_Forcast", JSON.stringify(weather_Forcasts))
    return res.status(201).send(weather_Forcast)
})

route.get("/:id", async function(req, res){
    redis.get(`weather_Forcast.${req.params.id}`, async(err, forcasts)=>{
        if(err) console.log(err);
        if(forcasts) return res.status(200).send({cashed_forcast : JSON.parse(forcasts)});

        const weather_Forcast = await WeatherForcast.findById(req.params.id).lean().exec();
        redis.set(`weather_Forcast.${req.params.id}`, JSON.stringify(weather_Forcasts))
        return res.status(201).send({db_forcast: weather_Forcast})

    })
})

route.patch("/:id", async(req, res)=>{
    const weather_Forcast = await WeatherForcast.findByIdAndUpdate(req.params.id, req.bosy, {new: true});
    redis.set(`weather_Forcast.${req.params.id}`, JSON.stringify(weather_Forcast));

    const weather_Forcasts = await WeatherForcast.find().lean().exec();
    redis.set("weather_Forcast", JSON.stringify(weather_Forcasts))
    return res.status(201).send(weather_Forcast)
})
route.delete("/:id", async(req, res)=>{
    const weather_Forcast = await WeatherForcast.findByIdAndDelete(req.params.id);
    redis.del(`weather_Forcast.${req.params.id}`);

    const weather_Forcasts = await WeatherForcast.find().lean().exec();
    redis.set("weather_Forcasts", JSON.stringify(weather_Forcasts))
    return res.status(200).send(weather_Forcast)
})
module.exports = route;