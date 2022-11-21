export interface APIShootingLocation{
    id_lieu: string
    annee_tournage: Date
    type_tournage: string
    nom_tournage: string
    nom_realisateur: string
    nom_producteur: string
    adresse_lieu: string
    ardt_lieu: string
    date_debut: Date
    date_fin: Date
    coord_x: number
    coord_y: number
    geo_shape: Object
    geo_point_2d: Array<number>
}