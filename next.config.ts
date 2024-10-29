import type { NextConfig } from "next";
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do .env

const nextConfig: NextConfig = {
    env: {
        NEXT_SECRET_KEY: process.env.NEXT_SECRET_KEY,
        API_URL: process.env.API_URL,
    },
    // Outras opções de configuração aqui
};

export default nextConfig;

