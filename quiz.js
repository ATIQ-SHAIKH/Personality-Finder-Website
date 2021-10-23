function a(){
    let check = 1;
    let thinking = [];
    let feeling = [];
    let extraversion = [];
    let introversion = [];
    let judging = [];
    let perceiving = [];
    let sensing = [];
    let intuition = [];

    for(let i = 1; i<=5; i++){
        for(let j = 0; j<=4; j++){
        if (document.getElementsByName("thinking"+[i])[j].checked == true)	{Selected = document.getElementsByName("thinking"+[i])[j].value;
        thinking.push(Selected);}
        }
    }
    

    for(let i = 1; i<=5; i++){
        for(let j = 0; j<=4; j++){
        if (document.getElementsByName("feeling"+[i])[j].checked == true)	{Selected = document.getElementsByName("feeling"+[i])[j].value;
        feeling.push(Selected)}
        }
    }

    for(let i = 1; i<=5; i++){
        for(let j = 0; j<=4; j++){
        if (document.getElementsByName("extraversion"+[i])[j].checked == true)	{Selected = document.getElementsByName("extraversion"+[i])[j].value;
        extraversion.push(Selected)}
        }
    }

    for(let i = 1; i<=5; i++){
        for(let j = 0; j<=4; j++){
        if (document.getElementsByName("judging"+[i])[j].checked == true)	{Selected = document.getElementsByName("judging"+[i])[j].value;
        judging.push(Selected)}
        }
    }

    for(let i = 1; i<=5; i++){
        for(let j = 0; j<=4; j++){
        if (document.getElementsByName("introversion"+[i])[j].checked == true)	{Selected = document.getElementsByName("introversion"+[i])[j].value;
        introversion.push(Selected)}
        }
    }

    for(let i = 1; i<=5; i++){
        for(let j = 0; j<=4; j++){
        if (document.getElementsByName("perceiving"+[i])[j].checked == true)	{Selected = document.getElementsByName("perceiving"+[i])[j].value;
        perceiving.push(Selected)}
        }
    }

    for(let i = 1; i<=5; i++){
        for(let j = 0; j<=4; j++){
        if (document.getElementsByName("sensing"+[i])[j].checked == true)	{Selected = document.getElementsByName("sensing"+[i])[j].value;
        sensing.push(Selected)}
        }
    }
    for(let i = 1; i<=5; i++){
        for(let j = 0; j<=4; j++){
        if (document.getElementsByName("intuition"+[i])[j].checked == true)	{Selected = document.getElementsByName("intuition"+[i])[j].value;
        intuition.push(Selected)}
        }
    }

    let all = [];

    
        let thinking_avg = thinking.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
          })/5;
        all.push(thinking_avg);
        
        let feeling_avg = feeling.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0)/5;
        all.push(feeling_avg);

        let extraversion_avg = extraversion.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0)/5;
        all.push(extraversion_avg);

        let introversion_avg = introversion.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0)/5;
        all.push(introversion_avg);

        let judging_avg = judging.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0)/5;
        all.push(judging_avg);

        let perceiving_avg = perceiving.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0)/5;
        all.push(perceiving_avg);

        let sensing_avg = sensing.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0)/5;
        all.push(sensing_avg);

        let intuition_avg = intuition.reduce(function(a, b){
            return parseInt(a) + parseInt(b);
        }, 0)/5;
        all.push(intuition_avg);
        
        let top_four = [];
        if(all[0] > all[1]){
            top_four.push("T");
        }
        else{
            top_four.push("F");
        }
        if(all[2] > all[3]){
            top_four.push("E");
        }
        else{
            top_four.push("I");
        }
        if(all[4] > all[5]){
            top_four.push("J");
        }
        else{
            top_four.push("P");
        }
        if(all[6] > all[7]){
            top_four.push("S");
        }
        else{
            top_four.push("N");
        }

        let user_pers = top_four.toString();
        console.log(user_pers);
    

    };

