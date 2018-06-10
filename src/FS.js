// File System Module
var files = require('fs');
let filePath = __filename;

console.log("Current Path of file:\t",filePath);

// To check if the file exists:
/*
files.exists(filePath,(value) =>{
    console.log("Does the file exists?\t",value);
});
*/

// Test if file is accessible

var textPath  = "C:/Users/sai/Desktop/Node Packages/SampleFile2.txt";

// Read Directory contents:
files.readdir(__dirname,(err, files)=>{
if(err){
    throw err;
}
else{
    files.forEach(element => {
        console.log(element.toString());
    });

    console.log("Successfully Read the directory");
}
});


// File Statistics
files.stat(__dirname, (error, status) =>{
    if(error){
        throw error;
    }
    else{
        console.log("Stat Is BlockDevice\t",status.isBlockDevice());
        console.log("Stat Is File",status.isFile());
        console.log("Stat Is Directory",status.isDirectory())
        console.log("Stat Is Socket\t",status.isSocket());
        console.log("Stat Is Symbolic Link",status.isSymbolicLink());
        // console.log(status);
    }
});

// File Statistics  - l statistics
files.lstat(__dirname, (error, status) =>{
    if(error){
        throw error;
    }
    else{
        console.log("Lstat Is BlockDevice\t",status.isBlockDevice());
        console.log("Lstat Is File",status.isFile());
        console.log("Lstat Is Directory",status.isDirectory())
        console.log("Lstat Is Socket\t",status.isSocket());
        console.log("Lstat Is Symbolic Link",status.isSymbolicLink());
        // console.log(status);
    }
});

// Rename a File

files.rename(textPath,textPath.replace(".txt","3.txt"), (err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Successfully Renamed a file");
    }
})

files.exists(__dirname.concat("\\abc"),(status) =>{
console.log("Checking if file exists..............");
if(!status){
    files.mkdir(__dirname.concat("\\abc"),(err) =>{
        if(err){
            throw err;
        }
    });
}else{
    console.log("File exists already.....");
}
});



// Remove Directory

files.rmdir(__dirname.concat("\\abc"),(err) =>{
    if(err){
        throw err;
    }
    else{
        files.exists(__dirname.concat("\\abc"),(exists) =>{
            console.log("Does file exist after deletion",exists);
        });
    }
}); 




/*files.link(textPath,__dirname.concat("\\axy\\xyz.txt"), (err) => {
if(err){
    throw err;
}
else{
    console.log("Succesfully Linked File");
}
});
*/
// File Access Modifications:
console.log("File Access Modificationzzzzzzzzzzzzzz");
var testFolder = "C:\\Users\\sai\\Desktop\\Node Packages\\FilePermissions";

/*
files.chmod(testFolder.concat("\\HideFile.txt"),4000,(err)=>{
  console.log("Get this done...!");
    if(err){
        console.error("Error. exists......",err.message);
    }
    else{
        console.log("Error does not exists for file access changes");
        files.stat(testFolder.concat("\\HideFile.txt"),(err,status) =>{
            if(err){
                return err;
            }
            else{
        console.log("Status of File\t",status.toString());
            }
        })
    }
});


files.chown(testFolder,0,0,(err)=>{
    if(err){
        console.error("Error in handling chmod",err.message);
        throw err;
    }
    else{
        console.log("Status changed");
    }
});
*/






files.open('C:/Users/sai/Desktop/Node Pack(ages/SampleFile2.txt','r',(err,file) =>{
    if(err){
        throw err;
    }
    console.log('saved')
});
console.log("Is File available?",files.exists('C:/Users/sai/Desktop/Node Packages/SampleFile.txt'));



/*
files.readFile('C:/Users/sai/Desktop/Node Packages/SampleFile2.txt',(err,data)=>{
    if(err){
        console.error("What the f**k is wrong !?",err.message);
        throw err;
    }
    else{
        console.log('succesfully Read the data !');
    }
});
*/

// Checks if the file exists in the path:
// The path must be correctly given otherwise the function will return false, 
// even if file exists in the given path


// Open File
//      --- > Read File
//           -- > Write File        
/*
files.open('C:/Users/sai/Desktop/Node Packages/SampleFile.txt','r',(error,fd)=>{
    if(error){
        return console.error(error.message);
    }   
    else{
       var buffer = new Buffer(1024);
        files.read(fd,buffer,0,buffer.length,0,(eror,bytes)=>{
        if(bytes>0){
            console.log(buffer.slice(0,bytes).toString());
        }
        

        //Close the file
        files.close(fd,(err)=>{
            console.log("File Descriptor",fd.toString());
            if(err){
                throw err;
            }
        });
    });
    }
}); */

files.open('C:/Users/sai/Desktop/Node Packages/SampleFile.txt','r',(error,fd)=>{
    if(error){
        return console.error("Error opening file...",error.message());
    }   
    else{
    var buffer = new Buffer('BUl Bul...........');
        files.write(fd,buffer,0,buffer.length,null, (err)=>{
            if(err){
                throw err;
            }
            else{
                console.length("Succes")
            }
        })
    }

});