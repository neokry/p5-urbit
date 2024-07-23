let paletteNames = [
  "UGO",
  "NIEMEYER",
  "$BLIMP",
  "URBLON",
  "AKONWORLD",
  "DEADHEAD",
  "CANDOMBLÉ",
  "RATHAUS",
  "MC GORDÃO",
  "NOCK ́D UP",
  "BABILONIA",
  "JACAREZINHO",
  "HELIOPOLIS",
  "CIDADE DE DEUS",
  " VILLA 31",
  "LEKKI PARK",
  "BRONX",
  "TURKS & CAICOS",
  "SI ROMO",
  "WICRUM WICRUN",
];

let palettes = [
  [
    [
      [238, 214, 0],
      [63, 0, 97],
      [244, 1, 116],
      [215, 0, 137],
      [0, 103, 138],
    ],
    "UGO",
  ],
  [
    [
      [242, 48, 65],
      [191, 44, 71],
      [115, 41, 55],
      [242, 139, 48],
      [242, 100, 48],
    ],
    "NIEMEYER",
  ],
  [
    [
      [43, 84, 141],
      [39, 144, 90],
      [234, 50, 104],
      [255, 230, 0],
      [132, 170, 28],
    ],
    "$BLIMP",
  ],
  [
    [
      [4, 119, 191],
      [3, 88, 140],
      [2, 56, 89],
      [5, 242, 219],
      [3, 140, 90],
    ],
    "URBLON",
  ],
  [
    [
      [122, 119, 140],
      [1, 3, 38],
      [17, 20, 38],
      [54, 60, 89],
      [242, 242, 242],
    ],
    "AKONWORLD",
  ],
  [
    [
      [242, 73, 104],
      [242, 46, 138],
      [242, 34, 169],
      [242, 93, 39],
      [23, 28, 240],
    ],
    "DEADHEAD",
  ],
  [
    [
      [35, 43, 35],
      [166, 36, 60],
      [72, 30, 89],
      [51, 89, 57],
      [242, 193, 46],
    ],
    "CANDOMBLÉ",
  ],
  [
    [
      [97, 166, 65],
      [169, 191, 136],
      [62, 64, 52],
      [242, 229, 41],
      [217, 181, 4],
    ],
    "RATHAUS",
  ],
  [
    [
      [13, 13, 12],
      [115, 103, 88],
      [140, 126, 109],
      [89, 74, 60],
      [140, 86, 74],
    ],
    "MC GORDÃO",
  ],
  [
    [
      [67, 217, 90],
      [6, 191, 18],
      [119, 217, 126],
      [193, 242, 179],
      [242, 242, 242],
    ],
    "NOCK ́D UP",
  ],
  [
    [
      [2, 40, 115],
      [2, 40, 89],
      [3, 140, 51],
      [2, 115, 42],
      [217, 181, 4],
    ],
    "BABILONIA",
  ],
  [
    [
      [221, 0, 119],
      [0, 187, 255],
      [255, 255, 5],
      [255, 170, 0],
      [255, 51, 68],
    ],
    "JACAREZINHO",
  ],
  [
    [
      [3, 103, 166],
      [3, 166, 150],
      [242, 226, 5],
      [242, 203, 5],
      [242, 80, 65],
    ],
    "HELIOPOLIS",
  ],
  [
    [
      [6, 115, 2],
      [5, 89, 2],
      [3, 64, 1],
      [2, 38, 1],
      [13, 13, 13],
    ],
    "CIDADE DE DEUS",
  ],
  [
    [
      [242, 188, 27],
      [242, 165, 22],
      [242, 137, 7],
      [242, 199, 174],
      [166, 75, 41],
    ],
    "VILLA 31",
  ],
  [
    [
      [2, 115, 94],
      [2, 115, 62],
      [3, 140, 62],
      [174, 191, 147],
      [202, 217, 89],
    ],
    "LEKKI PARK",
  ],
  [
    [
      [217, 4, 103],
      [191, 4, 126],
      [89, 2, 59],
      [2, 83, 115],
      [78, 217, 203],
    ],
    "BRONX",
  ],
  [
    [
      [3, 76, 140],
      [17, 93, 140],
      [240, 241, 242],
      [242, 196, 56],
      [242, 180, 65],
    ],
    "TURKS & CAICOSO",
  ],
  [
    [
      [204, 198, 0],
      [153, 151, 77],
      [255, 202, 26],
      [90, 154, 255],
      [0, 133, 204],
    ],
    "SI ROMO",
  ],
  [
    [
      [6, 115, 104],
      [6, 64, 58],
      [1, 13, 0],
      [140, 140, 128],
      [0, 90, 113],
    ],
    "WICRUM WICRUN",
  ],
];

