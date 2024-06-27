import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import axios from "axios";

export default {   
    providers: [
        Credentials({
            async authorize(credentials) {
                const validateFields = LoginSchema.safeParse(credentials);

                if (validateFields.success) {
                    const config = {
                        headers: {
                          "Content-Type": "application/json",
                          "Accept": "application/json"
                        }
                    };    
                  
                    const url = `${process.env.NEXT_PUBLIC_API_URL}login`;

                    try {
                        const { data } = await axios.post(url, validateFields.data, config);

                        const res = {
                            id: 'clxp8rz6a00004x26lmnd3129',
                            name: 'jhon.doe',
                            email: "jhon.dow@example.com",
                            image: data.access_token
                          };

                          return res;
    

                    } catch (error) {
                        console.log(error);
                        return null;
                    }                        
                }

                return null;
            }
        })
    ] } satisfies NextAuthConfig