import {ShootingLocationList} from "./ShootingLocationList";

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
    };

    let location: ShootingLocationList;

    beforeEach(() => {
        location = new ShootingLocationList();
    });

    it('should store a location', () => {
        location.addShootingLocation(CigareAuMiel);

        expect(location.getShootingLocation('2019-1712')).toEqual(CigareAuMiel);
    });

    it('should return all locations sorted by title {ASC}', () => {
        location.addShootingLocation(CigareAuMiel);
        location.addShootingLocation(JoursMax);

        expect(location.getAllShootingLocations()).toEqual([
            CigareAuMiel,
            JoursMax
        ]);
    });

    it('should return the number of locations', () => {
        location.addShootingLocation(CigareAuMiel);
        location.addShootingLocation(JoursMax);

        expect(location.getTotalNumberOfLocations()).toEqual(2);
    });
});
