Podcast Playlist Project
This project is a template for a playlist of podcasts and audiobooks, built with Next.js. It includes features like user authentication, form validation, server-side rendering, dynamic content, and state management.

Table of Contents
Prerequisites
Getting Started

1. Clone the Repository
2. Navigate to the Project Directory
3. Install Dependencies
4. Set up NextAuth.js Security
5. Run the Development Server
6. View the Application
   Project Functional Description
   Packages Used
   Prerequisites
   Ensure you have the following installed on your machine:

Node.js: Download and install from https://nodejs.org (Recommended version: v18.x or later)
npm: Node Package Manager (Comes with Node.js) or use Yarn if preferred.
Git: [Optional] To clone the repository.
Getting Started
Follow these steps to set up and run the project locally:

1. Clone the Repository
   If you haven't already cloned the project, use the following command:

git clone https://github.com/Mohammadreza-rzz/podcast-playlist.git

2. Navigate to the Project Directory
   Change directory to the project folder:

cd podcast-playlist

3. Install Dependencies
   Install all the required project dependencies using npm (or yarn if you prefer):

npm install

4. Set up NextAuth.js Security
   Since the project uses version 5 of NextAuth.js, you need to configure the security settings by setting up an authentication secret.

To do this, go to the root of the project and create a file named .env.local. Inside that file, add the following content:

NEXTAUTH_SECRET="nttDGJXQ4/TCSKcPtwoU5XFOVBEzIm++aRlKZlLWhxI="

You can generate a secure, random secret using:

npx next-auth secret

5. Run the Development Server
   After the installation completes, you can start the development server by running:

npm run dev

6. View the Application
   Once the development server is running, open your browser and navigate to:

http://localhost:3000

The app will automatically reload if you make any code edits.

Project Functional Description
This project is a template for a playlist of podcasts and audiobooks.

Authentication: Initially, authentication is required to access the application. You will be redirected to the login page if you attempt to access any other route without logging in. After logging in, you are redirected to the home page.

Login credentials:
Username: emilys
Password: emilyspass
Home Page: After login, you are redirected to /home, which shows a default view populated with mock data.

Podcasts and Books:

From the side menu, you can navigate to the Podcasts page (/home/podcast). Clicking on any podcast card opens a modal that plays the corresponding podcast.
You can also navigate to the Books page (/home/books). Here, book data is fetched from the server, and clicking on a book takes you to the book's details page, where information is displayed based on its ID.
Server-Side Rendering (SSR): Both the Podcasts and Books pages are implemented dynamically using server-side rendering (SSR) to ensure performance and SEO optimization.

Packages Used
NextAuth.js: Used for authentication. Middleware is used to manage routes and control access based on authentication status. The routes file in the root directory defines public and private routes.

React Hook Form and Yup: These libraries handle form validation. Validation schemas are defined in the validation folder.

Framer Motion: Used for animations throughout the application. Animation objects are defined in the util/animations folder.

Redux Toolkit: Used for state management across the application. Related configurations and files can be found in the store folder.
