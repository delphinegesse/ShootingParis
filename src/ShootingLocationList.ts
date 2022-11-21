
export class ShootingLocationList {
    listShootingLocation: ShootingLocation[] = []

    addShootingLocation(shootingLocation: ShootingLocation): void {
        if (!this.listShootingLocation.find((element: ShootingLocation) => element.title)) {
            this.listShootingLocation.push(shootingLocation)
        } // TITLE ???
    }

    getShootingLocation(id: string): ShootingLocation {
        return <ShootingLocation>this.listShootingLocation.find(shootingLocation => shootingLocation.locationId === id);
    }

    getShootingLocationsFrom(title: string): ShootingLocation[] {
        return this.getAllShootingLocations().filter(book => book.title === title);
    }//d'un film

    getAllShootingLocations(): ShootingLocation[] {
        return this.listShootingLocation.sort((a:ShootingLocation , b:ShootingLocation) => {
            return a.title.localeCompare(b.title);
        });
    }

    getTotalNumberOfLocations(): number {
        return this.listShootingLocation.length;
    }
}