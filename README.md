## Preparation for Development

First install all depedencies and start the MongoDB docker container
```bash
$ npm run prep
```

Then we need to generate, push, and seed the database
```bash
$ npm run prisma:all
```

Now we can start the server while watching it
```bash
$ npm run start:dev
```

##

## Prepararation for Contributing
First we need to lint, format, and test the code
```bash
$ npm run git:prepare
```

Then we can just commit the changes to the new branch and push that up to remote

##

### Database commands
After making changes to the Prisma Schema we can generate the types and push the changes to the database
```bash
$ npm run prisma:schema
```

Start the database container
```bash
$ npm run db:up
```

Stop the database container
```bash
$ npm run db:down
```

##

### Linting & Formatting commands
Lint the code for better readability
```bash
$ npm run git:lint
```

Format the code for better readability
```bash
$ npm run git:format
```
