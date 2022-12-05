import {HttpService} from "@nestjs/axios";
import {Injectable, OnModuleInit} from "@nestjs/common";
import {map, Observable, tap} from "rxjs";
import {AxiosResponse} from 'axios';
import {ShootingLocationDto} from "./ShootingLocation.dto";
import {readFile} from 'fs/promises';
import {APIShootingLocation} from "./APIShootingLocation";


@Injectable()
export class ShootingLocationService implements OnModuleInit{
    listShootingLocation: ShootingLocation[] = []

    constructor(private readonly httpService: HttpService) {
    }

    async onModuleInit():Promise<void> {
        await Promise.all([this.loadShootingLocationFromAPI(), this.loadShootingLocationFromFile()])

        console.log(this.listShootingLocation)
    }

    private async loadShootingLocationFromFile() : Promise<void>{
        try {
            const data = await readFile('./src/dataset.json');
            this.listShootingLocation = JSON.parse(data.toString());
        }
        catch(error){
            console.log('Err: ${error}');
        }
    }

    private async loadShootingLocationFromAPI(): Promise<void>{
        const dataweb :Observable<AxiosResponse> = this.httpService.get<APIShootingLocation>('https://opendata.paris.fr/explore/embed/dataset/lieux-de-tournage-a-paris/table/?disjunctive.type_tournage&disjunctive.nom_tournage&disjunctive.nom_realisateur&disjunctive.nom_producteur&disjunctive.ardt_lieu');
        dataweb.pipe(
            map((resp) => resp.data),
            tap((apiShootingLocations) => {
                apiShootingLocations.forEach((elem)=> {
                    return this.listShootingLocation.push({
                        locationId: elem.locationId,
                        shootingDate: elem.shootingDate,
                        shootingType: elem.shootingType,
                        title: elem.title,
                        director: elem.director,
                        producer: elem.producer,
                        address: elem.address,
                        postalCode: elem.postalCode,
                        geoLocation: elem.geoLocation,
                    });
                });
            }))
            .subscribe();
        console.log(this.listShootingLocation)
    }


    addShootingLocation(shootingLocation: ShootingLocation): void {
        if (!this.listShootingLocation.some((element) => shootingLocation.locationId === element.locationId)) {
  //          shootingLocation.favourite = false; // initialise to not favourite
            this.listShootingLocation.push(shootingLocation);
        }
    }

    getShootingLocation(id: string): ShootingLocation {
        return <ShootingLocation>this.listShootingLocation.find(shootingLocation => shootingLocation.locationId === id);
    }

    getShootingLocationAt(address: string): ShootingLocation[] {
        return this.getAllShootingLocations().filter(shootingLocation => shootingLocation.address === address);
    }//d'une adresse

    getShootingLocationsFrom(title: string): ShootingLocation[] {
        return this.getAllShootingLocations().filter(shootingLocation => shootingLocation.title === title).sort((a:ShootingLocation , b:ShootingLocation) => {
            return a.locationId.localeCompare(b.locationId);
        });
    }//d'un film

    getAllShootingLocations(): ShootingLocation[] {
        return this.listShootingLocation.sort((a:ShootingLocation , b:ShootingLocation) => {
            return a.title.localeCompare(b.title);
        });
    }

    getTotalNumberOfLocations(): number {
        return this.listShootingLocation.length;
    }

    removeShootingLocation(locationId: string) {
        this.listShootingLocation = this.listShootingLocation.filter((shootingLocation) => shootingLocation.locationId !== locationId);
    }
/*
    isFavourite(id: string) {
        return this.listShootingLocation.find(shootingLocation => shootingLocation.locationId === id).favourite;
    }

    addToFavourite(id: string) {
        this.listShootingLocation.find(shootingLocation => shootingLocation.locationId === id).favourite = true;
    }

    removeFromFavourite(id: string) {
        this.listShootingLocation.find(shootingLocation => shootingLocation.locationId === id).favourite = false;
    }
 */
}