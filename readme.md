# Wiredcraft WeChat Developer test

Make sure you read **all** of this document carefully, and follow the guidelines in it.

## Context

Build a typical WeChat mini-program. This particular mini-program lets the user list out public repos under Organization on Github and display repo details by click on the search result.

No mock up, just try and create a simple search page that gets the job done.

## Step 1 User Story

1. User opens the page and can see a empty page with a search bar at the top of the page.
2. User taps on the search bar and can enter Organization name. As keywords are entered, search results are updated.
3. User taps on a search result and sees the repo details page(including name/full_name/description/language/owner avatar).

### Requirements

#### UI/UX

Keep the UX and UI simple. Try and style it according to the Starbucks UI kit: https://starbucks-china.github.io/starbucks-website/

#### APIs

Use the following API specs for the search: https://developer.github.com/v3/


### Step 2 

Let's assume we wanted in a second step to require WeChat authentication to access the search.

Explain shortly how you would support such a feature with sequence diagram, wireframes or a couple paragraphs explaining the steps to develop it.

## What We Care About

Feel free to use any libraries you would use if this were a real production App, but remember we're interested in your code & the way you solve the problem, not how well you can use a particular library.

We're interested in your method and how you approach the problem just as much as we're interested in the end result.

Here's what you should aim for:

- Good use of current Wechat mini-program official guide.
- Solid testing approach.
- Extensible code.

## Q&A

> Where should I send back the result when I'm done?

Fork this repo and send us a pull request when you think you are done. We don't have a deadline for the task.

> What if I have a question?

Create a new issue in the repo and we will get back to you very quickly.
