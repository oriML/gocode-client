export const server = import.meta.env.NODE_ENV === 'production' ? import.meta.env.VITE_APP_PROD : import.meta.env.VITE_APP_DEV;
console.log(import.meta.env.NODE_ENV)
