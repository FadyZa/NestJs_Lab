import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
    provide: 'CLOUDINARY',
    useFactory: () => {
        return cloudinary.config({
            cloud_name: "ddoniqytm",
            api_key: "862491472187771",
            api_secret: "iC5qjVEjYALHKwWHEsPqtK98U5w",
        });
    },
};