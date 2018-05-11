# dmnd.sh [![Build Status](https://travis-ci.org/ZerataX/dmnd.sh.svg?branch=master)](https://travis-ci.org/ZerataX/dmnd.sh) [![Dependency Status](https://david-dm.org/sasstools/sass-lint.svg)](https://david-dm.org/sasstools/sass-lint#info=dependencies&view=list) [![Dev Dependency Status](https://david-dm.org/sasstools/sass-lint/dev-status.svg)](https://david-dm.org/sasstools/sass-lint#info=devDependencies&view=list)

[dmnd.sh](https://dmnd.sh) main website

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
