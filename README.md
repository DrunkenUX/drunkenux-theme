# The Drunken UX Podcast
WordPress theme for drunkenux.com

## Development
Building the CSS and JS is managed via the WPGulp framework. [Reference their documentation](https://github.com/ahmadawais/WPGulp/blob/master/readme.md) for full instructions.

### Set up a local dev environment

1. Clone this repo to your computer
2. Set up a local WordPress environment (I recommend using [Local by Flywheel](https://localwp.com)) with the domain `drunkenux.local`
3. Install the UpdraftPlus plugin and activate it
4. Log into the Drunken UX backend at [https://drunkenux.com/wp-admin] and download the latest backup files of the site (at least the database, uploads, and plugins)
5. Upload and restore backup files to local environment
6. Using the phpMyAdmin link in Local, go to the `wp_options` table and fix the `homeurl` and `siteurl` values to match your local domain (probably `drunkenux.local` from step 2)
7. Symlink your repo directory to the themes directory of your local environment
8. Activate the new theme under Appearance in the local WordPress backend
9. Open a terminal and cd to your repo directory
10. `npm install`
11. `npm start` to start a Gulp task to watch and build files

### Accessibility

When developing locally, the theme will load the [a11y.css](https://ffoodd.github.io/a11y.css/index.html) accessibility linting CSS to highlight possible issues with markup.
