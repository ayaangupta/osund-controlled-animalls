//https://teachablemachine.withgoogle.com/models/

function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('//https://teachablemachine.withgoogle.com/models/model.json', modelReady);
}

function modelReady() {
    clasifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear -" + reults[0].label;

        document.getElementById("result_confidence").innerHTML = "Accuracy -" + (results[0].confidence * 100).toFixed(2) + "%";

        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        document.getElementById("results_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = "dog.png";
        img1 = "cat.png";


        if(results[0].label == "Barking"){
            img.src = true;
            img1.src = false;
        }

        if(results[0].label == "Meowing"){
            img.src = false;
            img1.src = true
        }
    }
}