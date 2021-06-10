# Free Tailwind landing page template

**Simple Light** is a free landing page template built on top of **TailwindCSS** and fully coded in **React**. Simple light is designed to provide all the basic components a developer need to create a landing page for SaaS products, online services, and more.

## Usage

```bash
git clone https://github.com/vincentcheny/tailwind-landing-page-template.git
npm install # To install the dependencies package
npm start # Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.
```

## Edit

The site consists of 5 major components, and each component can be edited in the `.js`file with corresponding name in `src/partials/`.

## Publish

1. Run the following command to build an app for production to the `build` folder.

   ```bash
   npm run build
   ```

2. Rename `build` to `docs`.
3. Replace the `docs` folder in [Everest](https://github.com/everest-project/everest) with it.
4. Commit and push to Everest.