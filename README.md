# YelpCamp
YelpCamp is a dynamic website that allows users to sign up, login, post campsites, leave reviews, and comment on posts.

The most updated version is found in v1.5. Please note that this project is not finished.

File Structure:

-Models are predefined database schema's, used to store information on users, campgrounds, and comments. The relationship of these things are also defined here.

-Node modules include all package dependencies, including mongoose, express, body-parser, and others.

-Public contains a custom style sheet we have used to style a few specific elements, though most styling comes from bootstrap and is implemented in each page through our header file.

-Routes contain our routes which are broken out into individual modules. These are imported into our main route page, app.js.

-Views contains our embeded javascript files, which is where all of our html is written and where dynamic page data is displayed. Views also contains our partials folder, which is where we store our header and footer, which are included on every page of the site.

-Loose files include app.js, our main application route, our json file, and a seeds.js file that we use to seed data during testing.
