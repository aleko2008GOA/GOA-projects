var ro1 = 0.785;
var ro0 = 0.997;
var ro2 = 0.789;

var arr = [
    [1, 2.5, 25, 0.70, 2.481, 19.088, 21.547, 27],
    [2, 5, 25, 0.54, 4.865, 19.406, 24.286, 29.8],
    [3, 15, 25, 0.28, 14.919, 19.397, 34.269, 39],
    [4, 25, 25, 0.19, 24.85, 19.486, 44.259, 49],
    [5, 25, 15, 0.12, 24.832, 13.289, 38.095, 39.5],
    [6, 25, 5, 0.045, 24.743, 3.767, 28.484, 30],
    [7, [12.5, 12.5], 0, 0, [12.172, 12.103], 0, 24.308, 24.9],
    [8, 0, [12.5, 12.5], 1, 0, [8.970, 9.417], 19.189, 25]
];

var arr111 = [
    [arr[0][0], arr[0][1], arr[0][2], arr[0][3], ro0 * arr[0][1] + ro1 * arr[0][2], arr[0][6], arr[0][1] + arr[0][2], arr[0][7]],
    [arr[1][0], arr[1][1], arr[1][2], arr[1][3], ro0 * arr[1][1] + ro1 * arr[1][2], arr[1][6], arr[1][1] + arr[1][2], arr[1][7]],
    [arr[2][0], arr[2][1], arr[2][2], arr[2][3], ro0 * arr[2][1] + ro1 * arr[2][2], arr[2][6], arr[2][1] + arr[2][2], arr[2][7]],
    [arr[3][0], arr[3][1], arr[3][2], arr[3][3], ro0 * arr[3][1] + ro1 * arr[3][2], arr[3][6], arr[3][1] + arr[3][2], arr[3][7]],
    [arr[4][0], arr[4][1], arr[4][2], arr[4][3], ro0 * arr[4][1] + ro1 * arr[4][2], arr[4][6], arr[4][1] + arr[4][2], arr[4][7]],
    [arr[5][0], arr[5][1], arr[5][2], arr[5][3], ro0 * arr[5][1] + ro1 * arr[5][2], arr[5][6], arr[5][1] + arr[5][2], arr[5][7]],
    [arr[6][0], [arr[6][1][0], arr[6][1][1]], arr[6][2], arr[6][3], ro0 * (arr[6][1][0] + arr[6][1][1]) + ro1 * arr[6][2], arr[6][6], arr[6][1][0] + arr[6][1][1] + arr[6][2], arr[6][7]],
    [arr[7][0], arr[7][1], [arr[7][2][0], arr[7][2][1]], arr[7][3], ro0 * arr[7][1] + ro1 * (arr[7][2][0] + arr[7][2][1]), arr[7][6], arr[7][1] + arr[7][2][0] + arr[7][2][1], arr[7][7]]
];

var arr11 = [
    [arr[0][0], arr[0][3], 0.47, arr111[0][4] - arr[0][6], arr[0][1] + arr[0][2] - arr[0][7], (arr[0][1] + arr[0][2] - arr[0][7])/1.14],
    [arr[1][0], arr[1][3], 0.60, arr111[1][4] - arr[1][6], arr[1][1] + arr[1][2] - arr[1][7], (arr[1][1] + arr[1][2] - arr[1][7])/1.45],
    [arr[2][0], arr[2][3], 1.16, arr111[2][4] - arr[2][6], arr[2][1] + arr[2][2] - arr[2][7], (arr[2][1] + arr[2][2] - arr[2][7])/2.57],
    [arr[3][0], arr[3][3], 1.71, arr111[3][4] - arr[3][6], arr[3][1] + arr[3][2] - arr[3][7], (arr[3][1] + arr[3][2] - arr[3][7])/3.647],
    [arr[4][0], arr[4][3], 1.58, arr111[4][4] - arr[4][6], arr[4][1] + arr[4][2] - arr[4][7], (arr[4][1] + arr[4][2] - arr[4][7])/3.31],
    [arr[5][0], arr[5][3], 1.45, arr111[5][4] - arr[5][6], arr[5][1] + arr[5][2] - arr[5][7], (arr[5][1] + arr[5][2] - arr[5][7])/2.92],
    [arr[6][0], arr[6][3], 1.39, arr111[6][4] - arr[6][6], arr[6][1][0] + arr[6][1][1] + arr[6][2] - arr[6][7], (arr[6][1][0] + arr[6][1][1] - arr[6][7])/2.778],
    [arr[7][0], arr[7][3], 0.33, arr111[7][4] - arr[7][6], arr[7][1] + arr[7][2][0] + arr[7][2][1] - arr[7][7], (arr[7][2][0] + arr[7][2][1] - arr[7][7])/1.087]
];

