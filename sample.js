const data = require('path/to/file/filename');

const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

// Sample general education descriptions
const genEdDescriptions = [
    "Introduction to Psychology explores different aspects of human behavior.",
    "Introduction to Sociology examines society and social behavior.",
    // Add more descriptions
];

// Function to compare user input with gen ed descriptions
function findBestMatch(userInput) {
    const userKeywords = tokenizer.tokenize(userInput.toLowerCase());

    let bestMatch = null;
    let bestScore = -1;

    genEdDescriptions.forEach((description, index) => {
        const descriptionKeywords = tokenizer.tokenize(description.toLowerCase());
        const score = computeSimilarity(userKeywords, descriptionKeywords);

        if (score > bestScore) {
            bestScore = score;
            bestMatch = { index, score };
        }
    });

    return genEdDescriptions[bestMatch.index];
}

// Function to compute similarity between two sets of keywords
function computeSimilarity(keywords1, keywords2) {
    // You can use different similarity measures here
    // For simplicity, let's use Jaccard similarity
    const intersection = new Set(keywords1.filter(keyword => keywords2.includes(keyword)));
    const union = new Set([...keywords1, ...keywords2]);
    return intersection.size / union.size;
}

// Example usage
const userInput = "Behavior of individuals in a society";
const bestMatchDescription = findBestMatch(userInput);
console.log("Best match:", bestMatchDescription);