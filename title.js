var titles = [
    "$ undetek.win", 
    "$ ndetek.win", 
    "$ detek.win", 
    "$ etek.win", 
    "$ tek.win", 
    "$ ek.win", 
    "$ k.win", 
    "$ .win", 
    "$ win", 
    "$ in", 
    "$ n", 
    "$ in", 
    "$ win", 
    "$ .win", 
    "$ k.win", 
    "$ ek.win", 
    "$ tek.win", 
    "$ etek.win", 
    "$ detek.win", 
    "$ undetek.win", 
  ];
  
  function changeTitle() {
    var index = 0; 
    setInterval(function() {
        document.title = titles[index];
        index = (index + 1) % titles.length;
    },
    200); 
  }
  
  changeTitle();
  
