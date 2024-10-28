export interface CustomCardProp{
    customStyles?:{
        margin?:number,
        padding?:number,
        backgroundColor?:string,
        elevation?:number,
        width?:number,
        height?:number,
    }
    children: ReactNode;
}