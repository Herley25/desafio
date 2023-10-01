import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('productSell') // irá referenciar ao banco de dados
export class ProductSell {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    typeProduct: number;

    @Column({type: 'text'})
    date: string;

    @Column({type: 'text'})
    productDescription: string;

    @Column()
    productValue: number;

    @Column({type: 'text'})
    seller: string;
}