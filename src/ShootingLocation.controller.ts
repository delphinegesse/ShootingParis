import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ShootingLocationService} from "./ShootingLocation.service";
import {ShootingLocationDto} from "./ShootingLocation.dto";

@Controller('/shootingLocations')
export class ShootingLocationController {
    constructor(
        private readonly shootingLocationService: ShootingLocationService,
    ) {}

    @Post()
    createShootingLocation(@Body() shootingLocationToCreate: ShootingLocation): ShootingLocation {
        this.shootingLocationService.addShootingLocation(shootingLocationToCreate);
        return this.shootingLocationService.getShootingLocation(shootingLocationToCreate.id_lieu);
    }

    @Get()
    getAllShootingLocations(@Query('titre') titre: string, @Query('postalCode') postalCode: string ): ShootingLocation[]{
        if(titre){
            console.log('hello from titre')

            return this.shootingLocationService.getShootingLocationsFrom(titre)
        }
        if(postalCode){
            console.log('hello from postalCode')

            return this.shootingLocationService.getShootingLocationAt(postalCode)

        }

        console.log('hello')
        return this.shootingLocationService.getAllShootingLocations()
    }

    /**
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
**/
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