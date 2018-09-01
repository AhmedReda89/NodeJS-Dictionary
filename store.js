// Creating the file
(function init(){
    let fs = require('fs');
    if(process.argv.length > 2){
        switch (process.argv[2]) {
            case "add":
                console.log('Case Add!');
                if(process.argv.length == 5){
                    // First we check the file and get the data inside
                    fs.readFile('Output.json', function (error, data) {
                        if(error){throw error}
                        else{
                            newObj = JSON.parse(data);
                            // Then we check if the key already exist to prevent it from being overwritten & get the file data
                            if (newObj[process.argv[3]] == undefined) {
                                newObj[process.argv[3]] = process.argv[4];
                                // Then we replace the file data with the new obj
                                fs.writeFile('Output.json', JSON.stringify(newObj), function (err) {
                                    if (err) { throw err }
                                    else {
                                        console.log('You data were just Added!');
                                    }
                                });
                            } else {
                                console.log('This key already exists, please try again.');
                            }
                        }
                    });
                }
                break;
            case "list":
                console.log('Case List!');
                // Checking the file data ..
                fs.readFile('Output.json', function (error, data) {
                    if(error){throw error}
                    else{
                        console.log("The List: ");
                        // Print all of the keys and values inside
                        newObj = JSON.parse(data);
                        for(var key in newObj) {
                            var value = newObj[key];
                            console.log(key+" : "+value);
                        }
                    }
                });
                break;
            case "get":
                console.log('Case Get!');
                if(process.argv.length == 4){
                    // Checking the file data ..
                    fs.readFile('Output.json', function (error, data) {
                        if(error){throw error}
                        else{
                            // Geting value of the given key
                            newObj = JSON.parse(data);
                            if(newObj[process.argv[3]] != undefined){
                                console.log("Result: " + newObj[process.argv[3]]);
                            }else{
                                console.log("Sorry such key doesn't exist!");
                            }
                            
                        }
                    });
                }else{
                    console.log("I don't have the key of the record you want.");
                }
                break;
            case "remove":
                console.log('Case Remove!');
                if(process.argv.length == 4){
                    // Checking the file data ..
                    fs.readFile('Output.json', function (error, data) {
                        if(error){throw error}
                        else{
                            // Geting value of the given key
                            newObj = JSON.parse(data);
                            delete newObj[process.argv[3]];
                            // Replacing the file data with the new obj
                            fs.writeFile('Output.json', JSON.stringify(newObj), function (err) {
                                if (err) { throw err }
                                else {
                                    console.log("Done record deleted!");
                                }
                            });
                        }
                    });
                }else{
                    console.log("I don't have the key of the record you want to delete.");
                }
                break;
            case "clear":
                console.log('Case Clear!');
                fs.writeFile('Output.json', "{}", function (err) {
                    if (err) { throw err }
                    else {
                        console.log("File data cleared!");
                    }
                });
                
        }
    }else{
        console.log("Warn: I can only know what do you want through arguments, so please add some!");
    }
})();
