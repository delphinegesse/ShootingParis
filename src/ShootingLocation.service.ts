import {HttpService} from "@nestjs/axios";
import {Injectable, OnModuleInit} from "@nestjs/common";
import {readFile} from 'fs/promises';


@Injectable()
export class ShootingLocationService implements OnModuleInit{
    listShootingLocation: ShootingLocation[] = []

    constructor(private readonly httpService: HttpService) {
    }

    async onModuleInit():Promise<void> {
        await Promise.all([this.loadShootingLocationFromAPI(), this.loadShootingLocationFromFile()])
    }

    /**
     * Loads the shootingLocations from the 'database.json' file
     * @private
     */
    private async loadShootingLocationFromFile() : Promise<void>{
        try {
            const data = await readFile('./src/dataset.json');
            this.listShootingLocation = JSON.parse(data.toString());
        }
        catch(error){
            console.log('Err: ${error}');
        }
        this.listShootingLocation.forEach(e => e.favourite = false)
    }

    /**
     * Loads the database from the API link
     * @private
     */
    private async loadShootingLocationFromAPI(): Promise<void>{
        /**
        const dataweb :Observable<AxiosResponse> = this.httpService.get<APIShootingLocation>('https://api.npoint.io/f73e12c134959699a082');
        dataweb.pipe(
            map((resp) => resp.data),
            tap((APIShootingLocations) => {
                APIShootingLocations.forEach((elem)=> {
                    return this.listShootingLocation.push({
                        coord_y: elem.coord_y,
                        type_tournage: elem.type_tournage,
                        nom_producteur: elem.nom_producteur,
                        date_fin: elem.date_fin,
                        geo_point_2d: elem.geo_point_2d,
                        nom_tournage: elem.nom_tournage,
                        ardt_lieu: elem.ardt_lieu,
                        geo_shape: elem.geo_shape,
                        id_lieu: elem.id_lieu,
                        nom_realisateur: elem.nom_realisateur,
                        adresse_lieu: elem.adresse_lieu,
                        date_debut: elem.date_debut,
                        annee_tournage: elem.annee_tournage,
                        coord_x: elem.coord_x,
                        favourite: elem.favourite
                    });
                });
            }))
            .subscribe();
        console.log(this.listShootingLocation)
        this.listShootingLocation.forEach(e => e.favourite = false)
         **/
    }

    /**
     * Adds a shootingLocation to the list
     * @param shootingLocation
     */
    addShootingLocation(shootingLocation: ShootingLocation): ShootingLocation {
        if (!this.listShootingLocation.some((element) => shootingLocation.id_lieu === element.id_lieu)) {
  //          shootingLocation.favourite = false; // initialise to not favourite
            console.log(shootingLocation)
            this.listShootingLocation.push(shootingLocation);
        }
        return shootingLocation
    }

    /**
     * Returns a specific shootingLocation
     * @param id
     */
    getShootingLocation(id: string): ShootingLocation {
        return <ShootingLocation>this.listShootingLocation.find(shootingLocation => shootingLocation.id_lieu === id);
    }

    /**
     * Returns the list of shootingLocations corresponding to a specific location
     * @param postalCode
     */
    getShootingLocationAt(postalCode: string): ShootingLocation[] {
        return this.getAllShootingLocations().filter(shootingLocation => shootingLocation.ardt_lieu === postalCode);
    }

    /**
     * Returns the list of shootingLocations corresponding to a specific movie
     * @param title
     */
    getShootingLocationsFrom(title: string): ShootingLocation[] {
        return this.getAllShootingLocations().filter(shootingLocation => shootingLocation.nom_tournage === title).sort((a:ShootingLocation , b:ShootingLocation) => {
            return a.id_lieu.localeCompare(b.id_lieu);
        });
    }

    /**
     * Returns all the shootingLocations
     */
    getAllShootingLocations(): ShootingLocation[] {
        return this.listShootingLocation.sort((a:ShootingLocation , b:ShootingLocation) => {
            return a.nom_tournage.localeCompare(b.nom_tournage);
        });
    }

    /**
     * Returns the number of shootingLocations
     */
    getTotalNumberOfLocations(): number {
        return this.listShootingLocation.length;
    }

    /**
     * Removes the shootingLocations from the list
     * @param locationId
     */
    removeShootingLocation(locationId: string) {
        this.listShootingLocation = this.listShootingLocation.filter((shootingLocation) => shootingLocation.id_lieu !== locationId);
    }

    /**
     * Returns the favorite status
     * @param id
     */
    isFavourite(id: string) {
        return this.listShootingLocation.find(shootingLocation => shootingLocation.id_lieu === id).favourite;
    }

    /**
     * Puts the favorite status to true
     * @param id
     */
    addToFavourite(id: string) {
        this.listShootingLocation.find(shootingLocation => shootingLocation.id_lieu === id).favourite = true;
    }

    /**
     * Puts the favorite status to false
     * @param id
     */
    removeFromFavourite(id: string) {
        this.listShootingLocation.find(shootingLocation => shootingLocation.id_lieu === id).favourite = false;
    }

}