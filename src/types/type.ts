
export interface InputType {
type?:'text'|'email'|'password'|'url'|'file'|'tel'|'number';
value:string;
onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void;
label:string
className?:string
ref: React.Ref<HTMLInputElement>;
}

export interface CardType {
    // find(arg0: (pro: any) => boolean): unknown;
    img:string,
    title:string,
    price:number,
    id?:number,
    evo?:string,
    smdes:string,
    type?:string,
    imges?:string[]
    inCart?:boolean,
    className?:string

}

export interface SwiperType{
    children:React.ReactNode
}
export type ItemType = {
    id:number,
    title:string,
    smdes:string,
    price:number,
    xldes:string,
    quntty:number,
    type:string,
    imges:string[],
    inCart:boolean,
}