var arr2 = [
    [1, 5, 50, 0.60, 4.776, 40.247, 45.102, 53.8],
    [2, 10, 50, 0.34, 10.382, 40.227, 50.568, 58.8],
    [3, 30, 50, 0.24, 30.454, 40.357, 70.813, 78.5],
    [4, 50, 50, 0.162, 49.957, 40.101, 90.013, 97.1],
    [5, 50, 30, 0.057, 49.994, 24.629, 74.554, 78.8],
    [6, 50, 10, 0.045, 49.635, 7.628, 57.164, 58.2],
    [7, [25, 25], 0, 0, [24.991, 25.016], 0, 49.871, 50],
    [8, 0, [25, 25], 1, 0, [19.948, 20.38], 40.462, 50]
];

var arr222 = [
    [arr2[0][0], arr2[0][1], arr2[0][2], arr2[0][3], ro0 * arr2[0][1] + ro2 * arr2[0][2], arr2[0][6], arr2[0][1] + arr2[0][2], arr2[0][7]],
    [arr2[1][0], arr2[1][1], arr2[1][2], arr2[1][3], ro0 * arr2[1][1] + ro2 * arr2[1][2], arr2[1][6], arr2[1][1] + arr2[1][2], arr2[1][7]],
    [arr2[2][0], arr2[2][1], arr2[2][2], arr2[2][3], ro0 * arr2[2][1] + ro2 * arr2[2][2], arr2[2][6], arr2[2][1] + arr2[2][2], arr2[2][7]],
    [arr2[3][0], arr2[3][1], arr2[3][2], arr2[3][3], ro0 * arr2[3][1] + ro2 * arr2[3][2], arr2[3][6], arr2[3][1] + arr2[3][2], arr2[3][7]],
    [arr2[4][0], arr2[4][1], arr2[4][2], arr2[4][3], ro0 * arr2[4][1] + ro2 * arr2[4][2], arr2[4][6], arr2[4][1] + arr2[4][2], arr2[4][7]],
    [arr2[5][0], arr2[5][1], arr2[5][2], arr2[5][3], ro0 * arr2[5][1] + ro2 * arr2[5][2], arr2[5][6], arr2[5][1] + arr2[5][2], arr2[5][7]],
    [arr2[6][0], [arr2[6][1][0], arr2[6][1][1]], arr2[6][2], arr2[6][3], ro0 * (arr2[6][1][0] + arr2[6][1][1]) + ro2 * arr2[6][2], arr2[6][6], arr2[6][1][0] + arr2[6][1][1] + arr2[6][2], arr2[6][7]],
    [arr2[7][0], arr2[7][1], [arr2[7][2][0], arr2[7][2][1]], arr2[7][3], ro0 * arr2[7][1] + ro2 * (arr2[7][2][0] + arr2[7][2][1]), arr2[7][6], arr2[7][1] + arr2[7][2][0] + arr2[7][2][1], arr2[7][7]]
];

