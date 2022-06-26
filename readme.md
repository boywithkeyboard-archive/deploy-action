## azurydev/deploy-action

```yml
name: 'Publish'

on:
  push:
    tags:
      - 'v*'

jobs:
  deploy:
    runs-on: ubuntu-latest
        
    steps:
      - name: Git Checkout
        uses: actions/checkout@v2
        
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 18.x

      - name: Install Dependencies
        run: npm ci

      - name: Build App
        run: npm run build

      - name: Deploy App
        uses: azurydev/deploy-action@v0.0.1
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          privateKey: ${{ secrets.SSH_KEY }}
          destination: /root/whatever
          dependencies: true # update remote package.json, package-lock.json, and dependencies
          pm2: 0 # pm2 process name or id
```
