// How to use
// click and allow mic access
// select a question with keys 1-9
// press space to start recording
// press space again to end recording

//This code is super mess I'll clean up later
//There might also be some leftover stuff from a copy pasted example for recording if stuff doesn't appear to make sense/be used

let mic, recorder, soundFile;

let state = 0;

let questions = [];
let instructions = [];
let answers = [];
let answerNames = [];

let curQ;
let curQName;

let recording;

let buttons = [];
let allClips = [];

let b2;

let globalKey;

let beep;

let first

function mousePressed(){
  
  if(!first){
  startI.play();
    first=true;
    
  }
  
}

function preload() {

  beep = loadSound("beep.mp3");
  allClips.push(beep);

  for (let i = 0; i < 9; i++) {
    questions.push(loadSound('q-00' + (i + 1) + '.mp3'));
    
  }
  
  
  for (let i = 0; i < 9; i++) {
    
  for (let i = 0; i < 9; i++) {
    allClips.push(questions[i]);
    
  }
    
  }

  startI = loadSound("i1.mp3");
  ins = loadSound("i3.mp3");

  print(allClips);
  
  
  
}

function setup() {


  let container = select('.container');

  noCanvas();
  fill(0);
  text('Enable mic and click the mouse to begin recording', 20, 20);


  mic = new p5.AudioIn();
  mic.start();
  recorder = new p5.SoundRecorder();

  recorder.setInput(mic);
  soundFile = new p5.SoundFile();

  print("button array" + buttons);

  // select("#2", b2);
  // print(b2);
  // b2.mouseClicked(hello);
  

  let b1 = createButton("1");
  b1.mouseClicked(b1Press);
  b1.parent(container);

  let b2 = createButton("2");
  b2.mouseClicked(b2Press);
  b2.parent(container);


  let b3 = createButton("3");
  b3.mouseClicked(b3Press);
  b3.parent(container);


  let b4 = createButton("4");
  b4.mouseClicked(b4Press);
  b4.parent(container);


  let b5 = createButton("5");
  b5.mouseClicked(b5Press);
  b5.parent(container);


  let b6 = createButton("6");
  b6.mouseClicked(b6Press);
  b6.parent(container);


  let b7 = createButton("7");
  b7.mouseClicked(b7Press);
  b7.parent(container);


  let b8 = createButton("8");
  b8.mouseClicked(b8Press);
  b8.parent(container);


  let b9 = createButton("9");
  b9.mouseClicked(b9Press);
  b9.parent(container);


  let star = createButton("*");
  star.mouseClicked(starPress);
  star.parent(container);

  let b0 = createButton("0");
  // pound.mouseClicked(poundPress);
  b0.parent(container);



  let pound = createButton("#");
  pound.mouseClicked(poundPress);
  pound.parent(container);


  // for (let i = 1; i < 9; i++) {
  //   print("#" + i.toString());
  //   // buttons.push(select(i.toString()));
  //   let temp = (select("#" + i.toString()));
  //   // let temp = document.getElementById(i.toString());
  //   print(temp);

  //   buttons.push(temp);
  //   print(buttons);

  // }

  // print(buttons);

  // for (let i = 0; i < buttons.length; i++) {
  //   print("cur button " + buttons[i]);
  //   buttons[i].mousePressed(onButton(buttons[i].id()));
  // }

  // select(" ").mousePressed(onButton(" "));
}

function b1Press() {
  onButton(1);
}
function b2Press() {
  onButton(2);
}
function b3Press() {
  onButton(3);
}
function b4Press() {
  onButton(4);
}
function b5Press() {
  onButton(5);
}
function b6Press() {
  onButton(6);
}
function b7Press() {
  onButton(7);
}
function b8Press() {
  onButton(8);
}
function b9Press() {
  onButton(9);
}

function starPress() {
  onButton("*")
}

function poundPress() {
  onButton("#");
}

function draw() {

  if (recording) {
    background(240, 10, 10);
  } else {

    background(15, 230, 20);
  }
}


function onButton(number) {



  for (let i = 0; i < allClips.length; i++) {
    allClips[i].stop();
  }

  beep.rate(4);
  beep.setVolume(.25);
  beep.play();

  key = number;

  if (key > '0' && key <= '9') {
    print('Hello');

    questions[key - 1].play();

    curQ = key;
    print(curQ);
  }

  if (key === "#" && !recording && mic.enabled) {
    print('recording started');

    beep.rate(2);
    beep.play();

    recording = true;

    curQName = curQ;


    recorder.record(soundFile);

  } else {

    if (key === "#" && recording) {
      print('recording stopped');

      beep.setVolume(.1);
      beep.rate(3);
      beep.play();

      ins.play();

      recording = false;
      recorder.stop();

      answers.push(soundFile);
      answerNames.push(curQName);

      saveSound(answers[0], 'answer q' + answerNames[0])

    }
  }
}