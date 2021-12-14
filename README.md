<div align="center">
  <h1>GitHub Issues Search</h1>
</div>

## How to use

- Type the organization/owner name on the first field.
- Type the repository name on the second field.
- Click on 'Search for issues' button.
- See the issues available for the given org/repo.
- Sort the issues by using the dropdown on the right.
- Paginate through the results using the links on the bottom.
- You can check when an issue is a Pull Request by the blue badge present on the issue.


## Functional requirements

- User should be able to input GitHub organization and repository and fetch issues from it
- Pagination is used to navigate between pages
- User should be able to sort issues


## Technical requirements

- State and view of the app are separated
- Static types
- Code of the app adheres to the best industry practices
- App is well tested
- Minimum required documentation is provided
- Source code is presented on GitHub


## Insights

### GitHub Rest API

Sorting issues:
`sort` options: 'created', 'updated', 'comments'
`direction` options: 'asc', 'desc'

Then to sort just like the dropdown on github website:
- Newest: sort:created, direction:desc
- Oldest: sort:created, direction:asc
- Most commented: sort:comments, direction:desc
- Least commented: sort:comments, direction:asc
- Recently updated: sort:updated, direction:desc
- Least recently updated: sort:updated, direction:asc

### Pagination

- Default number of items: 25
- Get the number of pages from `headers.get('link')`


## Setup

Clone this repository and then install the dependencies with `npm install`.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Libs
- react-paginate
- react-query
- react-select
