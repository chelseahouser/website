# Website

## Description
This is a personal website to check out how building a site with Firebase works. I intend to use this site for demonstrating my portfolio as well as building up a blog with articles based on my experience and neat technologies I have worked on.

## Technologies
This website is using the following technologies:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

## Architecture
The website consists of two apps(UI and API). The UI is a standard react app with firebase hosting. It is mostly a single-page app, however, I chose to create the blog as separate pages for ease of linking articles. The API is a firebase functions app built with express.js with access to a Cloud Firestore for data storage and backend management. Although this application is likely constant enough to simply store most of my data in the UI, having most of my data models stored in a database allows me to make updates such as changing up what books I am reading without re-deploying.

## Running Locally
 - Remember to install the necessary node modules with `npm install`.
 - To run the API, navigate to `/api` and run `firebase serve`. Your API will be served at http://localhost:3001/api/.
 - To run the UI, navigate to `/website` and run `npm start`. The UI will be served at http://localhost:3000/.

## Deployment
 - To deploy the API to firebase, navigate to `/api` and run `firebase deploy`.
 - To deploy the UI to firebase, navigate to `/website` and run `npm run build` and `firebase deploy`.

## Testing
 - To run test ensure the application is running locally.
 - In a seperate terminal navigate to the `/website` folder and run `npm run cypress:open`. This will instantiate the cypress app and allow you to choose tests to run and browsers to run agains.


## Additional Details/Notes
Theme:
 - Primary: #08686e
 - Secondary: #9cc2c5
 - Links:#08356e
 - Highlight:#6e0e08
 - Error:   #6e0e08
 - Success: #086e41
 - Warning: #686e08