type player = 'noob' | 'pro' | 'ninja'

export interface userInterface {
    id:string,
    name:string,
    apellidos:string,
    edad:number,
    sessions_max:number,
    typePlayer: player,
}