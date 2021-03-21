import RemoteData from '../lib/backbone';
import Backbone from 'backbone';
import { IRemoteDataFactory } from '../lib/backbone';



export class Cake extends RemoteData{

    
    constructor(id, public Title:string='',public recipt:string='',public Poster=''){
        super(id);
    }
}


export class CakeFactory implements IRemoteDataFactory {
    newObject(): Cake {
        return new Cake(-1,'', '');
    }
}
Backbone.emulateJSON = true;