let colorPalette;
let colorPaletteName;
let shapeGradientImage;
let canvas;
let canvasWidth = 1720;
let canvasHeight = 2400;
let idMask;
let idGradientImage;
let font;
let fontSize = 90;
let textBrush;
let brushPath;
let brushType;
let filterType;

let metadata = {};

function preload() {
  font = loadFont("fonts/APL333FAVELA-Thicc.otf");
}

const urlParams = new URLSearchParams(window.location.search);
const blockHash = urlParams.get("prevRandao");
const urbitID = urlParams.get("urbitId");
const tokenID = urlParams.get("tokenId");

function setup() {
  randomSeed((blockHash % 1000) * tokenID + tokenID * 130);

  textAlign(CENTER);

  canvas = createCanvas(canvasWidth, canvasHeight);
  chooseColors();

  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  noStroke();

  //select background
  let backgroundType = random([
    "horizontal",
    "vertical",
    "horizontal",
    "vertical",
    "horizontal",
    "vertical",
  ]);
  // backgroundGradient("horizontal")
  // backgroundGradient("vertical")
  backgroundGradient(backgroundType);

  //select brush type
  //brushType = random(["horizontal","vertical",'glitch','time'])
  brushType = random([
    "time",
    "time",
    "time",
    "glitch",
    "vertical",
    "horizontal",
    "horizontal",
    "time",
    "time",
    "time",
    "time",
    "time",
    "time",
    "glitch",
    "vertical",
    "horizontal",
    "horizontal",
    "time",
    "time",
    "time",
  ]);
  // brushType = 'time'
  // textBrush = new textGradientBrush('horizontal');
  // textBrush = new textGradientBrush('vertical');
  // textBrush = new textGradientBrush('glitch');
  // textBrush = new textGradientBrush('time');
  textBrush = new textGradientBrush(brushType);

  brushPath = new brushPathMachine();
  // brushPath.drawLine();

  //let paths = floor(random(1,6));
  let paths = random([
    1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 1, 2, 2, 3, 3,
    3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6,
  ]);

  console.log("total paths to draw: " + paths);
  for (let i = 0; i < paths; i++) {
    brushPath.drawPath();
  }

  // filterType = random(['color_distance','sampling','color_distance','sampling'])
  // filterType = 'none'
  // filterType = 'color_distance'
  // filterType = 'sampling'

  //write metadata
  metadata.tokenID = tokenID;
  metadata.urbitID = urbitID;
  metadata.palette = colorPaletteName;
  metadata.brush = brushType;
  metadata.backgroundGradient = backgroundType;
  applyFilter();
  metadata.filterType = filterType;
  metadata.paths = paths;
  console.log("token ID: " + tokenID);
  console.log(metadata);

  //XXX
  //this automatically downloads the PNG of the image at the end of generation
  //it also automatically downloads the metadata
  //you will want to comment this out before deploying...
  //downloadVisualArt();
}

//https://www.youtube.com/watch?v=-MUOweQ6wac
function draw() {
  // if(mouseIsPressed)
  // {
  //   textBrush.draw();
  // }
  // else
  // {
  //   textBrush.initialText = true;
  // }
}

class brushPathMachine {
  constructor() {}

  drawLine() {
    let x = -20;
    let y = canvasHeight / 10;
    for (let i = 0; i < 1000; i++) {
      textBrush.drawMachine(x + i * 10, y + 10 * sin(i * 10), i);
    }
  }

  drawPath() {
    let x = random(10, 1710);
    let y = random(10, 2400);
    let totalSegments = floor(random(2, 8));

    this.segments = [];
    for (let i = 0; i < totalSegments; i++) {
      this.segments[i] = new brushSegment(x, y);
      this.segments[i].draw();
      x = this.segments[i].x;
      y = this.segments[i].y;
    }
  }
}

class brushSegment {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.type = random[("short", "medium", "long")];

