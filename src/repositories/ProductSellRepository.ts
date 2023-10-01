// referencia as entidades pegando suas funcionalidades para não inflar o controller
// deixando as responsbilidades organizadas

import {AppDataSource} from '../data-source';
import {ProductSell} from '../entities/ProductSell';

export const ProductSellRepository = AppDataSource.getRepository(ProductSell)