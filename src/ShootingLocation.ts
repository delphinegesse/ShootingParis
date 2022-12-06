interface ShootingLocation {
/**    locationId: string;
    shootingDate: Date;
    shootingType: string;
    title: string;
    director: string;
    producer: string;
    address: string;
    postalCode: string;
    geoLocation: Array<number>;
 //   favourite: boolean;
 **/

    coord_y: number
    type_tournage: string
    nom_producteur: string
    date_fin: Date
    geo_point_2d: Array<number>
    nom_tournage: string
    ardt_lieu: string
    geo_shape: Object
    id_lieu: string
    nom_realisateur: string
    adresse_lieu: string
    date_debut: Date
    annee_tournage: Date
    coord_x: number
    favourite: boolean;

}