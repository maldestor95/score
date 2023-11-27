// english rules
// https://pegasus.de/media/pdf/ff/1e/56/4250231735486_EN.pdf

export enum tileNameEnum {
    ForestCabin = <any>"Cabane dans le bois",
    HarvestFestival = <any>"Fête des moissons",
    WatchTower = <any>"Tour de Guet",
    Locomotive = <any>"Locomotive",
    Ship = <any>"Bateaux",
    TrainStation = <any>"TrainStation",
    Harbor = <any>"Harbor",
    RedHearts = <any>"RedHearts",
    Circus = <any>"Circus",
    SignalMan = <any>"Signalisation ferroviaire",
    Sheperdess = <any>"Sheperdess",
    Hill = <any>"Hill",
    ConstructionSite = <any>"ConstructionSite",
    BalloonLauch = <any>"BalloonLauch",
    GoldenHearts = <any>"GoldenHearts"
}
export const rules: { [key: string]: string } = {
    "Cabane dans le bois": `Les Tâches dans la forêt sont doublées`,
    "Fête des moissons": `Les Tâches moissons sont doublées`,
    "Tour de Guet": `Les Tâches villages sont doublées`,
    "Locomotive": `Les Tâches voies ferrées sont doublées`,
    "Bateaux": `Les Tâches sur la rivière sont doublées`,
    TrainStation: ``,
    Harbor: ``,
    RedHearts: ``,
    Circus: ``,
    "Signalisation ferroviaire": `Les Croisements  rivière/voies ferrées valent 2 points`,
    Sheperdess: ``,
    Hill: ``,
    ConstructionSite: ``,
    BalloonLauch: ``,
    GoldenHearts: ``
}
export const tilePosition = {
    ForestCabin: "547, 5, 270, 235, 0, 0, 250, 250"
}