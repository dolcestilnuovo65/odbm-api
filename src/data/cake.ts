import RemoteData from '../lib/backbone';
import Backbone from 'backbone';
import { IRemoteDataFactory } from '../lib/backbone';



export class Cake extends RemoteData{

    
    constructor(id:any, public Title:string='',public recipt:string='',public Poster='',public num:string,public price,public dateMade:Date){
        super(id);
    }
}


export class CakeFactory implements IRemoteDataFactory {
    newObject(): Cake {
        return new Cake(-1,'', '','','','',new Date());
    }
}
Backbone.emulateJSON = true;