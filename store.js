
let fs = require('fs');
if(process.argv.length > 2){
    switch (process.argv[2]) {
        case "add":
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
            // Checking the file data ..
            fs.readFile('Output.json', function (error, data) {
                if(error){throw error}
                else{
                    // Print all of the keys and values inside
                    newObj = JSON.parse(data);
                    if(Object.keys(newObj).length > 0){
                        console.log("The List: ");
                        for(var key in newObj) {
                            var value = newObj[key];
                            console.log(key+" : "+value);
                        }
                    }else{
                        console.log('The list is currently empty!');
                    }
                }
            });
            break;
        case "get":
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
            fs.writeFile('Output.json', "{}", function (err) {
                if (err) { throw err }
                else {
                    console.log("File data cleared!");
                }
            });
            
    }
}else{
    console.log("Usage info: you need to specify some arguments, as the following:\n add key value\n list\n get key\n remove key\n clear");
}
