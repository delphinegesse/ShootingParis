import {IsArray, IsDate, IsNotEmpty, IsString} from 'class-validator';


export class ShootingLocationDto {
    @IsNotEmpty()
    @IsString()
    readonly locationId: string

    @IsNotEmpty()
    @IsDate()
    readonly shootingDate: Date

    @IsNotEmpty()
    @IsString()
    readonly shootingType: string

    @IsNotEmpty()
    @IsString()
    readonly title: string

    @IsNotEmpty()
    @IsString()
    readonly director: string

    @IsNotEmpty()
    @IsString()
    readonly producer: string

    @IsNotEmpty()
    @IsString()
    readonly address: string

    @IsNotEmpty()
    @IsString()
    readonly postalCode: string

    @IsNotEmpty()
    @IsDate()
    readonly startDate: Date

    @IsNotEmpty()
    @IsDate()
    readonly endDate: Date

    @IsNotEmpty()
    @IsArray()
    readonly geoLocation: Array<number>
}