// UNIT 4 ASSESSMENT: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("runFibonacciSequence", () => {
    const fibonacciLength1 = 6
    const fibonacciLength2 = 10
  it("takes in a number greater than 2 and returns an array containing the fibonacci sequence", () => {
    expect(runFibonacciSequence(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(runFibonacciSequence(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

const runFibonacciSequence = (num) => {
    if (num < 2) {
        throw new Error ("number must be greater than 2")
    }
    
    const fibonacciSequence = [1,1]
    for (let i = 2; i < num; i++){
        
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2])
    } 
    return fibonacciSequence
}



// Expected output: [1, 1, 2, 3, 5, 8]

// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code:
//created my describe block for fibonacci sequence 
//it statement declares it should take in a number greater than 2 and return an array with the fibonacci sequence
// expect statements created to expect length 1 and 2 to return expected outputs
//ran test and got my good fail now to create the function
//function takes in a parameter of num to represent the length of sequence to be ran 
//function checks to validate input to make sure to only run if num is greater than 2 if not it will throw an error 
// next is to initialize the fibonacciSequence array with the first two numbers which is 1 and 1
//then i generate my sequence with a for loop. function will iterate array and calculate the next number by taking the sum of the previous 2 numbers, while adding each number to the sequence 
// this should generate the complete sequence while returning the sequence as an array


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
// a) Create a test with expect statements for each of the variables provided.

describe("endTally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    const votes2 = { upVotes: 2, downVotes: 33 }
  it("takes in upvotes and down votes and tallys them up", () => {
    expect(endTally(votes1)).toEqual(11)
    expect(endTally(votes2)).toEqual(-31)
  })
})

const endTally = (votes) => {
    const totalUpVotes = votes.upVotes
    const totalDownVotes = votes.downVotes
    const endTally = totalUpVotes - totalDownVotes
    return endTally
} 
// const votes1 = { upVotes: 13, downVotes: 2 }
//  Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
// b) Create the function that makes the test pass.
// Pseudo code: 
// created test that describes function called endTally
//test takes in objects containing upvotes and downvotes
//maybe i went about it wrong but what i got from the question was we wanted the total number of votes so in the expect statement i expected the downvotes to be subtracted from the upvotes leaving it with the end tally
// created the end tally function to calculate tally of upvotes and downvotes and return an object with tally added up as a new property 
// endTally now returns amount of upvotes - the amount of downvotes and gives the tally
// after testing a couple times and failing i came to the conclusion of changing the expected output to the total tally of votes and the test ran and passed