    //check type
    this.length = floor(random(100, 5000));
  }

  draw() {
    //do tests on the type of segment??

    let angle = random(0, 360);

    let choppyness = random(0, 0.001);

    for (let i = 0; i < this.length; i++) {
      this.x = this.x + cos(angle) + random(-0.7, 0.7);
      this.y = this.y + sin(angle) + random(-0.7, 0.7);

      if (random(0, 1) < choppyness) {
        let gaps = floor(random(5, 140));
        let chops = floor(random(0, 7));
        let chopMod = floor(gaps / chops);
        i = i + gaps;
        for (let j = 1; j < gaps; j++) {
          this.x = this.x + cos(angle) + random(-0.7, 0.7);
          this.y = this.y + sin(angle) + random(-0.7, 0.7);
          if (j % chopMod == 0) {
            //might want to adjust i for time based brush???
            textBrush.drawMachine(this.x, this.y, i);
          }
        }
        continue;
      }

      textBrush.drawMachine(this.x, this.y, i);

      if (random(0, 1) > 0.99) {
        angle = random(0, 360);
      }

      if (random(0, 1) > 0.99991) {
        let wires = new wireNetwork(10);
      }
    }
  }
}

class textGradientBrush {
  constructor(gt) {
    this.gradientType = gt;
    textFont(font);
    textSize(fontSize);
    this.time = 0;

    //create text mask
    this.textMask = createGraphics(textWidth(urbitID), fontSize);
    this.textMask.textSize(fontSize);
    this.textMask.textFont(font);
    this.textMask.text(urbitID, 0, 70);
    this.textMaskImage = createImage(this.textMask.width, this.textMask.height);
    this.textMaskImage.copy(
      this.textMask,
      0,
      0,
      this.textMask.width,
      this.textMask.height,
      0,
      0,
      this.textMask.width,
      this.textMask.height
    );
    this.amplitudeRatio = 1;

    //create gradient block
    this.textGradientImage = createImage(
      this.textMaskImage.width,
      this.textMaskImage.height
    );
    this.textGradientImage.loadPixels();

    let dr;
    let dg;
    let db;

    if (this.gradientType === "vertical") {
      dr =
        (colorPalette[2][0] - colorPalette[1][0]) /
        this.textGradientImage.width;
      dg =
        (colorPalette[2][1] - colorPalette[1][1]) /
        this.textGradientImage.width;
      db =
        (colorPalette[2][2] - colorPalette[1][2]) /
        this.textGradientImage.width;
    } else if (this.gradientType === "horizontal") {
      dr =
        (colorPalette[2][0] - colorPalette[1][0]) /
        this.textGradientImage.width;
      dg =
        (colorPalette[2][1] - colorPalette[1][1]) /
        this.textGradientImage.width;
      db =
        (colorPalette[2][2] - colorPalette[1][2]) /
        this.textGradientImage.width;
    } else if (this.gradientType === "glitch") {
      dr =
        (colorPalette[2][0] - colorPalette[1][0]) /
        this.textGradientImage.height;
      dg =
        (colorPalette[2][1] - colorPalette[1][1]) /
        this.textGradientImage.height;
      db =
        (colorPalette[2][2] - colorPalette[1][2]) /
        this.textGradientImage.height;
    } else if (this.gradientType === "time") {
      this.dr = (colorPalette[2][0] - colorPalette[1][0]) / 600;
      this.dg = (colorPalette[2][1] - colorPalette[1][1]) / 600;
      this.db = (colorPalette[2][2] - colorPalette[1][2]) / 600;
      this.direction = true;
      this.changeGradientPeriodRatio();
    }

    let pixelCount = 0;

    if (this.gradientType === "horizontal") {
      for (let y = 0; y < this.textGradientImage.height; y++) {
        // console.log(y)
        for (let x = 0; x < this.textGradientImage.width; x++) {
          let p = floor(4 * x + 4 * y * floor(this.textGradientImage.width));
          this.textGradientImage.pixels[p] = colorPalette[1][0] + x * dr;
          this.textGradientImage.pixels[p + 1] = colorPalette[1][1] + x * dg;
          this.textGradientImage.pixels[p + 2] = colorPalette[1][2] + x * db;
          this.textGradientImage.pixels[p + 3] = 255;
        }
      }
    } else {
      for (let x = 0; x < this.textGradientImage.width; x++) {
        // console.log("x: "+x)
        for (let y = 0; y < this.textGradientImage.height; y++) {
          if (this.gradientType === "vertical") {
            this.textGradientImage.pixels[pixelCount] =
              colorPalette[1][0] + dr * x;
            this.textGradientImage.pixels[pixelCount + 1] =
              colorPalette[1][1] + dg * x;
            this.textGradientImage.pixels[pixelCount + 2] =
              colorPalette[1][2] + db * x;
            this.textGradientImage.pixels[pixelCount + 3] = 255;
          } else if (this.gradientType === "glitch") {
            this.textGradientImage.pixels[pixelCount] =
              colorPalette[1][0] + dr * y;
            this.textGradientImage.pixels[pixelCount + 1] =
              colorPalette[1][1] + dg * y;
            this.textGradientImage.pixels[pixelCount + 2] =
              colorPalette[1][2] + db * y;
            this.textGradientImage.pixels[pixelCount + 3] = 255;
          }

          pixelCount = pixelCount + 4;
        }
      }
    }

    this.textGradientImage.updatePixels();
    this.textGradientImage.mask(this.textMaskImage);
    this.priorX = -1;
    this.priorY = -1;
    this.initialText = true;

    //make all sizes
    this.resizedTexts = [];
    console.log("gradient type: " + this.gradientType);
    if (this.gradientType !== "time") {
      for (let i = 0; i < 360; i++) {
        let sizeRatio = map(sin(i), -1, 1, 0.5, 1.5);
        if (sizeRatio == 0) {
          sizeRatio = 0.00001;
        }

        let resizedText = createImage(
          this.textGradientImage.width,
          this.textGradientImage.height
        );
        resizedText.copy(
          this.textGradientImage,
          0,
          0,
          this.textGradientImage.width,
          this.textGradientImage.height,
          0,
          0,
          this.textGradientImage.width,
          this.textGradientImage.height
        );
        resizedText.resize(
          sizeRatio * resizedText.width,
          sizeRatio * resizedText.height
        );
        this.resizedTexts[i] = resizedText;
      }
    }
  }

