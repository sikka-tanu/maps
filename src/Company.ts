import faker from 'faker';
import { Mappable } from './CustomMap';

//in typescript, 'implements Mappable' is totally optional. It's only added so that we can see the error in this class when it doesn't satisfy the interface conditions
export class Company implements Mappable{

    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    color: string = 'green';
    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string{
        return `
        <div>
            <h1>Company Name: ${this.companyName}</h1>
            <h3>CatchPharse: ${this.catchPhrase}</h3>
        </div>
        `;
    }
}