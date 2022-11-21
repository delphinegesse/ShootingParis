import { IsNotEmpty, IsString } from 'class-validator';

export class ShootingLocationDto {
    @IsNotEmpty()
    @IsString()
    readonly locationId: string;

    @IsNotEmpty()
    @IsString()
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
    @IsString()
    readonly startDate: Date

    @IsNotEmpty()
    @IsString()
    readonly endDate: Date

    @IsNotEmpty()
    @IsString()
    readonly geoLocation: Array<number>
}