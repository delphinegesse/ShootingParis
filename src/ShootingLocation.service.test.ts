import {ShootingLocationService} from "./ShootingLocation.service";

describe('ShootingLocationList', () => {
    const CigareAuMiel: ShootingLocation = {
        locationId: '2019-1712',
        shootingDate: new Date(2019),
        shootingType: 'Long métrage',
        title: 'CIGARE AU MIEL',
        director: 'Madame KAMIR AÏNOUZ',
        producer: 'ELIPH PRODUCTIONS',
        address: '7 rue de berri, 75008 paris',
        postalCode: '75008',
        startDate: new Date(2019,12,12),
        endDate: new Date(2019,12,12),
        geoLocation: [48.87219487147879,2.303550627818585]
 //       favourite: false
    };
    const JoursMax: ShootingLocation = {
        locationId: '2019-1719',
        shootingDate: new Date(2019),
        shootingType: 'Long métrage',
        title: '30 Jours Max',
        director: 'Tarek BOUDALI',
        producer: 'AXEL FILMS PRODUCTION',
        address: 'rue rené clair, 75018 paris',
        postalCode: '75018',
        startDate: new Date(2019,12,9),
        endDate: new Date(2019,12,9),
        geoLocation: [48.87219487147879,2.303550627818585]
 //       favourite: false
    };
    const CigareAuMielCOPIE: ShootingLocation = {
        locationId: '2019-1713',
        shootingDate: new Date(2019),
        shootingType: 'Long métrage',
        title: 'CIGARE AU MIEL',
        director: 'Madame KAMIR AÏNOUZ',
        producer: 'ELIPH PRODUCTIONS',
        address: '7 rue de berri, 75008 paris',
        postalCode: '75008',
        startDate: new Date(2019,12,12),
        endDate: new Date(2019,12,12),
        geoLocation: [48.87219487147879,2.303550627818585]
  //      favourite: false
    };

    let location: ShootingLocationService;

    beforeEach(() => {
        location = new ShootingLocationService();
    });

    it('should store a location', () => {
        location.addShootingLocation(CigareAuMiel);

        expect(location.getShootingLocation('2019-1712')).toEqual(CigareAuMiel);
    });

    it('should return all locations sorted by title {ASC}', () => {
        location.addShootingLocation(CigareAuMiel);
        location.addShootingLocation(JoursMax);

        expect(location.getAllShootingLocations()).toEqual([
            JoursMax,
            CigareAuMiel
        ]);
    });

    it('should find a single location by id', () => {
        location.addShootingLocation(CigareAuMiel);
        location.addShootingLocation(JoursMax);

        expect(location.getShootingLocation('2019-1719')).toEqual(JoursMax);
    });

    it('should find a single location by address', () => {
        location.addShootingLocation(CigareAuMiel);
        location.addShootingLocation(JoursMax);

        expect(location.getShootingLocationAt('rue rené clair, 75018 paris')).toEqual([JoursMax]);
    });

    it('should get all shooting locations from a movie title sorted by locationid', () => {

        location.addShootingLocation(CigareAuMielCOPIE);
        location.addShootingLocation(CigareAuMiel);
        location.addShootingLocation(JoursMax);

        expect(location.getShootingLocationsFrom('CIGARE AU MIEL')).toEqual([CigareAuMiel,CigareAuMielCOPIE]);
    });

    it('should return the number of locations', () => {
        location.addShootingLocation(CigareAuMiel);
        location.addShootingLocation(JoursMax);

        expect(location.getTotalNumberOfLocations()).toEqual(2);
    });

    it('should remove a shooting location', () => {
        location.addShootingLocation(CigareAuMiel);
        location.addShootingLocation(CigareAuMielCOPIE);
        location.addShootingLocation(JoursMax);

        // Removing CigareAuMielCOPIE
        location.removeShootingLocation('2019-1713');

        expect(location.getAllShootingLocations()).toEqual([JoursMax,CigareAuMiel]);
    });

    it('should not allow two identical locations (same id) to be added', () => {
        location.addShootingLocation(CigareAuMiel);
        location.addShootingLocation(JoursMax);
        location.addShootingLocation(CigareAuMiel);

        expect(location.getAllShootingLocations()).toEqual([JoursMax,CigareAuMiel]);
    });

    /*
    it('should create a location without adding it to favourites', () => {
        location.addShootingLocation(CigareAuMiel);
        expect(location.isFavourite('2019-1712')).toEqual(false);
    });

    it('should add a location to favourites', () => {
        location.addShootingLocation(CigareAuMiel);
        location.addToFavourite('2019-1712');
        expect(location.isFavourite('2019-1712')).toEqual(true);
    });

    it('should remove a location from favourites', () => {
        location.addShootingLocation(CigareAuMiel);
        location.addToFavourite('2019-1712');
        location.removeFromFavourite('2019-1712');
        expect(location.isFavourite('2019-1712')).toEqual(false);
    });
     */
});
