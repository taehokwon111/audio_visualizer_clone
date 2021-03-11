
let canvas, ctx, center_x, center_y, radius, bars, 
    x_end, y_end, bar_height, bar_width,
    frequency_array;
 
bars = 100;
bar_width = 20;
 
function initPage(){
    
    audio = new Audio();
    context = new (window.AudioContext || window.webkitAudioContext)();
    analyser = context.createAnalyser();
    

    audio.src = "/audio/test.mp3"; // 음악 파일 경로
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
 
    
    frequency_array = new Uint8Array(analyser.frequencyBinCount);
    
    audio.play();
    audio.volume = 0.2;
    animationLooper();
    alert("흐에!!!")
}
 
function animationLooper(){
    
    //장치 크기로 설정
    canvas = document.getElementById("renderer");
    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight ;
    ctx = canvas.getContext("2d");
    
    // 창의 중심을 찾아서 크기조절
    center_x = canvas.width / 2;
    center_y = canvas.height / 2;
    radius = 150;
    
    // 배경스타일 지정
    var gradient = ctx.createLinearGradient(0,0,0,canvas.height);
    gradient.addColorStop(0,"skyblue");
    gradient.addColorStop(1,"#002A47");
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    //원 그리기
    ctx.beginPath();
    ctx.arc(center_x,center_y,radius,0,2*Math.PI);
    ctx.stroke();
    
    analyser.getByteFrequencyData(frequency_array);
    for(var i = 0; i < bars; i++){
        
        //원을 같은 부분으로 나눔
        rads = Math.PI * 2 / bars;
        
        bar_height = frequency_array[i]*0.7;
        
        // set coordinates
        x = center_x + Math.cos(rads * i) * (radius);
	y = center_y + Math.sin(rads * i) * (radius);
        x_end = center_x + Math.cos(rads * i)*(radius + bar_height);
        y_end = center_y + Math.sin(rads * i)*(radius + bar_height);
        
        //막대그리기, 막대그리는 함수 호출
        drawBar(x, y, x_end, y_end, bar_width,frequency_array[i]);
    
    }
    window.requestAnimationFrame(animationLooper);
}
 
// 막대그리기
function drawBar(x1, y1, x2, y2, width, frequency){
    
    var lineColor = "rgb(" + frequency + ", " + frequency + ", " + 60 + ")";
    
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}