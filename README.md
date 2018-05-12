[![Build Status](https://travis-ci.org/ZerataX/dmnd.sh.svg?branch=master)](https://travis-ci.org/ZerataX/dmnd.sh) [![dependencies Status](https://david-dm.org/ZerataX/dmnd.sh/status.svg)](https://david-dm.org/ZerataX/dmnd.sh) [![devDependencies Status](https://david-dm.org/ZerataX/dmnd.sh/dev-status.svg)](https://david-dm.org/ZerataX/dmnd.sh?type=dev) [![Coverage Status](https://coveralls.io/repos/github/ZerataX/dmnd.sh/badge.svg?branch=master)](https://coveralls.io/github/ZerataX/dmnd.sh?branch=master)
# dmnd.sh

[dmnd.sh](https://dmnd.sh) main website

## build

```
  npm install
  npm run deploy
```

and then put `dist/` in your public nginx folder or w/e.

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
