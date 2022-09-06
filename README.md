<img src="https://static.octopuscdn.com/constantine/constantine.svg" alt="Octopus Energy mascot, Constantine" width="100" />

# Octopus Frontend code test

In this code test, you'll be asked to:

- Make a simple React app that follows the design in `design.jpg`, consumes the API and makes the front end tests pass. Ideally the app should be responsive.

We've included:

- A sample [Next.js](https://nextjs.org/) project with a Typescript setup for your convenience, but you're welcome to swap it out for another framework if you prefer
- Some CSS colour variables that match the colours in the design
- The assets that you will need to complete the design

You're also welcome to write more tests for other parts of the application - but design those however you like.

## Getting started

First you'll need to install your dependencies. We've used yarn, if you have another preference feel free to remove the lock file and use what you are comfortable with:

```
cd client && yarn
```

## Start the app

```
yarn dev
```

This will do two things:

- Start a Next.js app running in development on http://localhost:3000
- Start a graphQL stub server running on http://localhost:3001/graphql

## Running tests

You can run tests from the client directory.

```
cd client && yarn test
```

This should give you two failures:

```
FAIL test/product.test.js
    ✕ should be able to increase and decrease product quantity
    ✕ should be able to add items to the basket
```

The task is to build the app that passes these tests.

## What we're looking for

We would like you to demonstrate your ability to:

- Reason through a programming problem
- Implement a visual design
- Implement some user interactions
- Write code that is easy to understand and extend
- Write tests that document and safeguard the program's behaviour
- Use a version control system (e.g. git) to effectively convey intent
- Write Typescript typings for the components you create, and also the typings for the GraphQL API response

Notes:
- This has not been set up with and type of CSS-in-JS, but if that is something you would like to add, please feel free.

Best of luck!

## Improvements

- Increment and decrease quantity component can be added to cart page
- Error handling can be improved by adding custom pages and Error boundary
- End-to-End testing can be added using Cypress and Playwright framework
- Test Coverage & Styling can be improved
- Accessibility can be added with ARIA properties
- Use typescript, graphql, bootstrap, sass

## Note:

Data returned is null when trying to retrieve Product by Id or filter ID due to mock graphql issue

export const GET_PRODUCT_QUERY_BY_ID = gql`query getProducts($id: ID) { Product(id: $id) { fields } }`;

Using Primary key(pk) as unique key