var arr22 = [
    [arr2[0][0], arr2[0][3], 1.14, arr222[0][4] - arr2[0][6], arr2[0][1] + arr2[0][2] - arr2[0][7], (arr2[0][1] + arr2[0][2] - arr2[0][7])/1.14],
    [arr2[1][0], arr2[1][3], 1.45, arr222[1][4] - arr2[1][6], arr2[1][1] + arr2[1][2] - arr2[1][7], (arr2[1][1] + arr2[1][2] - arr2[1][7])/1.45],
    [arr2[2][0], arr2[2][3], 2.57, arr222[2][4] - arr2[2][6], arr2[2][1] + arr2[2][2] - arr2[2][7], (arr2[2][1] + arr2[2][2] - arr2[2][7])/2.57],
    [arr2[3][0], arr2[3][3], 3.647, arr222[3][4] - arr2[3][6], arr2[3][1] + arr2[3][2] - arr2[3][7], (arr2[3][1] + arr2[3][2] - arr2[3][7])/3.647],
    [arr2[4][0], arr2[4][3], 3.31, arr222[4][4] - arr2[4][6], arr2[4][1] + arr2[4][2] - arr2[4][7], (arr2[4][1] + arr2[4][2] - arr2[4][7])/3.31],
    [arr2[5][0], arr2[5][3], 2.92, arr222[5][4] - arr2[5][6], arr2[5][1] + arr2[5][2] - arr2[5][7], (arr2[5][1] + arr2[5][2] - arr2[5][7])/2.92],
    [arr2[6][0], arr2[6][3], 2.778, arr222[6][4] - arr2[6][6], arr2[6][1][0] + arr2[6][1][1] + arr2[6][2] - arr2[6][7], (arr2[6][1][0] + arr2[6][1][1] - arr2[6][7])/2.778],
    [arr2[7][0], arr2[7][3], 1.087, arr222[7][4] - arr2[7][6], arr2[7][1] + arr2[7][2][0] + arr2[7][2][1] - arr2[7][7], (arr2[7][2][0] + arr2[7][2][1] - arr2[7][7])/1.087]
];
//first experiment results in table
for(var i = 0; i < 8; i++){
    $(".table1").append("<tr class ='row-" + i + "'></tr>");
    for(var j = 0; j < arr[i].length; j++){
        if(j != 0){
            if(!isNaN(arr[i][j])){
                $(".row-" + i).append("<td>" + arr[i][j].toFixed(2) + "</td>");
            }else{
                $(".row-" + i).append("<td>" + arr[i][j][0].toFixed(2) + " + " + arr[i][j][1].toFixed(2) + "</td>");
            }
        }else{
            $(".row-" + i).append("<td>" + arr[i][j] + "</td>");
        }
    }
}

for(var i = 0; i < 8; i++){
    $(".table111").append("<tr class ='row111-" + i + "'></tr>");
    for(var j = 0; j < arr[i].length; j++){
        if(j != 0){
            if(!isNaN(arr111[i][j])){
                $(".row111-" + i).append("<td>" + arr111[i][j].toFixed(2) + "</td>");
            }else{
                $(".row111-" + i).append("<td>" + arr111[i][j][0].toFixed(2) + " + " + arr111[i][j][1].toFixed(2) + "</td>");
            }
        }else{
            $(".row111-" + i).append("<td>" + arr111[i][j] + "</td>");
        }
    }
}

for(var i = 0; i < 8; i++){
    $(".table11").append("<tr class ='row11-" + i + "'></tr>");
    for(var j = 0; j < arr11[i].length; j++){
        if(j != 0){
            $(".row11-" + i).append("<td>" + arr11[i][j].toFixed(2) + "</td>");
        }else{
            $(".row11-" + i).append("<td>" + arr11[i][j] + "</td>");
        }
    }
}

//second experiment results in table
for(var i = 0; i < 8; i++){
    $(".table2").append("<tr class ='row2-" + i + "'></tr>");
    for(var j = 0; j < arr2[i].length; j++){
        if(j != 0){
            if(!isNaN(arr2[i][j])){
                $(".row2-" + i).append("<td>" + arr2[i][j].toFixed(2) + "</td>");
            }else{
                $(".row2-" + i).append("<td>" + arr2[i][j][0].toFixed(2) + " + " + arr2[i][j][1].toFixed(2) + "</td>");
            }
        }else{
            $(".row2-" + i).append("<td>" + arr2[i][j] + "</td>");
        }
    }
}

for(var i = 0; i < 8; i++){
    $(".table222").append("<tr class ='row222-" + i + "'></tr>");
    for(var j = 0; j < arr222[i].length; j++){
        if(j != 0){
            if(!isNaN(arr222[i][j])){
                $(".row222-" + i).append("<td>" + arr222[i][j].toFixed(2) + "</td>");
            }else{
                $(".row222-" + i).append("<td>" + arr222[i][j][0].toFixed(2) + " + " + arr222[i][j][1].toFixed(2) + "</td>");
            }
        }else{
            $(".row222-" + i).append("<td>" + arr222[i][j] + "</td>");
        }
    }
}

