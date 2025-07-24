const natural = require('natural'); // Required by assignment

// Sample sentiment analysis function
function analyzeSentiment(text) {
    const Analyzer = natural.SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer('English', stemmer, 'afinn');
    const score = analyzer.getSentiment(text.split(' '));
    return score;
}

// Example usage
const sampleText = 'I love this product, it is amazing and works great!';
console.log('Sentiment score:', analyzeSentiment(sampleText));
