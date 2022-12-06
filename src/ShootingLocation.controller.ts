import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ShootingLocationService} from "./ShootingLocation.service";
import {ShootingLocationDto} from "./ShootingLocation.dto";

@Controller('/shootingLocations')
export class ShootingLocationController {
    constructor(
        private readonly shootingLocationService: ShootingLocationService,
    ) {}

    @Post()
    createShootingLocation(@Body() shootingLocationToCreate: ShootingLocationDto): ShootingLocation {
        this.shootingLocationService.addShootingLocation(shootingLocationToCreate);
        return this.shootingLocationService.getShootingLocation(shootingLocationToCreate.locationId);
    }

    @Get(':locationid')
    getShootingLocationByID(@Param('locationid') locationid: string): ShootingLocation {
        return this.shootingLocationService.getShootingLocation(locationid);
    }

    @Get(':address')
    getShootingLocationByAddress(@Param('address') address: string): ShootingLocation[] {
        if(address===undefined){
            return this.shootingLocationService.getAllShootingLocations();
        }
        return this.shootingLocationService.getShootingLocationAt(address);
    }

    @Get(':title')
    getShootingLocationByMovie(@Param('title') title: string): ShootingLocation[] {
        if(title===undefined){
            return this.shootingLocationService.getAllShootingLocations();
        }
        return this.shootingLocationService.getShootingLocationsFrom(title);
    }

    @Delete(':locationId')
    deleteShootingLocation(@Param('locationId') locationId: string): void {
        return this.shootingLocationService.removeShootingLocation(locationId);
    }
/*
    @Put(':locationId')
    addToFavourite(@Param('locationId') locationId: string): void {
        return this.shootingLocationService.addToFavourite(locationId);
    }
 */
}