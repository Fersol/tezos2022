import { commonDbColumns } from '@tezos-dappetizer/database';
import { Column, Entity, EntityRepository, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LiquidityPool{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    amount!: number;

    @Column()
    asset_name!: string;

    @Column()
    contract_address!: string;

    @Column()
    token_id!: number;

    @Column()
    actuality_interval_start_block!: number;

    @Column()
    actuality_interval_end_block!: number;

    @Column()
    exchange_name!: string;

    @Column()
    fee!: number;
}