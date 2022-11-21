import {Body,Controller, Delete, Get, HttpCode, Param, Post, Query,} from '@nestjs/common';
import { ShootingLocationService} from "./ShootingLocationService";
import {ShootingLocationDto} from "./ShootingLocation.dto";

@Controller('books')
export class ShootingLocationController {
    constructor(
        private readonly shootingLocationService: ShootingLocationService,
    ) {}

    @Post()
    createShootingLocation(@Body() shootingLocationToCreate: ShootingLocationDto): ShootingLocation {
        this.shootingLocationService.addShootingLocation(shootingLocationToCreate);
        return this.shootingLocationService.getShootingLocation(shootingLocationToCreate.locationId);
    }

    @Get(':address')
    getShootingLocationByAddress(@Param('address') address: string): ShootingLocation[] {
        return this.shootingLocationService.getShootingLocationAt(address);
    }

    @Get(':title')
    getShootingLocationByMovie(@Param('title') address: string): ShootingLocation[] {
        return this.shootingLocationService.getShootingLocationAt(address);
    }

    @Delete(':title')
    deleteShootingLocation(@Param('locationId') locationId: string): void {
        return this.shootingLocationService.removeShootingLocation(locationId);
    }
}