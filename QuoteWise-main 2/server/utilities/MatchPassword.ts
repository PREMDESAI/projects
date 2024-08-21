import bcrypt from 'bcrypt';

const matchPassword = async function (password: string, toCompare: string): Promise<boolean> {
    return await bcrypt.compare(password, toCompare);
};

export default matchPassword;