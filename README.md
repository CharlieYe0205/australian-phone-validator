# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Source

This phone validator validates some formats listed here: https://en.wikipedia.org/wiki/Telephone_numbers_in_Australia#International_access


## Algorithm

The algorithm is
1. Remove all the ' ', '-', '_', '(' and ')' from the input
2. Check whether it starts with +61 (australian international code) or 0 (australian trunk code). <br/> Followed by an area code which is 2378 for geographic numbers or 45 for mobile. <br/> End with 8 digit numbers.
3. if there is a match then display valid, otherwise not valid will be displayed.

this algorithm can detect the following situations as valid input

<ul>
    <li>+61415778806
    <li>0415778806
    <li>+61212345678
    <li>02 12345678
    <li>(+61) 2 12345678
    <li>(+61) 2 123-45-678
    <li>(+61) 2 123_45_678
</ul>

the following situations as invalid input

<ul>
    <li>0912345678
    <li>+60415778806
    <li>+61912345678
    <li>0612345678
    <li>+610414570776666666
    <li>041577880x
</ul>


## Limitations

1. Warning! this project contains no jest test at all due to limited time for development. Need to cover tests later.
2. this algorithm does not check the format of brackets. So the input of +6141577(((8806 is considered as valid input.
3. this algorithm does not check the format of spaces. So the input of + 6 1 41577   8806 is considered as valid input.
4. this algorithm does not check the format of '-'. So the input of +61---415778806 is considered as valid input.
5. this algorithm does not check the format of '_'. So the input of +614___15778806 is considered as valid input.
6. it does not check the two digits after the area code for geographic number. The list can be found in the wikipedia page.
7. The UI is bad.


## One more thing

if a validator for production need to be implemented. A trusted third-party library should be used. for example https://github.com/google/libphonenumber