  //gradient between colors 2 and 1
  draw() {
    let x = mouseX;
    let y = mouseY;
    let avgX = (x + this.priorX) / 2;
    let avgY = (y + this.priorY) / 2;

    if (this.gradientType === "time") {
      //let t = this.time % 600
      let t = this.time;

      fill([
        colorPalette[1][0] + this.dr * t,
        colorPalette[1][1] + this.dg * t,
        colorPalette[1][2] + this.db * t,
      ]);
      // text(urbitID, avgX-x, avgY-y)

      if (this.initialText) {
        this.initialText = false;
      } else {
        text(urbitID, avgX, avgY);
      }
      text(urbitID, x, y);

      if (this.time > 600) {
        this.direction = false;
      } else if (this.time <= 0) {
        this.direction = true;
      }

      if (this.direction) {
        this.time = this.time + 12;
      } else {
        this.time = this.time - 12;
      }
    } else {
      // this.textGradientImage
      if (this.initialText) {
        this.initialText = false;
      } else {
        image(
          this.textGradientImage,
          avgX - this.textGradientImage.width / 2,
          avgY - this.textGradientImage.height / 2
        );
      }
      image(
        this.textGradientImage,
        mouseX - this.textGradientImage.width / 2,
        mouseY - this.textGradientImage.height / 2
      );
    }

    this.priorX = x;
    this.priorY = y;
  }

  //gradient between colors 2 and 1
  drawMachine(x, y, sizeIndex) {
    if (this.gradientType === "time") {
      let t = map(sin(sizeIndex * this.gradientPeriodRatio), -1, 1, 0, 600);
      //let t = map(sin(sizeIndex),-1,1,0,600)

      fill([
        colorPalette[1][0] + this.dr * t,
        colorPalette[1][1] + this.dg * t,
        colorPalette[1][2] + this.db * t,
      ]);
      let sizeRatio =
        this.amplitudeRatio * map(sin(sizeIndex), -1, 1, 0.5, 1.5);
      if (sizeRatio == 0) {
        sizeRatio = 0.0001;
      }
      textSize(fontSize * sizeRatio);

      text(urbitID, x, y);

      if (random(0, 1) < 0.0005) {
        this.changeGradientPeriodRatio();
        // console.log("changing gradient period: "+this.gradientPeriodRatio)
      }

      if (random(0, 1) < 0.0005) {
        this.changeAmplitudeRatio();
        // console.log("changing amplitude: "+this.amplitudeRatio)
      }
    } else {
      if (this.amplitudeRatio == 0) {
        sizeRatio = 0.0001;
      }

      //old below here, it works
      let resizedText = this.resizedTexts[sizeIndex % 360];
      image(resizedText, x - resizedText.width / 2, y - resizedText.height / 2);

      if (random(0, 1) < 0.0005) {
        this.changeGradientPeriodRatio();
      }

      if (random(0, 1) < 0.0005) {
        this.changeAmplitudeRatio();
      }
    }
  }