for(var i = 0; i < 8; i++){
    $(".table22").append("<tr class ='row22-" + i + "'></tr>");
    for(var j = 0; j < arr22[i].length; j++){
        if(j != 0){
            $(".row22-" + i).append("<td>" + arr22[i][j].toFixed(2) + "</td>");
        }else{
            $(".row22-" + i).append("<td>" + arr22[i][j] + "</td>");
        }
    }
}

//change size and style on click
$("td").click(function(){
    var cell = $(this).index();
    var row = $(this).closest("tr").index();
    if($(this).closest("table").hasClass("table1")){
        if($(this).hasClass("active")){
            if(cell != 0){    
                if(isNaN(arr[row - 1][cell])){
                    $(this).text(arr[row - 1][cell][0].toFixed(2) + " + " + arr[row - 1][cell][1].toFixed(2));
                    $(this).animate({"font-size": "16px", "backgroundColor": "transparent"}, 200);
                }else{
                    $(this).text(arr[row - 1][cell].toFixed(2));
                    $(this).animate({"font-size": "16px", "backgroundColor": "transparent"}, 200);
                }
            }else{
                $(this).animate({"font-size": "16px", "backgroundColor": "transparent"}, 200);
            }
        $(this).removeClass("active");
        }else{
            if(cell != 0){    
                if(isNaN(arr[row - 1][cell])){
                    if(cell == 4 || cell == 5){
                        $(this).text((arr[row - 1][cell][0]).toFixed(3) + " + " + (arr[row - 1][cell][1]).toFixed(3) + " გ");
                        $(this).animate({"font-size": "18px", "backgroundColor": "#DAAA3B"}, 200);
                    }
                    if(cell == 1 || cell == 2){
                        $(this).text((arr[row - 1][cell][0]).toFixed(1) + " + " + (arr[row - 1][cell][1]).toFixed(1) + " მლ");
                        $(this).animate({"font-size": "18px", "backgroundColor": "#DAAA3B"}, 200);
                    }
                }else{
                    if(cell == 1 || cell == 2 || cell == 7){   
                        $(this).text((arr[row - 1][cell]).toFixed(1) + " მლ");
                        $(this).animate({"font-size": "18px", "padding": "5px", "padding-left": "8px", "backgroundColor": "#DAAA3B"}, 200);
                    }
                    if(cell == 4 || cell == 5 || cell == 6){   
                        $(this).text((arr[row - 1][cell]).toFixed(3) + " გ");
                        $(this).animate({"font-size": "18px", "padding": "5px", "padding-left": "8px", "backgroundColor": "#DAAA3B"}, 200);
                    }
                    if(cell == 3){   
                        $(this).text((arr[row - 1][cell]).toFixed(3));
                        $(this).animate({"font-size": "18px", "padding": "5px", "padding-left": "8px", "backgroundColor": "#DAAA3B"}, 200);
                    }
                }
            }else{
                $(this).animate({"font-size": "18px", "backgroundColor": "#DAAA3B"}, 200);
            }
            $(this).addClass("active");
        }
    }
    else if($(this).closest("table").hasClass("table2")){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            if(cell != 0){
                if(!isNaN(arr2[row - 1][cell])){
                    $(this).text(arr2[row - 1][cell].toFixed(2));
                    $(this).animate({"font-size": "16px", "backgroundColor": "transparent"}, 200);
                }else{
                    $(this).text(arr2[row - 1][cell][0].toFixed(2) + " + " + arr2[row - 1][cell][1].toFixed(2));
                    $(this).animate({"font-size": "16px", "backgroundColor": "transparent"}, 200);
                }
            }else{
                $(this).animate({"font-size": "16px", "backgroundColor": "transparent"}, 200);
            }
        }else{
            $(this).addClass("active");
            if(cell != 0){
                if(!isNaN(arr2[row - 1][cell])){
                    if(cell == 1 || cell == 2 || cell == 7){   
                        $(this).text((arr2[row - 1][cell]).toFixed(1) + " მლ");
                        $(this).animate({"font-size": "18px", "padding": "5px", "padding-left": "8px", "backgroundColor": "#DAAA3B"}, 200);
                    }
                    if(cell == 4 || cell == 5 || cell == 6){   
                        $(this).text((arr2[row - 1][cell]).toFixed(3) + " გ");
                        $(this).animate({"font-size": "18px", "padding": "5px", "padding-left": "8px", "backgroundColor": "#DAAA3B"}, 200);
                    }
                    if(cell == 3){   
                        $(this).text((arr2[row - 1][cell]).toFixed(3));
                        $(this).animate({"font-size": "18px", "padding": "5px", "padding-left": "8px", "backgroundColor": "#DAAA3B"}, 200);
                    }
                }else{
                    if(cell == 4 || cell == 5){
                        $(this).text((arr2[row - 1][cell][0]).toFixed(3) + " + " + (arr2[row - 1][cell][1]).toFixed(3) + " გ");
                        $(this).animate({"font-size": "18px", "backgroundColor": "#DAAA3B"}, 200);
                    }
                    if(cell == 1 || cell == 2){
                        $(this).text((arr2[row - 1][cell][0]).toFixed(1) + " + " + (arr2[row - 1][cell][1]).toFixed(1) + " მლ");
                        $(this).animate({"font-size": "18px", "backgroundColor": "#DAAA3B"}, 200);
                    }
                }
            }else{
                $(this).animate({"font-size": "18px", "backgroundColor": "#DAAA3B"}, 200);
            }
        }
    }
    else if($(this).closest("table").hasClass("table22")){
        if($(this).hasClass("active")){    
            $(this).removeClass("active");
            $(this).animate({"font-size": "16px", "padding": "5px", "padding-left": "8px", "backgroundColor": "transparent"}, 200);
            if(cell != 0){
                $(this).text(arr22[row - 1][cell].toFixed(2));
            }else{
                $(this).text(arr22[row - 1][cell]);
            }
        }else{
            $(this).animate({"font-size": "18px", "padding": "5px", "padding-left": "8px", "backgroundColor": "#DAAA3B"}, 200);
            $(this).addClass("active");
            if(cell != 0){
                if(cell == 2 || cell == 3){
                    $(this).text((arr22[row - 1][cell]).toFixed(3) + " გ");
                }
                else if(cell == 4 || cell == 5){
                    $(this).text((arr22[row - 1][cell]).toFixed(1) + " მლ");
                }
                else if(cell == 1){
                    $(this).text((arr22[row - 1][cell]).toFixed(3));
                }
            }else{
                $(this).text(arr22[row - 1][cell]);
            }
        }
    }
    else if($(this).closest("table").hasClass("table11")){
        if($(this).hasClass("active")){    
            $(this).removeClass("active");
            $(this).animate({"font-size": "16px", "padding": "5px", "padding-left": "8px", "backgroundColor": "transparent"}, 200);
            if(cell != 0){
                $(this).text(arr11[row - 1][cell].toFixed(2));
            }else{
                $(this).text(arr11[row - 1][cell]);
            }
        }else{
            $(this).animate({"font-size": "18px", "padding": "5px", "padding-left": "8px", "backgroundColor": "#DAAA3B"}, 200);
            $(this).addClass("active");
            if(cell != 0){
                if(cell == 2 || cell == 3){
                    $(this).text((arr11[row - 1][cell]).toFixed(3) + " გ");
                }
                else if(cell == 4 || cell == 5){
                    $(this).text((arr11[row - 1][cell]).toFixed(1) + " მლ");
                }
                else if(cell == 1){
                    $(this).text((arr11[row - 1][cell]).toFixed(3));
                }
            }else{
                $(this).text(arr11[row - 1][cell]);
            }
        }
    }
    else if($(this).closest("table").hasClass("table111")){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).animate({"font-size": "16px", "padding": "5px", "padding-left": "8px", "backgroundColor": "transparent"}, 200);
            if(cell != 0){
                if(!isNaN(arr111[row - 1][cell])){
                    $(this).text(arr111[row - 1][cell].toFixed(2));
                }else{
                    $(this).text(arr111[row - 1][cell][0].toFixed(2) + " + " + arr111[row - 1][cell][1].toFixed(2));
                }
            }
        }else{
            $(this).addClass("active");
            $(this).animate({"font-size": "18px", "padding": "5px", "padding-left": "8px", "backgroundColor": "#DAAA3B"}, 200);
            if(cell != 0){
                if(cell == 1 || cell == 2 || cell == 6 || cell == 7){
                    if(!isNaN(arr111[row - 1][cell])){    
                        $(this).text(arr111[row - 1][cell].toFixed(1) + " მლ");
                    }else{
                        $(this).text(arr111[row - 1][cell][0].toFixed(1) +  " + " + arr111[row - 1][cell][1].toFixed(1) + " მლ");
                    }
                }
                else if(cell == 4 || cell == 5){
                    $(this).text(arr111[row - 1][cell].toFixed(3) + " გ");
                }else{
                    $(this).text(arr111[row - 1][cell].toFixed(3));
                }
            }else{
                $(this).text(arr111[row - 1][cell]);
            }
        }
    }
    
    else if($(this).closest("table").hasClass("table222")){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).animate({"font-size": "16px", "padding": "5px", "padding-left": "8px", "backgroundColor": "transparent"}, 200);
            if(cell != 0){
                if(!isNaN(arr222[row - 1][cell])){
                    $(this).text(arr222[row - 1][cell].toFixed(2));
                }else{
                    $(this).text(arr222[row - 1][cell][0].toFixed(2) + " + " + arr222[row - 1][cell][1].toFixed(2));
                }
            }
        }else{
            $(this).addClass("active");
            $(this).animate({"font-size": "18px", "padding": "5px", "padding-left": "8px", "backgroundColor": "#DAAA3B"}, 200);
            if(cell != 0){
                if(cell == 1 || cell == 2 || cell == 6 || cell == 7){
                    if(!isNaN(arr222[row - 1][cell])){    
                        $(this).text(arr222[row - 1][cell].toFixed(1) + " მლ");
                    }else{
                        $(this).text(arr222[row - 1][cell][0].toFixed(1) +  " + " + arr222[row - 1][cell][1].toFixed(1) + " მლ");
                    }
                }
                else if(cell == 4 || cell == 5){
                    $(this).text(arr222[row - 1][cell].toFixed(3) + " გ");
                }else{
                    $(this).text(arr222[row - 1][cell].toFixed(3));
                }
            }else{
                $(this).text(arr222[row - 1][cell]);
            }
        }
    }
});

