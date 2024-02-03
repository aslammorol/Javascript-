let sentence = "I am dr. Aslam. Aslam morol, aslam, jdnanhdbd bd aslam";

function occurrences(sentence, word) {
    const pattern = new RegExp(word, "ig");
    const pattern2 = new RegExp(word, "i");
    const matches = sentence.match(pattern);
    let occurrence = matches ? matches.length : 0;
    console.log(`Occurance of ${word} : ${occurrence}`);
    let position = sentence.search(pattern2);
    position = position >= 0 ? position : "Not found";
    console.log(`First occurance of ${word} at position ${position}`);
}
occurrences(sentence, "Aslam");