  changeGradientPeriodRatio() {
    let periodSpeed = random(["slow", "fast"]);
    if (periodSpeed === "slow") {
      this.gradientPeriodRatio = random(0.5, 1);
    } else {
      this.gradientPeriodRatio = random(1, 3);
    }
  }

  changeAmplitudeRatio() {
    let amplitudeScale = random(["short", "tall"]);
    if (amplitudeScale === "short") {
      this.amplitudeRatio = random(0.2, 0.8);
    } else {
      this.amplitudeRatio = random(0.8, 2.2);
    }

    if (this.gradientType !== "time") {
      //recompute the
      // console.log("recomputing AM gradients")
      for (let i = 0; i < this.resizedTexts.length; i++) {
        if (i <= 90) {
          let sizeRatio = this.amplitudeRatio * map(sin(i), -1, 1, 0.5, 1.5);
          if (sizeRatio == 0) {
            sizeRatio = 0.00001;
          }

          let resizedText = createImage(
            this.textGradientImage.width,
            this.textGradientImage.height
          );
          resizedText.copy(
            this.textGradientImage,
            0,
            0,
            this.textGradientImage.width,
            this.textGradientImage.height,
            0,
            0,
            this.textGradientImage.width,
            this.textGradientImage.height
          );
          resizedText.resize(
            sizeRatio * resizedText.width,
            sizeRatio * resizedText.height
          );
          this.resizedTexts[i] = resizedText;
        } else if (i <= 180) {
          this.resizedTexts[i] = this.resizedTexts[90 - (i - 90)];
        } else if (i <= 270) {
          let sizeRatio = this.amplitudeRatio * map(sin(i), -1, 1, 0.5, 1.5);
          if (sizeRatio == 0) {
            sizeRatio = 0.00001;
          }

          let resizedText = createImage(
            this.textGradientImage.width,
            this.textGradientImage.height
          );
          resizedText.copy(
            this.textGradientImage,
            0,
            0,
            this.textGradientImage.width,
            this.textGradientImage.height,
            0,
            0,
            this.textGradientImage.width,
            this.textGradientImage.height
          );
          resizedText.resize(
            sizeRatio * resizedText.width,
            sizeRatio * resizedText.height
          );
          this.resizedTexts[i] = resizedText;
        } else {
          this.resizedTexts[i] = this.resizedTexts[270 - (i - 270)];
        }
      }
    }
  }
}

function linearGradient(x0, y0, x1, y1, color0, color1) {
  let gradient = drawingContext.createLinearGradient(x0, y0, x1, y1);
  gradient.addColorStop(0, color0);
  gradient.addColorStop(1, color1);
  drawingContext.fillStyle = gradient;
}

class wireNetwork {
  constructor(maxNodes) {
    this.nodes = [];
    this.edges = [];

    let totalNodes = 2 + floor(random(maxNodes - 1));
    // console.log("total nodes: "+totalNodes)

    for (let i = 0; i < totalNodes; i++) {
      this.nodes[i] = new node(i);
    }

    let totalEdges = ceil(0.5 * totalNodes + random(totalNodes));
    // console.log("total edges: "+totalEdges)

    for (let i = 0; i < totalEdges; i++) {
      let node0 = random(this.nodes);
      let node1 = random(this.nodes);
      while (true) {
        if (node0.id == node1.id) {
          node1 = random(this.nodes);
        } else {
          break;
        }
      }
      this.edges[i] = new edge(node0, node1);
    }
  }
}

class node {
  constructor(i) {
    this.id = i;
    this.x = random(-canvasWidth * 0.2, 1.2 * canvasWidth);
    this.y = random(-canvasHeight * 0.2, 1.2 * canvasHeight);
  }

  draw() {
    fill(colorPalette[1]);
    circle(this.x, this.y, canvasWidth / 20);
  }
}

