/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
import { ObjectId } from "./../../dependences.ts";

export class UserDto {
     public _id: { $oid: string };
     public name: string;
     public age: number;
     public sign: string;

     /************************************************************************************************************
     ***********************************************  CONSTRUCTOR  ***********************************************
     ************************************************************************************************************/
    constructor() {
        this._id = { $oid: 'null' };
        this.name = '';
        this.age = 0;
        this.sign = '';
    }

    /************************************************************************************************************
    *********************************************  GETTERS/SETTERS  *********************************************
    ************************************************************************************************************/

    get_Id(): { $oid: string } {
        return this._id;
    }

    set_Id(_id: { $oid: string }) {
        this._id = _id;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number) {
        this.age = age;
    }

    getSign(): string {
        return this.sign;
    }

    setSign(sign: string) {
        this.sign = sign;
    }
 }