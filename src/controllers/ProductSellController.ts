import { Request, Response } from "express";
import { ProductSellRepository } from "../repositories/ProductSellRepository";

export class ProductSellController {
    async create(req: Request, res: Response) {
        const {typeProduct} = req.body

        if(!typeProduct) {
            return res.status(400).json({ message: "Campo obrigatório" })
        };

        try {
            const newProductSell = ProductSellRepository.create({typeProduct})
            await ProductSellRepository.save(newProductSell);

            return res.status(201).json(newProductSell)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Internal Server Error"})
        }
    }
}