class edge {
  constructor(n0, n1) {
    this.nodes = [n0, n1];
    this.edgeType = random(["line", "sine"]);
    // console.log("edge type: "+this.edgeType)
    this.repetitions = random([1, 2, 3]);
    this.draw();
  }

  draw() {
    push();
    translate(this.nodes[0].x, this.nodes[0].y);

    let theta =
      270 +
      atan2(
        this.nodes[1].y - this.nodes[0].y,
        this.nodes[1].x - this.nodes[0].x
      );
    rotate(theta);
    stroke(colorPalette[3]);
    strokeWeight(2);

    let distance = sqrt(
      sq(this.nodes[1].x - this.nodes[0].x) +
        sq(this.nodes[1].y - this.nodes[0].y)
    );

    if (this.edgeType === "line") {
      //Straight lines
      line(0, 0, 0, distance);
      if (this.repetitions > 1) {
        line(8, 0, 8, distance);
      }
      if (this.repetitions > 2) {
        line(-8, 0, -8, distance);
      }
    } else if (this.edgeType === "sine") {
      //sine waves
      noFill();
      beginShape();
      for (let i = 0; i < distance / 0.2; i++) {
        vertex(10 * sin(i), i * 0.2);
      }
      endShape();

      if (this.repetitions > 1) {
        beginShape();
        for (let i = 0; i < distance / 0.2; i++) {
          vertex(10 * sin(i + 30), i * 0.2);
        }
        endShape();
      }
      if (this.repetitions > 2) {
        // console.log("WWWWW")
        beginShape();
        for (let i = 0; i < distance / 0.2; i++) {
          vertex(10 * sin(i + 60), i * 0.2);
        }
        endShape();
      }
    }
    pop();
  }
}

// function keyTyped()
// {
//   if(key === 'w' || key === 'W')
//   {
//     let wires = new wireNetwork(10);
//   }
//   else if(key === 'f' || key === 'F')
//   {
//     console.log("filter time")
//     applyFilter();
//   }
//   else if(key === 'd' || key === 'D')
//   {
//     downloadVisualArt();
//   }
// }

function chooseColors() {
  let paletteAndName = random(palettes);
  colorPalette = shuffle(paletteAndName[0]);
  colorPaletteName = paletteAndName[1];
}

