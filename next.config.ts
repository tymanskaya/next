import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.magnific.com", // Замените на домен, которому доверяете
                pathname: "/assets/**", // Разрешает все изображения из папки /assets
            },
        ],
    },
};

export default nextConfig;
