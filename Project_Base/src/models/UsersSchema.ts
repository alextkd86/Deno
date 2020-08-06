/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
export interface UserSchema {
    _id: { $oid: string };
    name: string;
    age: number;
}