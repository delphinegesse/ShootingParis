
export class ShootingLocationService {
    listShootingLocation: ShootingLocation[] = []

    addShootingLocation(shootingLocation: ShootingLocation): void {
        if (!this.listShootingLocation.some((element) => shootingLocation.locationId === element.locationId)) {
            this.listShootingLocation.push(shootingLocation)
        }
    }

    getShootingLocation(id: string): ShootingLocation {
        return <ShootingLocation>this.listShootingLocation.find(shootingLocation => shootingLocation.locationId === id);
    }

    getShootingLocationAt(address: string): ShootingLocation[] {
        return this.getAllShootingLocations().filter(shootingLocation => shootingLocation.address === address);
    }//d'une adresse

    getShootingLocationsFrom(title: string): ShootingLocation[] {
        return this.getAllShootingLocations().filter(shootingLocation => shootingLocation.title === title);
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
}