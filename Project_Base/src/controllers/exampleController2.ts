/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
import { Response, Request, Body, Context } from "https://deno.land/x/oak/mod.ts";
import { log, Collection } from './../../dependences.ts';

import * as db from './../configuration/configDataBase.ts';
import { UserSchema } from "../models/UsersSchema.ts";
import { UserDto } from "../dto/UserDto.ts";
import * as token from "./../configuration/serviceJWT.ts";

export class exampleController {
    public users: Collection<UserSchema> = db.default.collection<UserSchema>("usersModel");

    constructor() {
        log.info("Here we go");
    }

    public getUsersMongo = async ({response}: {response: Response}) => {
        response.status = 200;
        const users = await db.default.collection<UserSchema>("usersModel").find();
        const arrUserModel: UserDto[] = [];
        users.forEach(usr => {
          const usersM: UserDto = new UserDto();
          usersM.set_Id(usr._id);
          usersM.setName(usr.name);
          usersM.setAge(usr.age);
          usersM.setSign(`Extra field is not save in DDBB, but it is contain in DTO Object - ${usr.name} - ${usr.age}`);
          arrUserModel.push(usersM);
        });

        //Test Token
        const user1: UserDto = arrUserModel[0];
        let tokenAux = await token.createToken(user1);
        log.info(tokenAux);
        let validate = await token.validateToken(tokenAux);
        log.info(validate);
        let userBack = await token.fetchUser(tokenAux);
        log.info(userBack?.sub);
        response.body = userBack?.sub;
      }
      
      public setUserMongo = async ({request, response}: {request: Request, response: Response}) => {
        const users = db.default.collection<UserSchema>("usersModel");
        const body: UserDto = await request.body().value;
        console.log(body.name);
        users.insertOne( body );
        response.status = 200;
        response.body = body;
      }

      
    public getExample = ({response}: {response: Response}) => {
        response.status = 200;
        response.body = {"message": "Prueba"};
    }
  
  public setExample = async ({request, response}: {request: Request, response: Response}) => {
    const users = db.default.collection("exampleCollection");
    const body = await request.body().value;
    console.log(body.name);
    users.insertOne({ name: body.name });
    response.status = 200;
    response.body = body;
  }
  
}