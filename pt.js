// pt, Pt, pT: pascal's triangle

function getUserInput() {
    
    var userNum = document.getElementById("user-input-field").value;
    
    if (isNaN(userNum)) {
        document.getElementById("pt-result-p").innerHTML = "";
        document.getElementById("warning-p").innerHTML = "Please enter a valid number!!!";
    } else {
        document.getElementById("warning-p").innerHTML = "";
        document.getElementById("pt-result-p").innerHTML = "";
        calcPt(userNum);
    }
}

function calcPt(n) {
    
    // an array to hold the rows of pt
    var elements = new Array();

    var ptResultP = document.getElementById("pt-result-p");
    
    for (i = 0; i <= n; i++) {
        
        var myT = "";
        
        // for each element of the row array, creating a new array, the columns
        elements[i] = new Array();
        for (j = 0; j <= i; j++) {
            
            // the first element of each row is 1
            elements[i][0] = 1;
            
            // and the last element of each row is 1
            elements[i][i] = 1;
            
            // calculating the value of the remaining elements in each row, filling the columns
            if (j !== 0 && j !== i) {
                elements[i][j] = elements[i - 1][j] + elements[i - 1][j - 1];
            }
            
            myT += elements[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
            
        }
        
        ptResultP.innerHTML += myT;
        ptResultP.innerHTML += "<br>";
    }
    
}

function resetResult() {
    document.getElementById("user-input-field").value = "";
    document.getElementById("pt-result-p").innerHTML = "";
    document.getElementById("warning-p").innerHTML = "";
}