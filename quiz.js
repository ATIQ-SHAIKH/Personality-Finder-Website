function evaluate(){
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
        thinking.push(document.form.thinking[i].value);
    }
    document.rewrite(check);
};

document.write("Working")