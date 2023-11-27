// english rules
// https://pegasus.de/media/pdf/ff/1e/56/4250231735486_EN.pdf

export enum tileNameEnum {
    ForestCabin = <any>"Cabane dans le bois",
    HarvestFestival = <any>"Fête des moissons",
    WatchTower = <any>"Tour de Guet",
    Locomotive = <any>"Locomotive",
    Ship = <any>"Bateaux",
    TrainStation = <any>"Gare",
    Harbor = <any>"Port",
    RedHearts = <any>"Coeurs rouges",
    Circus = <any>"Cirque",
    SignalMan = <any>"Signalisation ferroviaire",
    Sheperdess = <any>"Bergère",
    Hill = <any>"Colline",
    ConstructionSite = <any>"ConstructionSite",
    BalloonLauch = <any>"BalloonLauch",
    GoldenHearts = <any>"GoldenHearts"
}
export const rules: { [key: string]: string } = {
    "Cabane dans le bois": `Ajouter les points des tâches accomplies dans la forêt où se trouve la cabane`,
    "Fête des moissons": `Ajouter les points des tâches accomplies où se trouve `,
    "Tour de Guet": `Ajouter les points des tâches accomplies du village où se trouve la tour de guet`,
    "Locomotive": `Ajouter les points des tâches accomplies sur la voie ferrée où se trouve la locomotive `,
    "Bateaux": `Ajouter les points des tâches accomplies sur le fleuve où se trouve les bateaux `,
    "Gare": ``,
    "Port": ``,
    "Coeurs rouges": `vous pouvez placer un coeur sur une tuile qui n'est pas une tuile speciale ou un tuile tâche. En fin de partie, on compte 1 point par tuile voisine avec le décor correspondant`,
    "Cirque": `10 points si entièrement entouré`,
    "Signalisation ferroviaire": `En fin de partie, la signalisation ferroviaire donne 2 points pour chaque passage à niveau qui lui est relié`,
    "Bergère": `La bergère donne 1 point par mouton qui lui est connecté.Les moutons sont considérés comme connectés si ils sont sur un tuile adjacente à la bergère ou adjacente à une autre tuile où il y a des moutons.`,
    "Colline": `En fin de partie, la colline rapporte 2 points par tuile ordre à moins de 2 tuile d'elle.`,
    ConstructionSite: ``,
    BalloonLauch: ``,
    GoldenHearts: ``
}
export const tilePosition = {
    ForestCabin: "547, 5, 270, 235, 0, 0, 250, 250"
}