function backgroundGradient(type) {
  if (type === "horizontal") {
    // linearGradient(0, canvasHeight/2, canvasWidth, canvasHeight/2,color(colorPalette[0]),color(colorPalette[4]))
    linearGradient(
      0,
      canvasHeight / 2,
      canvasWidth,
      canvasHeight / 2,
      color(colorPalette[0]),
      color(colorPalette[2])
    );
  } else if (type === "vertical") {
    // console.log("mooo")
    // linearGradient(canvasWidth/2, 0, canvasWidth/2, canvasHeight,color(colorPalette[0]),color(colorPalette[4]))
    linearGradient(
      canvasWidth / 2,
      0,
      canvasWidth / 2,
      canvasHeight,
      color(colorPalette[0]),
      color(colorPalette[2])
    );
  }
  rect(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
}

//inspo
//https://editor.p5js.org/KevinWorkman/sketches/nzltqTva0
function applyFilter() {
  //decide filtering details...
  let filterDecided = false;
  let gritProbability;
  let sampleDistance;
  let gritDistance;
  if (brushType === "vertical") {
    if (random([true, true, true, false, true])) {
      console.log("vertical brush overdrive sample filter test");
      filterType = "sampling";
      gritProbability = random(0.5, 0.9); // 0.1 - 0.9
      sampleDistance = floor(random(10, 40)); // 5 to 25 or 50
      metadata.filterOverdrive = gritProbability + " " + sampleDistance;
      filterDecided = true;
    }
  } else if (brushType === "time") {
    if (
      random([
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
      ])
    ) {
      console.log("time brush overdrive sample filter test");
      filterType = "sampling";
      gritProbability = random(0.5, 0.9); // 0.1 - 0.9
      sampleDistance = floor(random(10, 40)); // 5 to 25 or 50
      metadata.filterOverdrive = gritProbability + " " + sampleDistance;
      filterDecided = true;
    }
  }

  if (!filterDecided) {
    if (random(0, 1) <= 0.8) {
      console.log("filter 80% normal distance grit grain");
      filterType = "color_distance";
      gritProbability = random(0.1, 0.9); // 0.1 - 0.9
      gritDistance = random(5, 30); // 5 to 25 or 50
      metadata.grit = gritProbability + " " + gritDistance;
      filterDecided = true;
    } else {
      console.log("!!!no filter chosen!!!");
    }
  }

  if (!filterDecided) {
    filterDecided = true;
    filterType = "none";
  }

  // filterType = 'sampling'
  console.log("applying filter: " + filterType);

  if (filterType !== "none") {
    let buffer = createGraphics(canvasWidth, canvasHeight);
    buffer.copy(
      // source, x, y, w, h
      canvas,
      0,
      0,
      canvasWidth,
      canvasHeight,
      // destination x, y, w, h
      0,
      0,
      buffer.width,
      buffer.height
    );

    let imageBuffer = createImage(buffer.width, buffer.height);
    imageBuffer.copy(
      buffer,
      0,
      0,
      buffer.width,
      buffer.height,
      0,
      0,
      buffer.width,
      buffer.height
    );
    imageBuffer.loadPixels();

    let filteredImage = createImage(buffer.width, buffer.height);
    filteredImage.loadPixels();

    if (filterType === "color_distance") {
      for (let i = 0; i < imageBuffer.height; i++) {
        for (let j = 0; j < imageBuffer.width; j++) {
          let offset = i * imageBuffer.width * 4 + j * 4;

          if (random(0, 1) < gritProbability) {
            filteredImage.pixels[offset] =
              imageBuffer.pixels[offset] + random(-gritDistance, gritDistance);
            filteredImage.pixels[offset + 1] =
              imageBuffer.pixels[offset + 1] +
              random(-gritDistance, gritDistance);
            filteredImage.pixels[offset + 2] =
              imageBuffer.pixels[offset + 2] +
              random(-gritDistance, gritDistance);
            filteredImage.pixels[offset + 3] = imageBuffer.pixels[offset + 3];
            //filteredImage.pixels[offset+3] = imageBuffer.pixels[offset+3] + random(-50,50);
          } else {
            filteredImage.pixels[offset] = imageBuffer.pixels[offset];
            filteredImage.pixels[offset + 1] = imageBuffer.pixels[offset + 1];
            filteredImage.pixels[offset + 2] = imageBuffer.pixels[offset + 2];
            filteredImage.pixels[offset + 3] = imageBuffer.pixels[offset + 3];
          }
        }
      }
    } else if (filterType === "sampling") {
      console.log("grit prob: " + gritProbability);
      console.log("sample distance: " + sampleDistance);

      for (let i = 0; i < imageBuffer.height; i++) {
        for (let j = 0; j < imageBuffer.width; j++) {
          let offset = i * imageBuffer.width * 4 + j * 4;

          if (random(0, 1) < gritProbability) {
            let xSample = j + floor(random(-sampleDistance, sampleDistance));
            let ySample = i + floor(random(-sampleDistance, sampleDistance));
            if (xSample > imageBuffer.width - 1) {
              xSample = imageBuffer.width - 1;
            } else if (xSample < 0) {
              xSample = 0;
            }

            if (ySample > imageBuffer.height - 1) {
              ySample = imageBuffer.height - 1;
            } else if (ySample < 0) {
              ySample = 0;
            }

            //(i*imageBuffer.width*4) + (j*4)
            let sampleOffset = ySample * imageBuffer.width * 4 + xSample * 4;

            filteredImage.pixels[offset] = imageBuffer.pixels[sampleOffset];
            filteredImage.pixels[offset + 1] =
              imageBuffer.pixels[sampleOffset + 1];
            filteredImage.pixels[offset + 2] =
              imageBuffer.pixels[sampleOffset + 2];
            filteredImage.pixels[offset + 3] =
              imageBuffer.pixels[sampleOffset + 3];
            //filteredImage.pixels[offset+3] = imageBuffer.pixels[offset+3] + random(-50,50);
          } else {
            filteredImage.pixels[offset] = imageBuffer.pixels[offset];
            filteredImage.pixels[offset + 1] = imageBuffer.pixels[offset + 1];
            filteredImage.pixels[offset + 2] = imageBuffer.pixels[offset + 2];
            filteredImage.pixels[offset + 3] = imageBuffer.pixels[offset + 3];
          }
        }
      }
    }

    filteredImage.updatePixels();
    image(filteredImage, 0, 0);
  }
}
