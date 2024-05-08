# PZ Cheeseria

## Overview

This repository contains the code for the coding challenge. The backend will automatically create the first 5 cheeses upon start up. Click on the cheese you are interested in and the price calculator will popup. Login as Admin using `admin` and `password` to create, update and delete cheeses.

## Tech Stack

-   **Frontend:** React.js
-   **Backend:** Express.js
-   **Database:** SQLite with Sequelize
-   **Other:** Docker, Bootstrap, Swagger

## Summary of Improvements if I Had More Time

-   **State Management Optimization:** Consider creating an initial state object or breaking down state into smaller components for better manageability and scalability.
-   **Component Refinement:** Further refine components and their relationships through better planning to ensure efficient data flow and component design.
-   **Modal Refinement:** Explore alternative modal designs such as off-canvas components triggered by floating side buttons to enhance user interaction and allow for multiple cheese selection and price calculation.
-   **Data Enrichment:** Expand the cheese data model to include additional details like description, country of origin, and common recipes, enabling the transformation of the application into a multipage one.
-   **User Experience Enhancement:** Improve user experience by reducing reliance on modals and providing users with comprehensive cheese information on separate pages, enhancing exploration and engagement.
-   **Feature Expansion:** Introduce features like search, filtering, and sorting based on enriched cheese data, further enhancing usability and functionality.
-   **API Key Protection:** Techniques such as environment variables, server-side authentication, or token-based authentication could be explored to securely manage and utilize the API key, ensuring its confidentiality and integrity.

## Run Instructions

### Locally

1. Have Node v20.10.0 installed.
2. Clone the repository to your local machine.
3. Navigate to the project directories `cheeseria-backend` and `cheeseria-frontend/my-app`.
4. Install dependencies using `npm install` for both frontend and backend.
5. Start the front-end with `npm start`
6. Start the back-end with `node app.js` after navigating to `cheeseria-backend/src`.
7. Access the application in your web browser at the specified URL.
