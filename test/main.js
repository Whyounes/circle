window.onload = function(){
    new Circle( {
        id: "php", 
        width: 10, 
        radius: 60,
        shadow: 7,
        text: "6.5", 
        values: [{percent: 65, color: "#99C"}, {percent: 65, color: "#B7B7EB"}]
    } );

    new Circle( {
        id: "wordpress", 
        width: 7, 
        radius: 60, 
        text: "", 
        values: [
                {percent: 25, color: "#2570A8"},
                {percent: 10, color: "#913B53"},
                {percent: 5, color: "#39ADD1"},
                {percent: 30, color: "#E0AB18"},
                {percent: 7, color: "#665885"},
                {percent: 23, color: "#51B46D"},
       ]
    } );

    new Circle( {
        id: "mysql", 
        width: 3, 
        radius: 60, 
        text: "7", 
        values: [{percent: 70, color: "#AA0"}, {percent: 30, color: "#eee"}]
    } );

}
