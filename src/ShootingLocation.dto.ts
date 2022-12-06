import {IsArray, IsDate, IsNotEmpty, IsString} from 'class-validator';


export class ShootingLocationDto {
    @IsNotEmpty()
    @IsString()
    readonly id_lieu: string

    @IsNotEmpty()
    @IsDate()
    readonly date_debut: Date

    @IsNotEmpty()
    @IsString()
    readonly type_tournage: string

    @IsNotEmpty()
    @IsString()
    readonly nom_tournage: string

    @IsNotEmpty()
    @IsString()
    readonly nom_realisateur: string

    @IsNotEmpty()
    @IsString()
    readonly nom_producteur: string

    @IsNotEmpty()
    @IsString()
    readonly adresse_lieu: string

    @IsNotEmpty()
    @IsString()
    readonly ardt_lieu: string

    @IsNotEmpty()
    @IsArray()
    readonly geo_point_2d: Array<number>
}