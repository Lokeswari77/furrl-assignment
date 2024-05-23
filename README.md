Furrl Home Hunts - Mobile Page Rebuild
-----------------------------------------------------------------------------------------------------------------------------------------
Overview
-----------------------------
This project involves rebuilding the HomeHunts page from Furrl's mobile website using React. The page includes a top navigation bar, a product list with infinite scrolling, and clickable product items that redirect to their respective detail pages. The share button opens a generic share component with the product detail page link.

Features
-----------------------------------------------------------
Top Navigation Bar
Wishlist button redirects to Furrl Wishlist.
Cart button redirects to Furrl Cart.

Product List
Infinite scrolling: Initial products load on page load, and more products load as the user scrolls.
Clickable products: Redirect to the corresponding product details page.
Share button: Opens a generic share component with the product detail page link.

Technical Requirements
--------------------------------
Framework: React.js
APIs: Utilize Furrl's production API for fetching products.

Getting Started
-------------------------------------
Prerequisites
Node.js (v20.12.2 or later)
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
