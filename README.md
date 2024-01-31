# Overview 

https://developer.nytimes.com/apis



# Deploy

Install the Heroku CLI https://devcenter.heroku.com/articles/heroku-command-line
Download and install the Heroku CLI.
### MAC
```js 
brew tap heroku/brew && brew install heroku
```

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
```js 
heroku login
```
Link to heroku
```js
heroku git:remote -a media-synt-site
```

```js
git add .
git commit -m "
git push heroku main
```