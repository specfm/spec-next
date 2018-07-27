# Spec.fm Next
The code that powers [spec.fm](https://spec.fm).

## Development
Clone the repository:
`git clone git@github.com:specfm/spec-next.git`

`cd` into the directory:
`cd spec-next`

Install dependencies for the web and api:
`yarn && cd api && yarn && cd ../`

Start the api:
`yarn run dev:api`

In another terminal window, start the client:
`yarn run dev:web`

Open the site:
`localhost:3000`

To run cypress tests:
`yarn run cypress:open`