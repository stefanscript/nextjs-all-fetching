import { NextApiRequest, NextApiResponse } from "next";
import { getWeather } from "../../server-side/service/weather";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const location = <string>req.query.location;
    
    switch(req.method) {
        case "GET":
            const weather = await getWeather(location);
            res.status(200).json(weather);
            res.end();
            break;
        default: 
            throw new Error("Network Error")    
    }
}