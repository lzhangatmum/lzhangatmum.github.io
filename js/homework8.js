function filterString(str,fstr){
    return str.replace(fstr, "");
}

console.log(filterString("This house is not nice!","not"));


function bubble_Sort(a){
    var swapp;
    var n =a.length-1;
    var x =a;
    do{
        swapp = false;
        for (let i = 0; i < n; i++) {
            if (x[i] < x[i+1]){
                var  temp = x[i];
                x[i] = x[i+1];
                x[i+1] = temp;
                swapp = true;
            }
        }
        n--;
    }while(swapp);
    return x;
}