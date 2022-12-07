import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ShootingLocationService} from "./ShootingLocation.service";
import {ShootingLocationDto} from "./ShootingLocation.dto";

@Controller('/shootingLocations')
export class ShootingLocationController {

    constructor(
        private readonly shootingLocationService: ShootingLocationService,
    ) {}

    /**
     * Request POST that creates a shootingLocation in the list
     * @param shootingLocationToCreate
     */
    @Post()
    createShootingLocation(@Body() shootingLocationToCreate: ShootingLocation): ShootingLocation {
        this.shootingLocationService.addShootingLocation(shootingLocationToCreate);
        console.log('hello from POST')

        return this.shootingLocationService.getShootingLocation(shootingLocationToCreate.id_lieu);
    }

    /**
     * Request GET that returns a list of shootingLocations according to the parameter
     * @param titre
     * @param postalCode
     */
    @Get()
    getAllShootingLocations(@Query('titre') titre: string, @Query('postalCode') postalCode: string ): ShootingLocation[]{
        if(titre){
            return this.shootingLocationService.getShootingLocationsFrom(titre)
        }
        if(postalCode){
            return this.shootingLocationService.getShootingLocationAt(postalCode)
        }
        return this.shootingLocationService.getAllShootingLocations()
    }

    /**
     * Request GET that returns a specific shootingLocation
     * @param locationid
     */
    @Get(':locationid')
    getShootingLocationByID(@Param('locationid') locationid: string): ShootingLocation {
        return this.shootingLocationService.getShootingLocation(locationid);
    }

    /**
     * Request DELETE that remove a specific shootingLocation
     * @param locationId
     */
    @Delete(':locationId')
    deleteShootingLocation(@Param('locationId') locationId: string): void {
        console.log('hello from DELETE')

        return this.shootingLocationService.removeShootingLocation(locationId);
    }

    /**
     * Request PUT that puts a shootingLocation as favorite
     * @param locationId
     */
    @Put(':locationId')
    addToFavourite(@Param('locationId') locationId: string): void {
        console.log('hello from PUT')
        if(this.shootingLocationService.isFavourite(locationId) == true){
            return this.shootingLocationService.removeFromFavourite(locationId)
        }
        else {
            return this.shootingLocationService.addToFavourite(locationId);
        }
    }

}