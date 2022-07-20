import * as bcrypt from 'bcrypt'

export  const encodePassword = async (password:string) =>{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,salt)
    
}

export const comparePassword = async (password:string ,hash:string) => {
    return bcrypt.compareSync(password,hash)
}