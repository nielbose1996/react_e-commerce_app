Simple E-commerce Application

This is a simple e-commerce application built with React JS, Material UI, and Redux. The application allows users to browse products, view product details, add items to a shopping cart, and view their cart. The cart data persists even after a page refresh.

Features

Product List Page:
Displays a list of products with basic details such as title, image, price, and description.
Each product has an "Add to Cart" button.

Product Details Page:
Users can navigate to a product details page when they click on "View Details" button.
Displays additional information about the product and includes an "Add to Cart" button.

Shopping Cart:
Users can view the items in their cart.
Displays the total cost of items in the cart.

Persistent Cart:
The cart data persists even if the user refreshes the page.
State management is implemented using Redux and LocalStorage.

Installation

Clone the Repository:
git clone <https://github.com/nielbose1996/react_e-commerce_app>

Navigate to the Project Directory:
cd <react_e-commerce_app>

Install Dependencies:
npm install

Usage

Build the Project:
npm run build

Start the Development Server:
npm start.

The application will be available at http://localhost:8080.

API Data
Due to issues with the API endpoint, product data is included in the project as a local JSON file. The application reads data from this file instead of making API calls.

File Structure
src/: Contains all the source code for the application.
components/: React components for different parts of the application.
redux/: Redux-related files including actions, reducers, and store configuration.
data/: Contains product details from the FakeHub API.

Technologies Used
React JS
Material UI
Redux
Webpack

Contributing
Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.

Contact
For any questions or feedback, please contact Prodipta Bose at nielbose1996@gmail.com.