//on th click
$(".H2O").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("V(H\u2082O)");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("წყლის საწყისი მოცულობა (მლ)");
        $(this).animate({"backgroundColor": "#A5A196"});
    }
});
$(".vC3H7OH").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("V(C\u2083H\u2087OH)");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("იზოპროპილის სპირტის საწყისი მოცულობა (მლ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".x").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("Xi(C\u2083H\u2087OH)");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("იზოპროპილის სპირტის მოლური წილი (x)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".mH2O").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("m(H\u2082O)");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("წყლის საწყისი მასა (გ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".mC3H7OH").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("m(C\u2083H\u2087OH)");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("იზოპროპილის სპირტის საწყისი მასა (გ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".m").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("m");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("ნარევის საბოლოო მასა (გ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".v").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("V");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("ნარევის საბოლოო მოცულობა (მლ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".num").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("#");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("ცდა #:");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".vC2H6O").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("V(C\u2082H\u2086O)");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("ეთილის სპირტის საწყისი მოცულობა (მლ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".x1").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("Xi(C\u2082H\u2086O)");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("ეთილის სპირტის მოლური წილი (x)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".mC2H6O").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("m(C\u2082H\u2086O)");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("ეთილის სპირტის საწყისი მასა (გ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".mm").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("m თ.");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("ნარევის თეორიული მასა (გ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".vv").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("V თ.");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("ნარევის თეორიული მოცულობა (გ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});

$(".M").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("M");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("ნარევის მთლიანი მოლი");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".msx").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("m სხვ.");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("მასის სხვაობა (გ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".vsx").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("V სხვ.");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("მოცულობის სხვაობა (მლ)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});
$(".vW").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).text("V ჭ.");
        $(this).animate({"backgroundColor": "transparent"});
    }else{
        $(this).addClass("active");
        $(this).text("ჭარბი მოცულობა (მლ/მოლი)");
        $(this).animate({"backgroundColor": "#A5A196"})
    }
});

var text = $(".name").text().toUpperCase();
$(".name").text(text);
var text = $(".upcase").text().toUpperCase();
$(".upcase").text(text);
var text = $(".upcase2").text().toUpperCase();
$(".upcase2").text(text);
var text = $(".upcase3").text().toUpperCase();
$(".upcase3").text(text);
var text = $(".upcase4").text().toUpperCase();
$(".upcase4").text(text);
var text = $(".upcase5").text().toUpperCase();
$(".upcase5").text(text);