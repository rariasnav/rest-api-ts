import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/users";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUSer = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) return "User already exists";

    const passwordHash = await encrypt(password);
    const registerNewUSer = await UserModel.create({
        email, 
        password: passwordHash,
        name,
    });
    return registerNewUSer;
};

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) return "User not found";

    const passwordHash = checkIs.password;

    const isCorrect = await verified(password, passwordHash);
    if (!isCorrect) return "Wrong password"

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs,
    }

    return data;
};

export { registerNewUSer, loginUser };