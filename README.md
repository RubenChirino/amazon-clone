# Amazon Clone

## Home

![home](https://github.com/RubenChirino/amazon-clone/assets/52714843/25d42a20-d32a-470f-b2ab-aa28ad7a91a5)

## Sign In

<img width="1422" alt="Screenshot 2023-08-05 at 22 01 00" src="https://github.com/RubenChirino/amazon-clone/assets/52714843/23bdc86c-8855-485c-a5ce-26b81068ac46">

## Cart

![cart](https://github.com/RubenChirino/amazon-clone/assets/52714843/8601f273-041b-431b-80f5-fe379c94246e)

## Checkout 

![checkout](https://github.com/RubenChirino/amazon-clone/assets/52714843/62fa784e-df19-476c-baa3-55f201d8d7a5)

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
