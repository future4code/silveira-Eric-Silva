import * as bcrypt from "bcryptjs";

export default class GenerateHash{
    hash = (s: string):string => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = bcrypt.genSaltSync(rounds);
        const result = bcrypt.hashSync(s, salt);
        return result;
    }

    compare = (s: string, hash: string):boolean => {
        return bcrypt.compareSync(s, hash);
      }
}