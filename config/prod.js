// prod google client id: 444325709194-6a5mp13st5b4tvuirno7mibjofne7ds5.apps.googleusercontent.com
// prod google secret: fGNCnJiJYFnAPhFWjqmACqUU
// prod mongo uri: mongodb+srv://admin_prod:ObkRbOLomTTpLqqy@emaily-prod-a9k7t.mongodb.net/test?retryWrites=true

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
};