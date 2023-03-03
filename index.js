const FileProcessor = require('./fileProcessor.js');
const MdTextProcessor = require('./mdTextProcessor.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const tagsToReplace = {
    '**': {
        opening: '<strong>',
        closing: '</strong>' 
    },
    '*': {
        opening: '<em>',
        closing: '</em>' 
    },
    '~~': {
        opening: '<del>',
        closing: '</del>' 
    }
};

var path = 'data.txt';

var fileProcessor = new FileProcessor(path);
var textProcessor = new MdTextProcessor(tagsToReplace);

var inputText = fileProcessor.readAllText();
var outputText = textProcessor.convertText(inputText);
fileProcessor.writeToFile(outputText);