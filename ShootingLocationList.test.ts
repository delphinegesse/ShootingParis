import {ShootingLocation} from "./ShootingLocation";
import {ShootingLocationList} from "./ShootingLocationList";

describe('ShootingLocationList', () => {
    const theLordOfTheRings: ShootingLocation = {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        date: '1954-02-15',
    };

    let location: ShootingLocationList;

    beforeEach(() => {
        location = new ShootingLocationList();
    });

    it('should store a book', () => {
        bookshelf.addShootingLocation(aLaRechercheDuTempsPerdu);

        expect(bookshelf.getShootingLocation('À la recherche du temps perdu')).toEqual(
            aLaRechercheDuTempsPerdu,
        );
    });

    it('should return all books ordered by `title` (ASC)', () => {
        bookshelf.addShootingLocation(theLordOfTheRings);
        bookshelf.addShootingLocation(theHobbit);
        bookshelf.addShootingLocation(hamlet);

        expect(bookshelf.getAllShootingLocations()).toEqual([
            hamlet,
            theHobbit,
            theLordOfTheRings,
        ]);
    });
});
