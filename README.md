# LGBTQGroupFinder
## Aldenis G, James L

### Overview
LGBTQGroupFinder allows users(of the LGBTQ community) to contact other users(of the LGBTQ community) in order to set up events. Users can also update their feeds by posting onto their feed in order for other users to learn a little more about them or know what's going on in their life, etc. Users can easily find other users by checking their "People in your location" section which lists users who live in your area.

### User Stories
1. as non-registered user, I can view a "create account" page
2. as a user, I can log in to the site
3. as a user, I can post on global feed
    * (When you log in, there will be a feed where you constantly post and your feed will be updated)
4. "People in your location" page
    * (User objects with the same location as you will be sent to that box)

### Data Model

```
user {
    displayName: string,
    location: string,
    contacts: [string],
    description: string
}
```

### APIs
* Validate email using external library:
	-using email-existence
* Firebase (Auth + DB + Cloud Messaging?)

### Division of Labor
Aldenis: Working on "Create Account Page, login page", Website, User Authentication,user data, "styling"
James: "Login Page", "Live chat API", "Create Account Page", Website, user data, "styling"

GSA is a club that meets on wednesdays to discuss problems in the LGBTQ+ community. We are looking to hold and event at our school on thursday August 24th
Email: jleidy167@gmail.com, Phone: 913445757
Manhattan, New York
MCSM_GSA
