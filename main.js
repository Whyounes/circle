window.onload = function(){

      Circle.generate( {
        id: "#php", 
        width: 10, 
        radius: 60, 
        text: "PHP", 
        values: [{percent: 65, color: "#99C"}, {percent: 35, color: "#B7B7EB"}]
      } );
      Circle.generate( {
        id: "#mysql", 
        width: 10, 
        radius: 60, 
        text: "MySql", 
        values: [{percent: 70, color: "#015A84"}, {percent: 30, color: "#E97B00"}]
      } );
      Circle.generate( {
        id: "#html", 
        width: 10, 
        radius: 60, 
        text: "HTML", 
        values: [{percent: 85, color: "#E44F25"}, {percent: 15, color: "#FFF"}]
      } );

      Circle.generate( {
        id: "#css", 
        width: 10, 
        radius: 60, 
        text: "CSS", 
        values: [{percent: 80, color: "#2177ff"}, {percent: 20, color: "#FFF"}]
      } );
      
      Circle.generate( {
        id: "#shadow1", 
        width: 20, 
        radius: 60, 
        shadow: 20, 
        text: "65%", 
        values: [{percent: 65, color: "#53a93f"}, {percent: 35, color: "#FFF"}]
      } );

      Circle.generate( {
        id: "#shadow2", 
        width: 20, 
        radius: 60,
        shadow: 20, 
        text: "20%", 
        values: [{percent: 20, color: "#2177ff"}, {percent: 80, color: "#FFF"}]
      } );
      
      new th({ th_id: 'nickpettit', wrapper: "treehouse", circle: { width: 40, radius:80 } });

}
