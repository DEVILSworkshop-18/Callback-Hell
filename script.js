const span = document.getElementById("spans");
    const heading = document.getElementById("header")
    setTimeout(()=>{
        span.innerHTML="10";
        setTimeout(()=>{
            span.innerHTML="9";
            setTimeout(()=>{
                span.innerHTML="8";
                setTimeout(()=>{
                    span.innerHTML="7";
                    setTimeout(()=>{
                        span.innerHTML="6";
                        setTimeout(()=>{
                            span.innerHTML="5";
                            setTimeout(()=>{
                                span.innerHTML="4";
                                setTimeout(()=>{
                                    span.innerHTML="3";
                                    setTimeout(()=>{
                                        span.innerHTML="2";
                                        setTimeout(()=>{
                                            span.innerHTML="1";
                                            setTimeout(()=>{
                                                heading.innerHTML=""
                                                document.body.style.background = "url('https://wallpaperaccess.com/full/1884415.jpg')";
                                                ;

                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)