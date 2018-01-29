for (i=1;i<10000;i++){
    console.log(i);
    if(i % 10 === 0){
        console.log("div by 10");
        if(i % 9 === 0){
            console.log("div by 9")
            if(i % 8 === 0){
                console.log("div by 8");
                if(i % 7 === 0){
                    console.log("div by 7");
                    if(i % 6 === 0){
                        console.log("div by 6");
                        if(i % 5 === 0){
                            console.log("div by 5");
                            if(i % 4 === 0){
                                console.log("div by 4");
                                if(i % 3 === 0){
                                    console.log("div by 3");
                                    if(i % 2 === 0){
                                        console.log("div by 1-10!!!!!!!");
                                        alert(i + " is the number you're looking for!!!!!!");
                                        break;

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }



}
