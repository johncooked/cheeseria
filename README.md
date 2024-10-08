# PZ Cheeseria

## Overview

This repository hosts the code for the coding challenge. Upon startup, the backend will automatically generate the initial five cheese entries without images. Simply click on a cheese to activate the price calculator. For administrative access, log in as `admin` with the password `password` to manage cheese entries – create, update, or delete them. 

## Tech Stack

-   **Frontend:** React.js
-   **Backend:** Express.js
-   **Database:** SQLite with Sequelize
-   **Other:** Docker, Bootstrap, Swagger

## Summary of Improvements if I Had More Time

-   **State Management Optimization:** Consider creating an initial state object or breaking down the state into smaller components for better manageability and scalability.
-   **Component Refinement:** Further refine components and their relationships through better planning to ensure efficient data flow and component design.
-   **Modal Refinement:** Explore alternative modal designs such as off-canvas components triggered by floating side buttons to enhance user interaction and allow for multiple cheese selections and price calculation.
-   **Data Enrichment:** Expand the cheese data model to include additional details like description, country of origin, and common recipes, enabling the transformation of the application into a multi-page one.
-   **User Experience Enhancement:** Improve user experience by reducing reliance on modals and providing users with comprehensive cheese information on separate pages, enhancing exploration and engagement.
-   **Feature Expansion:** Introduce features like search, filtering, and sorting based on enriched cheese data, further enhancing usability and functionality.
-   **API Key Protection:** Techniques such as environment variables, server-side authentication, or token-based authentication could be explored to securely manage and utilize the API key, ensuring its confidentiality and integrity.

## Run Instructions

### Dev environment

1. Have Node v20.10.0 installed.
2. Clone the repository to your local machine.
3. Navigate to the project directories `cheeseria-backend` and `cheeseria-frontend/my-app`.
4. Install dependencies using `npm install` for both frontend and backend.
5. Start the backend with `node app.js` after navigating to `cheeseria-backend/src`.
6. Start the frontend with `npm start`.
7. Access the application in your web browser at the specified URL.

### Docker
1. Have Docker installed.
2. Clone the repository to your local machine.
3. Navigate to the directory with the Dockerfile.
4. Build the image with `docker build -t <image_name:version> <directory_of_dockerfile>`.
  -   For example, "`docker build -t cheeseria_image:latest .`".
6. You can check if the image was built successfully with `docker images`.
8. Start the container with `docker run -p 4000:4000 --name <container_name> <image_name:version>`
  -   For example, "`docker run -p 4000:4000 --name cheeseria cheeseria_image:latest`".
NOTE: You must specify the port otherwise you will not be able to access the static page.

### Links
-  **Webpage Link:** http://localhost:4000
-  **Swagger Link:** http://localhost:4000/docs
