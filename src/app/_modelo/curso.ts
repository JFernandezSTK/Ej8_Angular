export class curso{
    private _id: number
    private _nombre: string
    private _duracion: number
    private _nivel: string

    constructor(id:number,nombre:string,duracion:number,nivel:string){
        this._id=id
        this._nombre=nombre
        this._duracion=duracion
        this._nivel=nivel
    }

    public get id(): number {
        return this._id
    }
    public set id(value: number) {
        this._id = value
    }

    public get nombre(): string {
        return this._nombre
    }
    public set nombre(value: string) {
        this._nombre = value
    }

    public get duracion(): number {
        return this._duracion
    }
    public set duracion(value: number) {
        this._duracion = value
    }

    public get nivel(): string {
        return this._nivel
    }
    public set nivel(value: string) {
        this._nivel = value
    }

}