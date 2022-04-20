//setting time out
// global jest time to test and run code
jest.setTimeout(15000);

// Before and after test

// use before each
beforeEach(() => {
    // this resets the value to a original state before the next test is been run
    console.log("Before each");
});

// afterEach
afterEach(() => {
    // this cleans a code after case has beeen tested
    console.log("after each test");
});

// after all and before all
// beforeAll
beforeAll(() => {
    console.log("before all");
});
// after all
afterAll(() => {
    console.log("aafter all");
});
// test for variables and functions

let value = 10;
const add = (x, y) => {
    return x + y;
};

// run only one test case with the keyword only
// test.only, it.only, describe.only
it.skip("test for same value", () => {
    expect(value).toBe(10);
    console.log("test for same value");
});

// also we have test.skip, when you want a test case file to be omitted while other test case runs

describe("variables test", () => {
    it("check code", () => {
        let newValue = 33;
        expect(newValue).toBe(33);
        console.log("variable test");
    });

    test("check 2nd code", () => {
        let values = 10;
        expect(values === value).toBe(true);
        console.log("2nd variable test");
    });
    test("check return function value", () => {
        expect(add(4, 5)).toBe(9);
        console.log("3rd variable test");
    });
    it("test function case", () => {
        function subtract(x, y) {
            return x - y;
        }
        expect(subtract(10, 5)).toBe(5);
        console.log("function test");
    });
});

// test("firs test", () => {
//     expect(4 + 10).toBe(14);
// });

// // it can be replaced with test
// it("second test", () => {
//     expect(10 * 2).toBe(20);
// });

// // to group different test case
// describe("all test case here", () => {
//     it("first test case", () => {
//         expect(100 < 50).toBe(false);
//     });

//     test("second test case", () => {
//         expect("bright is great").toBe(typeof String);
//     });
// });