let points1 = [[1,10], [0,17], [6,19],[13,18],[15,19],[20,17],[20,14],[17,11],[16,11],[15,9],[15,6],[16,0],[16,-4],[16,-7],[15,-11],[16,-16],[17,-16],[19,-18],[17,-19],[13,-19],[12,-17],[12,-16],[11,-10], [11,-6], [9,-7],[8,-7],[4,-8],[3,-12],[5,-19],[4,-20],[0,-20],[-1,-19],[-1,-16],[-1,-11], [-2,-7], [-4,-6],[-8,-8],[-8,-13],[-8,-15],[-7,-16],[-7,-17],[-8,-18],[-11,-18],[-12,-16],[-12,-9],[-8,2],[-7,5],[-14,9],[-13,9],[-19,10],[-19,11],[-18,12],[-12,12],[-2,7],[1,8],[4,8],[3,10],[3,12],[1,10]]; //list資料，
let points2 = [[1,10], [0,17], [6,19],[13,18],[15,19],[20,17],[20,14],[17,11],[16,11],[15,9],[15,6],[16,0],[16,-4],[16,-7],[15,-11],[16,-16],[17,-16],[19,-18],[17,-19],[13,-19],[12,-17],[12,-16],[11,-10], [11,-6], [9,-7],[8,-7],[4,-8],[3,-12],[5,-19],[4,-20],[0,-20],[-1,-19],[-1,-16],[-1,-11], [-2,-7], [-4,-6],[-8,-8],[-8,-13],[-8,-15],[-7,-16],[-7,-17],[-8,-18],[-11,-18],[-12,-16],[-12,-9],[-8,2],[-7,5],[-14,9],[-13,9],[-19,10],[-19,11],[-18,12],[-12,12],[-2,7],[1,8],[4,8],[3,10],[3,12],[1,10]];
let points3 = [[1,10], [0,17], [6,19],[13,18],[15,19],[20,17],[20,14],[17,11],[16,11],[15,9],[15,6],[16,0],[16,-4],[16,-7],[15,-11],[16,-16],[17,-16],[19,-18],[17,-19],[13,-19],[12,-17],[12,-16],[11,-10], [11,-6], [9,-7],[8,-7],[4,-8],[3,-12],[5,-19],[4,-20],[0,-20],[-1,-19],[-1,-16],[-1,-11], [-2,-7], [-4,-6],[-8,-8],[-8,-13],[-8,-15],[-7,-16],[-7,-17],[-8,-18],[-11,-18],[-12,-16],[-12,-9],[-8,2],[-7,5],[-14,9],[-13,9],[-19,10],[-19,11],[-18,12],[-12,12],[-2,7],[1,8],[4,8],[3,10],[3,12],[1,10]];
let points4 = [[1,10], [0,17], [6,19],[13,18],[15,19],[20,17],[20,14],[17,11],[16,11],[15,9],[15,6],[16,0],[16,-4],[16,-7],[15,-11],[16,-16],[17,-16],[19,-18],[17,-19],[13,-19],[12,-17],[12,-16],[11,-10], [11,-6], [9,-7],[8,-7],[4,-8],[3,-12],[5,-19],[4,-20],[0,-20],[-1,-19],[-1,-16],[-1,-11], [-2,-7], [-4,-6],[-8,-8],[-8,-13],[-8,-15],[-7,-16],[-7,-17],[-8,-18],[-11,-18],[-12,-16],[-12,-9],[-8,2],[-7,5],[-14,9],[-13,9],[-19,10],[-19,11],[-18,12],[-12,12],[-2,7],[1,8],[4,8],[3,10],[3,12],[1,10]];
let points5 = [[1,10], [0,17], [6,19],[13,18],[15,19],[20,17],[20,14],[17,11],[16,11],[15,9],[15,6],[16,0],[16,-4],[16,-7],[15,-11],[16,-16],[17,-16],[19,-18],[17,-19],[13,-19],[12,-17],[12,-16],[11,-10], [11,-6], [9,-7],[8,-7],[4,-8],[3,-12],[5,-19],[4,-20],[0,-20],[-1,-19],[-1,-16],[-1,-11], [-2,-7], [-4,-6],[-8,-8],[-8,-13],[-8,-15],[-7,-16],[-7,-17],[-8,-18],[-11,-18],[-12,-16],[-12,-9],[-8,2],[-7,5],[-14,9],[-13,9],[-19,10],[-19,11],[-18,12],[-12,12],[-2,7],[1,8],[4,8],[3,10],[3,12],[1,10]];

//狗狗

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
  
  //把points1 內的值都*10
  for (let i = 0; i < points1.length; i++) {
    for (let j = 0; j < points1[i].length; j++) {
      points1[i][j] = points1[i][j] * 10;
    }
  }
    //把points2 內的值都*11
    for (let i = 0; i < points2.length; i++) {
      for (let j = 0; j < points2[i].length; j++) {
        points2[i][j] = points2[i][j] * 11;
      }
    }
      //把points3 內的值都*12
  for (let i = 0; i < points3.length; i++) {
    for (let j = 0; j < points3[i].length; j++) {
      points3[i][j] = points3[i][j] * 12;
    }
  }
    //把points4 內的值都*13
    for (let i = 0; i < points4.length; i++) {
      for (let j = 0; j < points4[i].length; j++) {
        points4[i][j] = points4[i][j] * 13;
      }
    }
      //把points5 內的值都*14
  for (let i = 0; i < points5.length; i++) {
    for (let j = 0; j < points4[i].length; j++) {
      points5[i][j] = points5[i][j] * 14;
    }
  }
}

function draw() {
  background(255);
  textSize(30)  //文字大小

  push()
  fill(100, 200, 87);  //設定顏色
  text("教育科技便秘",100,87)  //顯示文字
  pop()

  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  scale(map(mouseX,0,width,1,2), map(mouseY,0,width,-1,-2));  //上下翻轉
  for (let i = 0; i < points1.length-1; i++) {
    line(points1[i][0], points1[i][1], points1[i+1][0], points1[i+1][1]);
  }
  
  line(points1[points1.length-1][0], points1[points1.length-1][1], points1[0][0], points1[0][1]); //1把最後一點與第一點的連線

  for (let i = 0; i < points2.length-1; i++) {
    line(points2[i][0], points2[i][1], points2[i+1][0], points2[i+1][1]);
  }
  
  line(points2[points2.length-1][0], points2[points2.length-1][1], points2[0][0], points2[0][1]); //2把最後一點與第一點的連線

  for (let i = 0; i < points3.length-1; i++) {
    line(points3[i][0], points3[i][1], points3[i+1][0], points3[i+1][1]);
  }
  
  line(points3[points3.length-1][0], points3[points3.length-1][1], points3[0][0], points3[0][1]); //3把最後一點與第一點的連線

  for (let i = 0; i < points4.length-1; i++) {
    line(points4[i][0], points4[i][1], points4[i+1][0], points4[i+1][1]);
  }
  
  line(points4[points4.length-1][0], points4[points4.length-1][1], points4[0][0], points4[0][1]); //4把最後一點與第一點的連線

  for (let i = 0; i < points5.length-1; i++) {
    line(points5[i][0], points5[i][1], points5[i+1][0], points5[i+1][1]);
  }
  
  line(points5[points5.length-1][0], points5[points5.length-1][1], points5[0][0], points5[0][1]); //5把最後一點與第一點的連線
  
  push()
  fill(100, random(255), random(255));  //設定快速變換的顏色
  ellipse(2.5*30, 5*30, 40, 30); //左眼睛
  ellipse(5*30, 5*30, 40, 30); //右眼睛
  pop()
}
