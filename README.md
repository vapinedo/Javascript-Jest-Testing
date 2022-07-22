# JavaScript Testing App using Jest Framework

Jest is a testing framework by Facebook, based on Jasmine, so including even more features.

## Instructions to set up

1.  Create a package.json file

    `npm init --yes`

2.  Create a .gitignore file at root folder level, so put inside as follow:

    `node_modules/`

3.  Install Jest as dev dependency

    `npm i jest --save-dev`

4.  Go to package.json file at change script section as follow:

    From this

    `"test": "echo \"Error: no test specified\" && exit 1"`

    To this

    `"test": "jest"`

5.  create a `src` folder at root level

6.  inside `src` folder create two files as follows:

            1. sum.js

            ```
                export default function add(a, b) {
                    return a + b;
                };
            ```

            2. sum.spec.js or sum.test.js ( both works )


            `
                import add from "./sum";

                describe("Test Suite for :: sum.js", () => {
                    test("1. should sum two numbers", () => {
                        expect(add(1, 3)).toBe(4);
                    });
                });

            `
