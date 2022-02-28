/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig:{
    APP_NAME:'KANTAN',
    API_DEVELOPMENT:'http://localhost:8000/api',
    PRODUCTION:false
  },
  env:{
    API_URL:'http://localhost:8000',
    ENV:'development',
    APP_NAME:'KANTAN',
  }
}
