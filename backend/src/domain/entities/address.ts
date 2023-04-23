import { isNullOrEmpty } from "../../uteis/stringUtil"
import InvalidArgumentException from "../exceptions/invalidArgumentException";

export class Address {

     constructor(city: string, state: string) {

        if (isNullOrEmpty(city)){
            throw new InvalidArgumentException("city not informed");
        }

        if (isNullOrEmpty(state)){
         throw new InvalidArgumentException("state not informed");
     }

        this.city = city;
        this.state = state;
     }   

    city: string;
    state: string;
}