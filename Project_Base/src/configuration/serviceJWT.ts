/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
import { validateJwt, parseAndDecode, validateJwtObject } from "./../../dependences.ts";
import { makeJwt, setExpiration, Jose, Payload } from "./../../dependences.ts";

const key = "your-secret";
const header: Jose = {
    alg: "HS256",
    typ: "JWT",
  };

  /**
   * Create token
   * @param user 
   */
export const createToken = (user: any) => {
    //const json = JSON.stringify(user);
    const payload: Payload = {
        //uid: user,
        sub: user, 
        iat: Date.now(), 
        exp: setExpiration(new Date().getTime() + 60000 * 60),
      };
      return makeJwt({ header, payload, key });
}

/**
 * Token Validation
 * @param token 
 */
export const validateToken = async (jwt: string) => {
    return !!await validateJwt({ jwt, key, algorithm: "HS256" });
}

/**
 * Decode token
 * @param token 
 */
export const fetchUser = (token: string) => {
      return validateJwtObject(parseAndDecode(token)).payload;
}