# Octo Energy
This application is a simple e-commerce application where users can view a product catalogue, see product details, add products to the cart, wiew and manage their cart and proceed to the checkout page.
This project is a simple React app built with Next.js and TypeScript, consume a mock GraphQL API, and pass the included front-end tests.

## Deployed on Vercel
URL: https://octo-demo.vercel.app/

## Features
- Responsive product catalogue and details pages
- Cart functionality with quantity controls
- Checkout page for reviewing cart items
- TypeScript typings for components and API responses
- Basic test coverage for product and cart interactions

## Project Structure
- `/client/pages` - Next.js pages (catalogue, product details, cart)
- `/client/components` - Reusable React components
- `/client/context` - React context for cart state
- `/client/services` - API service functions
- `/client/styles` - Sass styles and Bootstrap overrides
- `/client/types` - TypeScript types

## Pages
- Product Details: `/products/1`, `/products/2`, `/products/3`
- Cart: `/cart`
  

## Getting Started

### Install dependencies

```bash
cd client
yarn
```

### Start the development server

```bash
yarn dev
```

This will:
- Start the Next.js app at [http://localhost:3000](http://localhost:3000)
- Start the GraphQL stub server at [http://localhost:3001/graphql](http://localhost:3001/graphql)

### Running Tests
From the `client` directory, run:

```bash
yarn test
```

## Improvements
- Product can be further broken down into modular components - ProductInfo, QtyComponent and so on
- Props-types checking can be added to components to prevent type errors
- Improve error handling with custom pages and error boundaries
- Add end-to-end tests (Cypress, Playwright)
- Increase test coverage and improve styling
- Enhance accessibility with ARIA attributes
- Typescript can be introduced as it provides typing checking and compile type errors

# HTTP Service:
- productService - This service is used to get all products.
- httpService - generic error handling logic for API failures.
- logService - purpose is logging and can be intergrated with logging service in future.
