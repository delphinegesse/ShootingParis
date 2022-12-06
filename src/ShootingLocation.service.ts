import {HttpService} from "@nestjs/axios";
import {Injectable, OnModuleInit} from "@nestjs/common";
import {map, Observable, tap} from "rxjs";
import {AxiosResponse} from 'axios';
import {readFile} from 'fs/promises';
import {APIShootingLocation} from "./APIShootingLocation";


@Injectable()
export class ShootingLocationService implements OnModuleInit{
    listShootingLocation: ShootingLocation[] = []

    constructor(private readonly httpService: HttpService) {
    }

    async onModuleInit():Promise<void> {
        await Promise.all([this.loadShootingLocationFromAPI(), this.loadShootingLocationFromFile()])

        //console.log(this.listShootingLocation)
    }

    private async loadShootingLocationFromFile() : Promise<void>{
        try {
            const data = await readFile('./src/dataset.json');
            this.listShootingLocation = JSON.parse(data.toString());
            //console.log(this.listShootingLocation[0])

            //console.log(this.listShootingLocation[0].nom_tournage)

        }
        catch(error){
            console.log('Err: ${error}');
        }
    }

    private async loadShootingLocationFromAPI(): Promise<void>{
        /**const dataweb :Observable<AxiosResponse> = this.httpService.get<APIShootingLocation>('https://opendata.paris.fr/api/records/1.0/search/?dataset=lieux-de-tournage-a-paris&q=&facet=annee_tournage&facet=type_tournage&facet=nom_tournage&facet=nom_realisateur&facet=nom_producteur&facet=ardt_lieu&facet=date_debut&facet=date_fin');
        dataweb.pipe(
            map((resp) => resp.data),
            tap((APIShootingLocations) => {
                APIShootingLocations.forEach((elem)=> {
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
        console.log(this.listShootingLocation)**/
    }


    addShootingLocation(shootingLocation: ShootingLocation): ShootingLocation {
        if (!this.listShootingLocation.some((element) => shootingLocation.nom_tournage === element.nom_tournage)) {
  //          shootingLocation.favourite = false; // initialise to not favourite
            console.log(shootingLocation)
            this.listShootingLocation.push(shootingLocation);
        }
        return shootingLocation
    }

    getShootingLocation(id: string): ShootingLocation {
        return <ShootingLocation>this.listShootingLocation.find(shootingLocation => shootingLocation.id_lieu === id);
    }

    getShootingLocationAt(postalCode: string): ShootingLocation[] {
        return this.getAllShootingLocations().filter(shootingLocation => shootingLocation.ardt_lieu === postalCode);
    }//d'une adresse

    getShootingLocationsFrom(title: string): ShootingLocation[] {
        return this.getAllShootingLocations().filter(shootingLocation => shootingLocation.nom_tournage === title).sort((a:ShootingLocation , b:ShootingLocation) => {
            return a.id_lieu.localeCompare(b.id_lieu);
        });
    }//d'un film

    getAllShootingLocations(): ShootingLocation[] {
        return this.listShootingLocation.sort((a:ShootingLocation , b:ShootingLocation) => {
            return a.nom_tournage.localeCompare(b.nom_tournage);
        });
    }

    getTotalNumberOfLocations(): number {
        return this.listShootingLocation.length;
    }

    removeShootingLocation(locationId: string) {
        this.listShootingLocation = this.listShootingLocation.filter((shootingLocation) => shootingLocation.id_lieu !== locationId);
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