[![header](https://...header.jpg)]

[View Live Project here](https://my-creative-gems-0b32c514e941.herokuapp.com/)
[View GitHub Repository](https://github.com/users/Pernilla-Strandberg/projects/4)

# My Creative Gems

My Creative Gems is a community-based publishing platform, based on the app Moments provided by CodeInstitute. It is built for creative enthusiasts in the fields of art, music, writing and crafts. Over time, the platform will be filled with images and content created by the site's users. The site will provide an opportunity for creators to showcase their work, receive valuable feedback, be inspired and learn new approaches and art forms.

---

## Features
Will be updated soon with image and description
- Landing page
- Social media icons on profile
- Private commenting (not yet fully implemented)
- Likes and Following
- Popular profiles

---

## User Experience (UX)

### User stories

[View Project on GitHub](https://github.com/users/Pernilla-Strandberg/projects/4)


**Registration**

- As a user, I want to register for an account so that I can post text and media content.

- As a user, I want to register for an account so that I can create a personal profile.

- As a user, I want to register for an account so that I can like, follow or commenting users profiles or posts.

- As a user, I want to register for an account so that I can receive feedback on my posts from other users.


**Social**

- As a user, I want to like and comment posts so that I can interact with others.

- As a user, I want to undo likes and comments so that I can regret my action.

- As a user, I want to follow users so that I can stay updated on their latest content.

- As a user, I want to stop follow users so that I can filter out users I do not longer want to follow.

- As a user, I want to send a private message to a user so that I can connect privately.


**Layout & Navigation**

- As a user, I want to search for specific topics or keywords so that I can find relevant content and discussions.

- As a user, I want to explore different categories so that I can discover a diverse range of content.

- As a user, I want to report inappropriate content or behavior so that I can help maintain a positive and respectful environment.

- As a user, I want to view a list of popular posts so that I can discover interesting content.

- As a user, I want to view a list of latest posts so that I can discover interesting content.

- As a user, I want to browse resources so that I can find tutorials or creative tips shared by users.


**Personal**

- As a user, I want to customize my profile so that I can add a bio, social links, and a profile picture.

- As a user, I want to send an invitation to friends so that I can invite them to join the site.

- As a user, I want to edit or delete my posts so that I can have full control of what I share.


**Visitor**

- As a visitor, I want to browse post categories so that I can easily find what I search for.

- As a visitor, I want to view user profiles and posts so that I can decide if I want to join.

- As a visitor, I want to read community guidelines and policies so that I can ensure a positive and respectful environment.

- As a visitor, I want to access an information page so that I can understand its mission, values, and benefits.


### Wireframes

Ongoing. Wireframes is not yet ready to share but will include following parts:

- Login, logout, signup
- Landing page
- Profile page
- Post page
- Commenting
- Add, change, delete


### Data model

Ongoing. Data model is not yet ready to share.


## Technologies

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [Python](https://en.wikipedia.org/wiki/Python_(programming_language))
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [React.js](https://react.dev/)
   - React was used to build the app.
2. [Django REST](https://www.django-rest-framework.org/)
   - Django REST was used to create the back-end and the API.
3. [ElephantSQL](https://www.elephantsql.com/)
   - ElephantSQL was (is) used as external database.
4. [Heroku](https://heroku.com)
   - Heroku was (is) used to deploy the app.
5. [Bootstrap 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
   - Bootstrap 5 css, js and icons was used to assist with styling, responsivenes and interaction.
6. [Google Fonts](https://fonts.google.com/)
   - Google fonts were used to import fonts as a display font for headers and paragraphs.
7. [Git](https://git-scm.com/)
   - Git was used for version control in CodeAnywhere terminal to handle commit and pushes to GitHub.
8. [Codeanywhere](https://app.codeanywhere.com/)
    - Codeanywhere stores the projects code and also has user stories connected to the project.
9. [Mage](https://mage.space)
    - Mage was used to create all AI generated images on the page.

### Most reused components:

Ongoing! Will be updated soon!

- PostsPage:
  - Home, Feed, Liked
- Post:
  - PostsPage
- Profile:
  - PopularProfiles, PopularProfiles (mobile)
- DropdownMenus:
  - Post, ProfilePage, Comment
- InfiniteScrollComponent:
  - PostPage (loading Comment components)
  - PostsPage (loading all, feed or liked Post components)
  - ProfilePage (loading Post components that belong to the profile)

## Testing

The W3C Markup Validator and W3C CSS Validator Services will be used to validate all pages to ensure there is no syntax errors in the project.

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_uri) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=#....................)
- [W3C Markup Validator](https://validator.w3.org/#validate_by_uri) - [Results](https://validator.w3.org/#validate_by_uri)

### Automated testing

ONGOING! Not finished. Will soon be updated.

#### PYtest - Errors to be fixed in the near future

- used the msw library to mock user and logout endpoints
- tested the NavBar component:
  - renders without a problem
  - renders the link to a user profile for a logged in user
  - renders the sign in and sign up buttons again on logout

### Manual testing

    #### Browsers and different screensizes
    Will be updated soon

### Further Testing

    ### Will be updated soon

---

## Deployment

The project was deployed to Heroku:

1. Connect GitHub repository to Heroku app
2. Set up basic dyno and add "gunicorn projectmap.wsgi" for webb
3. Add Config vars:
- CLOUDINARY_URL
- DATABASE_URL
- PORT
- SECRET KEY
4. Deploy and open app

### Deployment steps

- add prebuild script
- add Procfile
- remove all console.logs
- use Bootstrap default imports to minimize the build
- deploy to Heroku

---


## Contribution

-will be updated soon

### Media

-will be updated soon

### Other

-will be updated soon
