# Frontend (React)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

If you want to deploy the Frontend in Firebase, you must run the following command in the amazon-clone folder: "firebase init" and select the Hosting option and follow the steps to make a correct configuration.

Then run the command: "npm run build && firebase deploy --only hosting", the console will show a URL where the site will be hosted.

# Backend (Express - Firebase cloud functions)

Once the project is configured in your Firebase account, you must run the following command in the location of the functions folder: "firebase emulators:start" and this command will start the functions in development mode for testing.

To deploy the functions in the Cloud you must execute the following command in the location of the functions folder: "firebase deploy --only functions", you must bear in mind that you must change the plan of your account from "Spark" to "Blaze", otherwise you will get an error in the terminal when you use the command.
