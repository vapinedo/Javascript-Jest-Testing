# JavaScript Testing App using Jest Framework

Jest is a testing framework by Facebook, based on Jasmine, so including even more features.

## Instructions to set up 

1. Create a package.json file 

    ``npm init --yes``

2. Create a .gitignore file at root folder level, so put inside as follow:

    ``node_modules/``

3. Go to package.json file at change script section as follow:

    From this
    ``"test": "echo \"Error: no test specified\" && exit 1"``

    To this
    ``"test": "jest"``

4. Install Jest as dev dependency

    ``npm i jest --save-dev``