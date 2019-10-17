# Risk Assessment Tool

To run this project locally, just clone, install and run.  
---
## Background

This react app in running as part of a wordpress deployment.  There have been some special things attempted to run react from inside the wordpress page.  This has been done in an effort to try to retain the same look and feel of the site but running this react app from inside the wordpress such that you can inject the menu as proven challenging.  This is a really custom implementation.  I am thinking the only way this type of behavior will be possible is heavily couple the wordpress theme with the line of javascript that injects the site with webpacked dependencies of the react app.  

If there is some way to avoid doing this then do that as this integration is painful and difficult from a maintainablity perspective. 

Here is a sort medium article that explains the process of how I was able to run the react app from inside of wordpress:

[Embedding a React Application inside a Wordpress Page](https://medium.com/@CodeCareerCoach/react-app-inside-a-wordpress-page-or-post-4c7d38181b3d)

