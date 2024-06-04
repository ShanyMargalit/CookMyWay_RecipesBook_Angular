export interface Recipe {
    name:string,
    level:number,
    favorite:boolean,
    ingredients:string[],
    instructions:string[],
    img?:string;
}
