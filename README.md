Furrl Home Hunts - Mobile Page Rebuild
-----------------------------------------------------------------------------------------------------------------------------------------
Overview
-----------------------------
This project involves rebuilding the HomeHunts page from Furrl's mobile website using React. The page includes a top navigation bar, a product list with infinite scrolling, and clickable product items that redirect to their respective detail pages. The share button opens a generic share component with the product detail page link.

Features
----------------------------------------------
Fetches and displays products from an external API.
Allows users to filter products based on categories.
Implements infinite scrolling to load more products.
Displays a loading spinner while data is being fetched.

Technical Requirements
--------------------------------
Framework: React.js

APIs: Utilize Furrl's production API for fetching products.

Getting Started
-------------------------------------
Prerequisites

Node.js (v20.12.2 or later) and
npm (v6.14.4 or later)

Installation
----------------
Clone the repository:

git clone https://github.com/Lokeswari77/furrl-assignment

cd furrl-assignment

Install dependencies:

npm install

Running the Application

Start the development server:

npm start

Main Components
-----------------------------------
Home.js: Contains the main logic for fetching and displaying products and filters.

Navbar.js: Navigation bar component.

CategoryFilters.js: Component for displaying category filters.

ProductList.js: Component for displaying individual product details.

Loader.js: Component for displaying a loading spinner.

Live Demo of the Project
--------------------------------
https://loki-furrl-assignment.onrender.com/
