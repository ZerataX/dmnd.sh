# dmnd.sh
[dmnd.sh](https://dmnd.sh) website

## build

```
  npm install
  npm run deploy
  npm start
```

instead of npm start you can also just put it in your public nginx folder or w/e.

## develop

to have the system rebuild on file change and reload your browser execute these two commands in different shells.
```
  npm run watch
  npm run live
```

## contribute

if you want to contribute please install the pre-commit script, execute the following scripts in the root of the repository
```
  ln -s ../../scripts/pre-commit.sh .git/hooks/pre-commit
  chmod +x pre-commit.sh
```

now everytime you commit the project will be linted and tested.
