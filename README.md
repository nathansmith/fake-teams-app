# Fake Teams app

➡️ Demo here:

https://capstone.sonspring.com

![Fake Teams app](./assets/readme/fake-teams-app.webp)

I created this project as a demo for my [MA in Interaction Design](https://cvad.unt.edu/design/design-ma-in-ixd.html) at the [University of North Texas](https://unt.edu/). My capstone was entitled _Teams for Home "Mass Niche"_ and focused on a hypothetical scenario in which the [consumer version](https://microsoft.com/en-us/microsoft-teams/teams-for-home) of Teams had plugins.

I built this using a few core technologies.

- [Panda CSS](https://panda-css.com/)
- [Solid JS](https://solidjs.com/)
- [TypeScript](https://typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Vitest](https://vitest.dev/)

## Setup

To spin up the project, clone this repo and then type the following command. After which, a few Git hooks will create a Panda CSS `/styled-system` directory and everything should be ready to go.

```bash
npm install
```

## Local dev

To run the app locally, type this command.

```bash
npm start
```

The app should now be viewable at this address.

http://localhost:5173

If you want to expose the Vite server to the local network you can do this instead.

```bash
npm run start-host
```

In the terminal, you will see which local IP address to use. It will also still be available at the `localhost` URL above.

## Testing

I know this is just a demo, but I figured it would be worth showing how to create unit tests in a Solid JS project. I was close enough to 100% that I decided to just finish it out.

To run the unit tests, type this command.

```bash
npm run vitest
```

To run tests and generate a code coverage report, type this command. That will create a `/coverage/index.html` file at the root.

```bash
npm run vitest-coverage
```

## Build & preview

To build the project, type this command. That will generate production code in a `/dist` directory at the root.

```bash
npm run build
```

To preview the built version, type this command.

```bash
npm run preview
```

The app should now be viewable at this address.

http://localhost:4173

If you want to expose the Vite server to the local network you can do this instead.

```bash
npm run preview-host
```

In the terminal, you will see which local IP address to use. It will also still be available at the `localhost` URL above.
