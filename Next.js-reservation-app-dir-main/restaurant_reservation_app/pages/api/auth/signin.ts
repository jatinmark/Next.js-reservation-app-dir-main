import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req : NextApiRequest ,
    res : NextApiResponse) {

    if(req.method === "POST"){}

    return res.status(404).json("Unknown endpoint");
}