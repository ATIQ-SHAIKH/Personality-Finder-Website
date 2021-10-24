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
    let email = document.getElementById("inputemail").value;
    console.log(document.getElementById("inputemail").value);

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

        if(user_pers.includes('I') && user_pers.includes('S') && user_pers.includes('T') && user_pers.includes('J')){
            category = "The Inspector";
        }
        if(user_pers.includes('I') && user_pers.includes('S') && user_pers.includes('T') && user_pers.includes('P')){
            category = "The Crafter";
        }
        if(user_pers.includes('I') && user_pers.includes('S') && user_pers.includes('F') && user_pers.includes('J')){
            category = "The Protector";
        }
        if(user_pers.includes('I') && user_pers.includes('S') && user_pers.includes('F') && user_pers.includes('P')){
            category = "The Artist";
        }
        if(user_pers.includes('I') && user_pers.includes('N') && user_pers.includes('F') && user_pers.includes('J')){
            category = "The Advocate";
        }
        if(user_pers.includes('I') && user_pers.includes('N') && user_pers.includes('F') && user_pers.includes('P')){
            category = "The Mediator";
        }
        if(user_pers.includes('I') && user_pers.includes('N') && user_pers.includes('T') && user_pers.includes('J')){
            category = "The Architect";
        }
        if(user_pers.includes('I') && user_pers.includes('N') && user_pers.includes('T') && user_pers.includes('P')){
            category = "The Thinker";
        }
        if(user_pers.includes('E') && user_pers.includes('S') && user_pers.includes('T') && user_pers.includes('P')){
            category = "The Persuader";
        }
        if(user_pers.includes('E') && user_pers.includes('S') && user_pers.includes('T') && user_pers.includes('J')){
            category = "The Director";
        }
        if(user_pers.includes('E') && user_pers.includes('S') && user_pers.includes('F') && user_pers.includes('P')){
            category = "The Performer";
        }
        if(user_pers.includes('E') && user_pers.includes('S') && user_pers.includes('F') && user_pers.includes('J')){
            category = "The Caregiver";
        }
        if(user_pers.includes('E') && user_pers.includes('N') && user_pers.includes('F') && user_pers.includes('P')){
            category = "The Champion";
        }
        if(user_pers.includes('E') && user_pers.includes('N') && user_pers.includes('F') && user_pers.includes('J')){
            category = "The Giver";
        }
        if(user_pers.includes('E') && user_pers.includes('N') && user_pers.includes('T') && user_pers.includes('P')){
            category = "The Debater";
        }
        if(user_pers.includes('E') && user_pers.includes('N') && user_pers.includes('T') && user_pers.includes('J')){
            category = "The Commander";
        }

        let msg = "Working";

        console.log(category);

        send_email(msg,category);
        // window.open("inspector.html", '_blank');

        if(category === "The Inspector"){
            window.open(inspector.html, '_blank');
        }
        if(category === "The Crafter"){
            window.open("crafter.html", '_blank');
        }
        if(category === "The Protector"){
            window.open("protector.html", '_blank');
        }
        if(category === "The Artist"){
            window.open("artist.html", '_blank');
        }
        if(category === "The Advocate"){
            window.open("advocate.html", '_blank');
        }
        if(category === "The Mediator"){
            window.open("mediator.html", '_blank');
        }
        if(category === "The Architect"){
            window.open("architect.html", '_blank');
        }
        if(category === "The Thinker"){
            window.open("thinker.html", '_blank');
        }
        if(category === "The Persuader"){
            window.open("persuader.html", '_blank');
        }
        if(category === "The Director"){
            window.open("director.html", '_blank');
        }
        if(category === "The Performer"){
            window.open("performer.html", '_blank');
        }
        if(category === "The Caregiver"){
            window.open("caregiver.html", '_blank');
        }
        if(category === "The Champion"){
            window.open("champion.html", '_blank');
        }
        if(category === "The Giver"){
            window.open("giver.html", '_blank');
        }
        if(category === "The Debater"){
            window.open("debater.html", '_blank');
        }
        if(category === "The Commander"){
            window.open("commander.html", '_blank');
        }

    

    };


    function send_email(msg, category){
        let email = document.getElementById("inputemail").value;
        console.log(email)
        
        Email.send({
            Host: "smtp.gmail.com",
            Username: "seikakufinder@gmail.com",
            Password: "kzinlswhsgrwinfu",
            To: email,
            From: "seikakufinder@gmail.com",
            Subject: "Results Has been declared through your mail" +email,
            Body: msg + category
          }).then(
            (message) => alert("Mail has been sent!")
          );
        
    }


