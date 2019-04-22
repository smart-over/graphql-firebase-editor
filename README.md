# Graphql editor with jwt token for Express

You can use with firebase authorization or custom jwt token.

### Install

```
npm i graphql-firebase-editor
```

### Example

```
import graphqlEditor from 'graphql-firebase-editor'

app.get('/graphql', graphqlEditor)
```

### Firebase authorization example

If you want to use firebase authorization, you must set FIREBASE_KEY in your .env file then use dotenv.config() for access this.

```
import graphqlEditor from 'graphql-firebase-editor'
import dotenv from 'dotenv'

dotenv.config()

app.get('/graphql', graphqlEditor)
```

