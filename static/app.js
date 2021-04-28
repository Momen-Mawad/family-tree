window.onload = function(){
    var df2 = {{ dfJSON|tojson }};
    var df1 = JSON.parse(df2);
    var df = Object.values(df1);

    var df_sub = df.filter(i => i.father === 0);
    console.log(df_sub[0]);

    document.getElementById('label').innerHTML = df_sub[0].first;
    document.getElementById('father').innerHTML = df[df_sub[0].father].first;
    document.getElementById('mother').innerHTML = df[df_sub[0].mother].first;

    console.log(document.getElementById('father'));

    var i = 0;
    var father_first = document.getElementById('father')
    console.log(df.filter(i => i.first === father_first));

    function change_left() {
        i --;
        if(i<0) {i=0};
        console.log(i);
        if(df_sub[i].father==0){
            document.getElementById('label').innerHTML = df_sub[i].first;
            document.getElementById('father').innerHTML = df[df_sub[i].father].first;
            document.getElementById('mother').innerHTML = df[df_sub[i].mother].first;
        };
        return true
    };

    function change_right() {
        i ++;
        if(i>Object.keys(df_sub).length - 1) {i=Object.keys(df_sub).length - 1};
        console.log(i);
        if(df_sub[i].father==0){
            document.getElementById('label').innerHTML = df_sub[i].first;
            document.getElementById('father').innerHTML = df[df_sub[i].father].first;
            document.getElementById('mother').innerHTML = df[df_sub[i].mother].first;
        };
        return true
    };

    document.getElementById('left').onclick = function(){
        change_left();
    };

    document.getElementById('right').onclick = function(){
        change_right();
    };

    function change_father() {
        var father_first = document.getElementById('father')
        var x = df.filter(i => i.first === father_first)
        var df_sub = df.filter(i => i.father === x.father);

    };

    document.getElementById('up').onclick = function(){
        console.log(i);
        if(df_sub[i].father==0){
            document.getElementById('label').innerHTML = df_sub[i].first;
            document.getElementById('father').innerHTML = df[df_sub[i].father].first;
            document.getElementById('mother').innerHTML = df[df_sub[i].mother].first;
        };
        return true
    };
};