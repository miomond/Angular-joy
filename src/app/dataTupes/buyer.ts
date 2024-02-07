export class Product{
    ID : string;
    Img: string;
    Name:string;
    ProductList:string[];
    ICategory:string[];
    ClientName:string;
    constructor(id:string,img:string, name:string,  productList:string[],Icategory:string[] , clientname:string){
        this.ID = id ;
        this.Img=img;
        this.Name = name;
        this.ProductList = productList;
        this.ICategory = Icategory;
        this.ClientName= clientname;
    }
}