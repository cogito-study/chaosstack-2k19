# Solve the test with a test

## Useful tips

- You can introspect your generated GraphQL Schema opening the deployed URL.
- There are some interesting, predefined questions in the `seed.ts` file. Check out [Prisma's documentation](https://www.prisma.io/docs) how to use it!
  - But you can even add your own questions if you want.
- Maybe the correct answer for each question will be in the same position/index. 🤔
  - Make sure that the answers orders is randomized.

## Description

### Summary

Teaching at university is hard, studying is even harder. But what if you create a reusable testing application which helps you and your friends to pass exams easier than ever?

### Task

Your task is to develop a client application (with the framework/platform of your choice) which requests data from a GraphQL API. Based on that data you need to create a quiz environment where fellow students can answer the predefined questions. After filling the test the students should be able to check their scores comparing to others based on their username/student code. You can even display it on a chart, diagram or just a list. Obviously you want to create something cool and shiny so you try to focus on the UI design as well (responsivity and mobile-first could be a plus).

Since you decided to change the world on your own, you need to implement the server side logic as well. After a few minutes on Google you found a great boilerplate project, based on an open source ORM, called Prisma ([https://prisma.io](https://prisma.io)). Prisma generates a database client and a raw GraphQL server witch CRUD operations. Fortunately the project has the exact same data model what you’ve been looking for, with some predefined cool test questions. Then you have nothing left, but to deploy it somewhere. It can be your own machine with Docker or you can use one of Prisma’s demo servers.

Maybe in the future you decide to open source your app or somebody wants to join your team, so using version control (such as Git) and writing clean code are essentials.

If something is not clear or if you have any questions feel free to contact us at our booth!

### Criteria

#### Deploy backend

1 point

#### Query questions from backend

2 points

#### Create test suite with answer and test submitting

2 points

#### Display highscores

2 points

#### UI design

2 points

#### Version control, clean code

1 point

### Submission

Find one of our mentors and show your solution. Optionally you can deploy your app somewhere which publicly available for everyone.
