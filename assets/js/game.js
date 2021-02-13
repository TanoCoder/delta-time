(() => { 
  // _________
  // functions
  // _________  
  
    
  function FirstDraw(){ 
    // clear canvas        
    ctx1.clearRect(0, 0, canvas_240_no_dt.width, canvas_240_no_dt.height); 
    ctx2.clearRect(0, 0, canvas_60_no_dt.width, canvas_60_no_dt.height); 
    ctx3.clearRect(0, 0, canvas_30_no_dt.width, canvas_30_no_dt.height); 
    ctx4.clearRect(0, 0, canvas_240_with_dt.width, canvas_240_with_dt.height); 
    ctx5.clearRect(0, 0, canvas_60_with_dt.width, canvas_60_with_dt.height); 
    ctx6.clearRect(0, 0, canvas_30_with_dt.width, canvas_30_with_dt.height); 
   
    // draw circle at current position    
    // ctx1
    ctx1.beginPath();
    ctx1.arc(20, y1, radius, 0, 2 * Math.PI);
    ctx1.fillStyle = "white";
    ctx1.fill();
    ctx1.stroke();          


    // 2
    ctx2.beginPath();
    ctx2.arc(x2, y2, radius, 0, 2 * Math.PI);
    ctx2.fillStyle = "white";
    ctx2.fill();
    ctx2.stroke();     

    // 3
    ctx3.beginPath();
    ctx3.arc(x3, y3, radius, 0, 2 * Math.PI);
    ctx3.fillStyle = "white";
    ctx3.fill();
    ctx3.stroke();     

    // 4
    ctx4.beginPath();
    ctx4.arc(x4, y4, radius, 0, 2 * Math.PI);
    ctx4.fillStyle = "white";
    ctx4.fill();
    ctx4.stroke();     

    // 5
    ctx5.beginPath();
    ctx5.arc(x5, y5, radius, 0, 2 * Math.PI);
    ctx5.fillStyle = "white";
    ctx5.fill();
    ctx5.stroke();     

    // 6
    ctx6.beginPath();
    ctx6.arc(x6, y6, radius, 0, 2 * Math.PI);
    ctx6.fillStyle = "white";
    ctx6.fill();
    ctx6.stroke();     
  }
  
  function FirstDrawLeft(){ 
    // clear canvas        
    ctx1.clearRect(0, 0, canvas_240_no_dt.width, canvas_240_no_dt.height); 
    ctx2.clearRect(0, 0, canvas_60_no_dt.width, canvas_60_no_dt.height); 
    ctx3.clearRect(0, 0, canvas_30_no_dt.width, canvas_30_no_dt.height); 
       
    // draw circle at current position    
    // ctx1
    ctx1.beginPath();
    ctx1.arc(20, y1, radius, 0, 2 * Math.PI);
    ctx1.fillStyle = "white";
    ctx1.fill();
    ctx1.stroke();          


    // 2
    ctx2.beginPath();
    ctx2.arc(x2, y2, radius, 0, 2 * Math.PI);
    ctx2.fillStyle = "white";
    ctx2.fill();
    ctx2.stroke();     

    // 3
    ctx3.beginPath();
    ctx3.arc(x3, y3, radius, 0, 2 * Math.PI);
    ctx3.fillStyle = "white";
    ctx3.fill();
    ctx3.stroke();     

  }
  
  function FirstDrawRight(){ 
    // clear canvas            
    ctx4.clearRect(0, 0, canvas_240_with_dt.width, canvas_240_with_dt.height); 
    ctx5.clearRect(0, 0, canvas_60_with_dt.width, canvas_60_with_dt.height); 
    ctx6.clearRect(0, 0, canvas_30_with_dt.width, canvas_30_with_dt.height); 
       
    // 4
    ctx4.beginPath();
    ctx4.arc(x4, y4, radius, 0, 2 * Math.PI);
    ctx4.fillStyle = "white";
    ctx4.fill();
    ctx4.stroke();     

    // 5
    ctx5.beginPath();
    ctx5.arc(x5, y5, radius, 0, 2 * Math.PI);
    ctx5.fillStyle = "white";
    ctx5.fill();
    ctx5.stroke();     

    // 6
    ctx6.beginPath();
    ctx6.arc(x6, y6, radius, 0, 2 * Math.PI);
    ctx6.fillStyle = "white";
    ctx6.fill();
    ctx6.stroke();     
  }
  // ________________
  // setting up canvas
  // ________________
  
  // canvas init
  const canvas_240_no_dt = document.getElementById("canvas_240_no_dt");
  const canvas_60_no_dt = document.getElementById("canvas_60_no_dt");
  const canvas_30_no_dt = document.getElementById("canvas_30_no_dt");
  const canvas_240_with_dt = document.getElementById("canvas_240_with_dt");
  const canvas_60_with_dt = document.getElementById("canvas_60_with_dt");
  const canvas_30_with_dt = document.getElementById("canvas_30_with_dt");

  const ctx1 = canvas_240_no_dt.getContext("2d"); 
  const ctx2 = canvas_60_no_dt.getContext("2d"); 
  const ctx3 = canvas_30_no_dt.getContext("2d"); 
  const ctx4 = canvas_240_with_dt.getContext("2d"); 
  const ctx5 = canvas_60_with_dt.getContext("2d"); 
  const ctx6 = canvas_30_with_dt.getContext("2d"); 
      
  // ___________________________________
  // setting up the Global variables
  // ___________________________________
  
  let idAnimation1 = null;
  let idAnimation2 = null;
  let idAnimation3 = null;
  let idAnimation4 = null;
  let idAnimation5 = null;
  let idAnimation6 = null;

  let timeStart1;
  let timeEnd1;
  let duration1;
  let htmlDuration1 = document.getElementById("durationNoDt240");

  let timeStart2;
  let timeEnd2;
  let duration2;
  let htmlDuration2 = document.getElementById("durationNoDt60");

  let timeStart3;
  let timeEnd3;
  let duration3;
  let htmlDuration3 = document.getElementById("durationNoDt30");

  let timeStart4;
  let timeEnd4;
  let duration4;
  let htmlDuration4 = document.getElementById("durationDt240");

  let timeStart5;
  let timeEnd5;
  let duration5;
  let htmlDuration5 = document.getElementById("durationDt60");

  let timeStart6;
  let timeEnd6;
  let duration6;
  let htmlDuration6 = document.getElementById("durationDt30");

  let isFinishedAnimation = [];
  isFinishedAnimation[0] = true;
  isFinishedAnimation[1] = true;
  isFinishedAnimation[2] = true;
  isFinishedAnimation[3] = true;
  isFinishedAnimation[4] = true;
  isFinishedAnimation[5] = true;

  let pause = false;

  // init circle position
  // --------------------  
  let [x1, x2, x3, x4, x5, x6] = [20, 20, 20, 20, 20, 20]; // declaring multiple variables in one line
  let [y1, y2, y3, y4, y5, y6] = [40, 40, 40, 40, 40, 40];  
  let radius = 10;

  // init speed without dt
  // ---------------------
  let speed = 4;
  let htmlSpeed = document.getElementById("speed");
  htmlSpeed.value = speed;
  htmlSpeed.addEventListener("focus", () =>{
    htmlSpeed.select();
  });

  htmlSpeed.addEventListener("change",() => {
    speed = Number(htmlSpeed.value);    
    //alert(`speed is now : ${speed}`);
  });
    
  // init speed based on dt
  // ----------------------
  let speedBasedOnDt = 240;
  let htmlSpeedBasedOnDt = document.getElementById("speedBasedOnDt");
  htmlSpeedBasedOnDt.value = speedBasedOnDt;
  htmlSpeedBasedOnDt.addEventListener("focus", () =>{
    htmlSpeedBasedOnDt.select();
  });

  htmlSpeedBasedOnDt.addEventListener("change",() => {
    speedBasedOnDt = Number(htmlSpeedBasedOnDt.value);    
    //alert(`speed based on delta time is now : ${speedBasedOnDt}`);
  });
  

  FirstDraw();

  let countAllFinished = 0;

  function clearHtmlDuration(){
    htmlDuration1.innerText = "";
    htmlDuration2.innerText = "";
    htmlDuration3.innerText = "";
    htmlDuration4.innerText = "";
    htmlDuration5.innerText = "";
    htmlDuration6.innerText = "";
  }
  
  // Event listenner to reset first draw 
  document.getElementById("div_reset").addEventListener("click", () =>{  
    
    countAllFinished = 0;
    isFinishedAnimation.forEach((arr) => {
      if(arr){
        countAllFinished ++;      
      }
    });

    if(countAllFinished == 6 ){
      x1 = 20;
      x2 = 20;
      x3 = 20;
      x4 = 20;
      x5 = 20;
      x6 = 20;
      
      lastTimeFrameC3 = 0;
      fpsC3 = 30;
      intervalBetweenFrameC3 = (1000 / fpsC3 / 1000); // get interval in milliseconds
      gapBetweenFrameC3 = 0.0;
      acuGapBetweenFrameC3 = 0.0;

      dt240 = 0;
      last240 = performance.now();

      dt = 0;
      last = performance.now();

      dt30 = 0;
      last30 = performance.now();
      
      clearHtmlDuration();
      FirstDraw();    

      pause = false;

    } else {
      alert('Wait until the end of the simulation');
      pause = true;
    }

  });    

  // Event listenner to start simulation left
  document.getElementById("div_run_left").addEventListener("click", () =>{   
    countAllFinished = 0;
    isFinishedAnimation.forEach((arr) => {
      if(arr){
        countAllFinished ++;        
      }
    });

    if(countAllFinished == 6 ){
      x1 = 20;
      x2 = 20;
      x3 = 20;
      x4 = 20;
      x5 = 20;
      x6 = 20;

      lastTimeFrameC3 = 0;
      fpsC3 = 30;
      intervalBetweenFrameC3 = (1000 / fpsC3 / 1000); // get interval in milliseconds
      gapBetweenFrameC3 = 0.0;
      acuGapBetweenFrameC3 = 0.0;

      dt240 = 0;
      last240 = performance.now();

      dt = 0;
      last = performance.now();

      dt30 = 0;
      last30 = performance.now();

      htmlDuration1.innerText = "";
      htmlDuration2.innerText = "";
      htmlDuration3.innerText = "";

      FirstDrawLeft();  
      pause = false;
      // calling canvas left 1, 2, 3
      timeStart1 = performance.now();      
      window.requestAnimationFrame(withoutDt240Fps);

      timeStart2 = performance.now();
      window.requestAnimationFrame(withoutDt60Fps);   

      timeStart3 = performance.now();
      window.requestAnimationFrame(withoutDt30Fps);   

    } else {
      alert('Wait until the end of simulation');
      pause = true;
    }    
     
  });    // end run left
     
  // Event listenner to start simulation
  document.getElementById("div_run").addEventListener("click", () =>{   
    countAllFinished = 0;
    isFinishedAnimation.forEach((arr) => {
      if(arr){
        countAllFinished ++;        
      }
    });

    if(countAllFinished == 6 ){
      x1 = 20;
      x2 = 20;
      x3 = 20;
      x4 = 20;
      x5 = 20;
      x6 = 20;

      lastTimeFrameC3 = 0;
      fpsC3 = 30;
      intervalBetweenFrameC3 = (1000 / fpsC3 / 1000); // get interval in milliseconds
      gapBetweenFrameC3 = 0.0;
      acuGapBetweenFrameC3 = 0.0;

      dt240 = 0;
      last240 = performance.now();

      dt = 0;
      last = performance.now();

      dt30 = 0;
      last30 = performance.now();

      clearHtmlDuration();    
      FirstDraw(); 
      pause = false; 
      // calling canvas 1, 2, 3...
      timeStart1 = performance.now();      
      window.requestAnimationFrame(withoutDt240Fps);

      timeStart2 = performance.now();
      window.requestAnimationFrame(withoutDt60Fps);   

      timeStart3 = performance.now();
      window.requestAnimationFrame(withoutDt30Fps);   

      timeStart4 = performance.now();
      window.requestAnimationFrame(withDt240Fps);  

      timeStart5 = performance.now();
      window.requestAnimationFrame(withDt60Fps);  

      timeStart6 = performance.now();
      window.requestAnimationFrame(withDt30Fps);  

    } else {
      alert('Wait until the end of simulation');
      pause = true;
    }    
     
  });    // end run all

  // Event listenner to start simulation right
  document.getElementById("div_run_right").addEventListener("click", () =>{   
    countAllFinished = 0;
    isFinishedAnimation.forEach((arr) => {
      if(arr){
        countAllFinished ++;        
      }
    });

    if(countAllFinished == 6 ){
      x1 = 20;
      x2 = 20;
      x3 = 20;
      x4 = 20;
      x5 = 20;
      x6 = 20;

      lastTimeFrameC3 = 0;
      fpsC3 = 30;
      intervalBetweenFrameC3 = (1000 / fpsC3 / 1000); // get interval in milliseconds
      gapBetweenFrameC3 = 0.0;
      acuGapBetweenFrameC3 = 0.0;

      dt240 = 0;
      last240 = performance.now();

      dt = 0;
      last = performance.now();

      dt30 = 0;
      last30 = performance.now();

      htmlDuration4.innerText = "";
      htmlDuration5.innerText = "";
      htmlDuration6.innerText = "";

      FirstDrawRight();  
      // calling canvas right 4, 5, 6
      timeStart4 = performance.now();
      window.requestAnimationFrame(withDt240Fps);  

      timeStart5 = performance.now();
      window.requestAnimationFrame(withDt60Fps);  

      timeStart6 = performance.now();
      window.requestAnimationFrame(withDt30Fps);  
      

    } else {
      alert('Wait until the end of simulation');
    }    
     
  });    // end run right

  // ---------------
  // get browser fps
  // ---------------
  let htmlBrowserFps = document.getElementById("browserFps");
  let fpsBrowser = 0.0; 
  
  let gapFpsBrowserNow = 0.0;
  let timeFrameBro = 0.0;
  let lastTimeFrameBro = 0.0;

  window.requestAnimationFrame(getBrowserFps);  

  function getBrowserFps(timeFrameBro){

    gapFpsBrowserNow = timeFrameBro - lastTimeFrameBro;
    
    lastTimeFrameBro = timeFrameBro;
    window.requestAnimationFrame(getBrowserFps);  
  }

  setInterval(() => {
    //console.log(1000 / gapFpsBrowserNow);
    fpsBrowser = (1000 / gapFpsBrowserNow);
    htmlBrowserFps.innerHTML = fpsBrowser.toFixed(2) + " FPS";

  }, 1000);
  // -------------------
  // END get browser fps
  // -------------------

  // ------------------------------------------------
  // Canvas 1 without delta time and simulate 240 fps
  // ------------------------------------------------
  
  // Attention 
    // le Browser ne sais pas suivre une cadance supérieur à sa capacité de FPS
    // donc pour simuler un 240 fps sur un browser de 60 fps
    // on multipliera par 4 tout simplement la vitesse initialement prévu
    // pour le déplacement de x sur un fps de 60.
  function withoutDt240Fps() {  
    
    isFinishedAnimation[0] = false;
           
    if (x1 < 469){
      // update
      // ------        
      x1 = x1 + (speed * 4); 
      
       // draw
      // ----
      ctx1.clearRect(0, 0, canvas_240_no_dt.width, canvas_240_no_dt.height); // clear canvas

      // draw circle at current position    
      // ctx1
      ctx1.beginPath();
      ctx1.arc(x1, y1, radius, 0, 2 * Math.PI);
      ctx1.fillStyle = "red";
      ctx1.fill();
      ctx1.stroke();              

      window.requestAnimationFrame(withoutDt240Fps);          
    
    } else {
      // stop      
      isFinishedAnimation[0] = true;
      timeEnd1 = performance.now();      
      duration1 = (timeEnd1 - timeStart1) / 1000;
      //console.log('duration1: ' + duration1 + ' secondes');
      //console.log('canvas 1 simulation is finished');
      htmlDuration1.innerText = duration1.toFixed(2) + ' sec';
    }    
  }      
  // ------------------------------------------------
  // END Canvas 1 without delta time and simulate 240 fps
  // ------------------------------------------------
  

  // ------------------------------------------------
  // Canvas 2 without delta time and simulate 60 fps
  // ------------------------------------------------
  function withoutDt60Fps() {   
    
    isFinishedAnimation[1] = false;
            
    if (x2 < 481){
      // update
      // ------        
      x2 = x2 + speed; 

       // draw
      // ----
      ctx2.clearRect(0, 0, canvas_60_no_dt.width, canvas_60_no_dt.height); // clear canvas

      // draw circle at current position    
      // ctx2
      ctx2.beginPath();
      ctx2.arc(x2, y2, radius, 0, 2 * Math.PI);
      ctx2.fillStyle = "green";
      ctx2.fill();
      ctx2.stroke();              

      window.requestAnimationFrame(withoutDt60Fps);          
    
    } else {
      // stop      
      isFinishedAnimation[1] = true;
      timeEnd2 = performance.now();      
      duration2 = (timeEnd2 - timeStart2) / 1000;
      //console.log('duration2: ' + duration2 + ' secondes');
      //console.log('canvas 2 simulation is finished');
      htmlDuration2.innerText = duration2.toFixed(2) + ' sec';
    }             
  }   
  // ------------------------------------------------
  // END Canvas 2 without delta time and simulate 60 fps
  // ------------------------------------------------
  

  // ------------------------------------------------
  // Canvas 3 without delta time and simulate 30 fps
  // ------------------------------------------------
    
    function withoutDt30Fps() {  
    
      isFinishedAnimation[2] = false;
             
      if (x3 < 481){
        // update
        // ------        
        x3 = x3 + (speed /2); 
        
         // draw
        // ----
        ctx3.clearRect(0, 0, canvas_30_no_dt.width, canvas_30_no_dt.height); // clear canvas
  
        // draw circle at current position    
        // ctx3
        ctx3.beginPath();
        ctx3.arc(x3, y3, radius, 0, 2 * Math.PI);
        ctx3.fillStyle = "red";
        ctx3.fill();
        ctx3.stroke();              
  
        window.requestAnimationFrame(withoutDt30Fps);          
      
      } else {
        // stop      
        isFinishedAnimation[2] = true;
        timeEnd3 = performance.now();      
        duration3 = (timeEnd3 - timeStart3) / 1000;
        //console.log('duration3: ' + duration3 + ' secondes');
        //console.log('canvas 3 simulation is finished');
        htmlDuration3.innerText = duration3.toFixed(2) + ' sec';
      }    
    }      
    // ------------------------------------------------
    // END Canvas 3 without delta time and simulate 30 fps
    // ------------------------------------------------
  

  // ------------------------------------------------
  // Canvas 4 with delta time Automatic regulation for all fps   
  // ------------------------------------------------

  // Delta Time
  // ----------
  let dt240;
  let last240;
  let hrt240;

  // Delta Time init var
  dt240 = 0;
  last240 = performance.now();
  
  function withDt240Fps(hrt240) { 
    // hrt est le timestamp du callback de requestAnimationFrame(gameloop) 

    // Delta Time
    // to keep same speed in all computer
    // all moving element defined variable speed will multiply the dt in the update code... 
    dt240 = (hrt240 - last240) / 1000; 
    
    isFinishedAnimation[3] = false;
            
    if (x4 < 481){
      // update
      // ------        
      x4 = x4 + (speedBasedOnDt * dt240); 
      
      //console.log('dt240: ' + dt240);
      //console.log('x4: ' + x4);

      // draw
      // ----
      ctx4.clearRect(0, 0, canvas_240_with_dt.width, canvas_240_with_dt.height); // clear canvas

      // draw circle at current position    
      // ctx4
      ctx4.beginPath();
      ctx4.arc(x4, y4, radius, 0, 2 * Math.PI);
      ctx4.fillStyle = "green";
      ctx4.fill();
      ctx4.stroke();  
      
      //idAnimation4 = window.requestAnimationFrame(withDt240Fps);          
      window.requestAnimationFrame(withDt240Fps);          
    
    } else {
      // stop                  
      timeEnd4 = performance.now();      
      duration4 = (timeEnd4 - timeStart4) / 1000;
      //console.log('duration4: ' + duration4 + ' secondes');
      //console.log('canvas 4 simulation is finished');
      htmlDuration4.innerText = duration4.toFixed(2) + ' sec';
      isFinishedAnimation[3] = true;

      //cancelAnimationFrame(idAnimation4);
    }    

      // for dt calcul
      // hrt is last time when requestAnimationFrame was called
      last240 = hrt240;            

  }   
  // ------------------------------------------------
  // END Canvas 4 with delta time Automatic regulation for all fps 
  // ------------------------------------------------

  // ------------------------------------------------
  // Canvas 5 with delta time Automatic regulation for all fps    
  // ------------------------------------------------

  // Delta Time
  // ----------
  let dt;
  let last;
  let hrt;

  // Delta Time init var
  dt = 0;
  last = performance.now();
  
  function withDt60Fps(hrt) { 
    
      // hrt est le timestamp du callback de requestAnimationFrame(gameloop) 

      // Delta Time
      // to keep same speed in all computer
      // all moving element defined variable speed will multiply the dt in the update code... 
      dt = (hrt - last) / 1000; 
      //console.log(dt);
      
      isFinishedAnimation[4] = false;
              
      if (x5 < 481){
        // update
        // ------        
        x5 = x5 + (speedBasedOnDt * dt); 
        
        //console.log('dt: ' + dt);
        //console.log('x5: ' + x5);

        // draw
        // ----
        ctx5.clearRect(0, 0, canvas_60_with_dt.width, canvas_60_with_dt.height); // clear canvas

        // draw circle at current position    
        // ctx5
        ctx5.beginPath();
        ctx5.arc(x5, y5, radius, 0, 2 * Math.PI);
        ctx5.fillStyle = "green";
        ctx5.fill();
        ctx5.stroke();  
        
        //idAnimation4 = window.requestAnimationFrame(withDt240Fps);          
        window.requestAnimationFrame(withDt60Fps);          
      
      } else {
        // stop                  
        timeEnd5 = performance.now();      
        duration5 = (timeEnd5 - timeStart5) / 1000;
        //console.log('duration5: ' + duration5 + ' secondes');
        //console.log('canvas 5 simulation is finished');
        htmlDuration5.innerText = duration5.toFixed(2) + ' sec';
        isFinishedAnimation[4] = true;

        //cancelAnimationFrame(idAnimation5);
      }    

        // for dt calcul
        // hrt is last time when requestAnimationFrame was called
        last = hrt;        
  }   
  // ------------------------------------------------
  // END Canvas 5 with delta time Automatic regulation for all fps 
  // ------------------------------------------------
  
  // ------------------------------------------------
  // Canvas 6 with delta time Automatic regulation for all fps   
  // ------------------------------------------------

  // Delta Time
  // ----------
  let dt30;
  let last30;
  let hrt30;

  // Delta Time init var
  dt30 = 0;
  last30 = performance.now();
  
  function withDt30Fps(hrt30) { 
    // hrt est le timestamp du callback de requestAnimationFrame(gameloop) 

    // Delta Time
    // to keep same speed in all computer
    // all moving element defined variable speed will multiply the dt in the update code... 
    dt30 = (hrt30 - last30) / 1000; 
    
    isFinishedAnimation[5] = false;
            
    if (x6 < 481){
      // update
      // ------        
      x6 = x6 + (speedBasedOnDt * dt30); 
      
      //console.log('dt30: ' + dt30);
      //console.log('x6: ' + x6);

      // draw
      // ----
      ctx6.clearRect(0, 0, canvas_30_with_dt.width, canvas_30_with_dt.height); // clear canvas

      // draw circle at current position    
      // ctx6
      ctx6.beginPath();
      ctx6.arc(x6, y6, radius, 0, 2 * Math.PI);
      ctx6.fillStyle = "green";
      ctx6.fill();
      ctx6.stroke();  
      
      //idAnimation4 = window.requestAnimationFrame(withDt240Fps);          
      window.requestAnimationFrame(withDt30Fps);          
    
    } else {
      // stop                  
      timeEnd6 = performance.now();      
      duration6 = (timeEnd6 - timeStart6) / 1000;
      //console.log('duration6: ' + duration6 + ' secondes');
      //console.log('canvas 6 simulation is finished');
      htmlDuration6.innerText = duration5.toFixed(2) + ' sec';
      isFinishedAnimation[5] = true;

      //cancelAnimationFrame(idAnimation6);
    }    

      // for dt calcul
      // hrt is last time when requestAnimationFrame was called
      last30 = hrt30;            

  }   
  // ------------------------------------------------
  // END Canvas 6 with delta time Automatic regulation for all fps 
  // ------------------------------------------------


})();