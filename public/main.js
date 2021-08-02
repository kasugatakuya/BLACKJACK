'use strict'

// デッキ生成
function Card(mark, num) {
  this.mark = mark;
  this.num = num;
}

let cards = [];
function init() {
  let x = 0;
  for (let n = 0; n < 8; n++) {
    for (let i = 1; i <= 13; i++) {
      cards[x] = new Card('♦', i);
      x++;
      cards[x] = new Card('♥', i);
      x++;
      cards[x] = new Card('♠', i);
      x++;
      cards[x] = new Card('♣', i);
      x++;
    }
  }
}
init();
console.log(cards);

// デッキ枚数表示
let tab = [];
let nn = [];
function list() {
  let content = document.getElementById('content');
  content.innerHTML = '';
  let total = 0;
  let picture = 0;

  for(let i = 1; i <= 13; i++) {
    let a = cards.filter(function(e) {
      return e.num === i;
    });
    let n = a.length;
    tab[i] = n;
    nn[i] = a;
    total += tab[i];
    if (i >= 10) {
      picture += tab[i];
    }
  }

  for(let i = 1; i <= 13; i++) {
    let probability = tab[i]/total*100;
    let mr = document.createElement("tr");
    let mh = document.createElement("th");
    let md = document.createElement("td");
    let ki = document.createTextNode(i + ':');
    let kk = document.createTextNode(tab[i] + '枚：');
    let kd = document.createTextNode(probability.toFixed(3) + '%');
    content.appendChild(mr);
    content.appendChild(mh);
    content.appendChild(ki);
    content.appendChild(md);
    content.appendChild(kk);
    content.appendChild(kd);
  }
  let probability = document.getElementById('probability');
  probability.innerHTML = '';
  let picture_probability = picture/total*100;
  let tabtr = document.createElement("tr");
  let tabth = document.createElement("th");
  let tabtd = document.createElement("td");
  let tabpic = document.createTextNode(picture_probability.toFixed(3) + '%');
  probability.appendChild(tabtr);
  probability.appendChild(tabth);
  probability.appendChild(tabtd);
  probability.appendChild(tabpic);
}
list();

// カウンティング表示
function counting_sum(counting = 0) {
  cont.innerHTML = '';

  let mr = document.createElement("tr");
  let mh = document.createElement("th");
  let ki = document.createTextNode(counting);
  cont.appendChild(mr);
  cont.appendChild(mh);
  cont.appendChild(ki);
}

// BET額表示
let $1 = document.getElementById('1');
let $5 = document.getElementById('5');
let $25 = document.getElementById('25');
let $50 = document.getElementById('50');
let $100 = document.getElementById('100');
let money = document.getElementById('money');
let bet = document.getElementById('bet');
let split1_money = 0;
let split2_money = 0;

let totalmoney = 1000;
let betmoney = 0;
let bet_flg = 0;
money.innerHTML = totalmoney;
bet.innerHTML = betmoney;

$1.addEventListener("click", function() {
  if(bet_flg === 1) {
    return;
  }
  if(totalmoney - 1 < 0) {
    alert ('これ以上BETできません。');
    return;
  }
  betmoney = betmoney + 1;
  totalmoney = totalmoney - 1;
  money.innerHTML = totalmoney;
  bet.innerHTML = betmoney;
});
$5.addEventListener("click", function() {
  if(bet_flg === 1) {
    return;
  }
  if(totalmoney - 5 < 0) {
    alert ('これ以上BETできません。');
    return;
  }
  totalmoney = totalmoney - 5;
  betmoney = betmoney + 5;
  money.innerHTML = totalmoney;
  bet.innerHTML = betmoney;
});
$25.addEventListener("click", function() {
  if(totalmoney - 25 < 0) {
    alert ('これ以上BETできません。');
    return;
  }
  if(bet_flg === 1) {
    return;
  }
  totalmoney = totalmoney - 25;
  betmoney = betmoney + 25;
  money.innerHTML = totalmoney;
  bet.innerHTML = betmoney;
});
$50.addEventListener("click", function() {
  if(totalmoney - 50 < 0) {
    alert ('これ以上BETできません。');
    return;
  }
  if(bet_flg === 1) {
    return;
  }
  totalmoney = totalmoney - 50;
  betmoney = betmoney + 50;
  money.innerHTML = totalmoney;
  bet.innerHTML = betmoney;
});
$100.addEventListener("click", function() {
  if(bet_flg === 1) {
    return;
  }
  if(totalmoney - 100 < 0) {
    alert ('これ以上BETできません。');
    return;
  }
  totalmoney = totalmoney - 100;
  betmoney = betmoney + 100;
  money.innerHTML = totalmoney;
  bet.innerHTML = betmoney;
});


let reset = document.getElementById('reset');
let exchange = document.getElementById('exchange');
let start = document.getElementById('start');
let double = document.getElementById('double');
let hit = document.getElementById('hit');
let split_hit = document.getElementById('split_hit');
let stand = document.getElementById('stand');
let split_stand = document.getElementById('split_stand');
let split_btn_box = document.getElementById('split_btn_box');
let next = document.getElementById('next');
let user = document.getElementById('user');
let split_user = document.getElementById('split_user');
let cp = document.getElementById('cp');
let cp_cards_box = document.getElementById('cp_cards_box');
let user_cards_box = document.getElementById('user_cards_box');
let user_sum1 = document.getElementById('user_sum1');
let user_sum11 = document.getElementById('user_sum11');
let split_user_cards_box = document.getElementById('split_user_cards_box');
let split_user_sum1 = document.getElementById('split_user_sum1');
let split_user_sum11 = document.getElementById('split_user_sum11');
let cp_sum1 = document.getElementById('cp_sum1');
let cp_sum11 = document.getElementById('cp_sum11');
let result = document.getElementById('result');
let cont = document.getElementById('cont');
let cont_text = document.getElementById('cont_text');
let probability = document.getElementById('probability');
let probability_text = document.getElementById('probability_text');
let content = document.getElementById('content');
let strategy = document.getElementById('strategy');
let hide = document.getElementById('hide');
let show = document.getElementById('show');
let hide2 = document.getElementById('hide2');
let show2 = document.getElementById('show2');
let split = document.getElementById('split');
let split_area = document.getElementById('split_area');
let user_sum1_process = 0;
let user_sum11_process = 0;
let split_user_sum1_process = 0;
let split_user_sum11_process = 0;
let cp_sum1_process = 0;
let cp_sum11_process = 0;
let hit_flg = 1;
let double_flg = 1;
let stand_flg = 1;
let split_hit_flg = 1;
let split_stand_flg = 1;
let start_flg = 0;
let next_flg = 0;
let bj_flg = 0;
let insurance_flg = 0;
let split_flg = 0;
let counting = 0;

// インシュランス成功
function insurance_ok() {
  setTimeout(function(){
    let result_box = document.createElement('p');
    let result_text = document.createTextNode("インシュランス成功");
    result_box.className = 'result_win';
    result.appendChild(result_box);
    result_box.appendChild(result_text);
    let img_element = document.createElement('img');
    let array = 
    [
      'ins1.jpg', 
      'ins2.jpg', 
      'ins3.jpg'
    ];
    let lose_img = array[Math.floor(Math.random() * array.length)];
    img_element.src = lose_img; // 画像パス
    img_element.alt = 'インシュランス成功'; // 代替テキスト
    img_element.width = 165; // 横サイズ（px）
    img_element.height = 130; // 縦サイズ（px）
    result.appendChild(img_element);
  }, 500);
}
// インシュランス失敗
function insurance_miss() {
  setTimeout(function(){
    let result_box = document.createElement('p');
    let result_text = document.createTextNode("インシュランス失敗");
    result_box.className = 'result_lose';
    result.appendChild(result_box);
    result_box.appendChild(result_text);
    let img_element = document.createElement('img');
    let array = 
    [
      'lose1.jpg', 
      'lose2.jpg', 
      'lose3.jpg', 
      'lose4.jpg',
      'lose5.jpg',
      'lose6.jpg',
      'lose7.jpg',
      'lose8.jpg',
      'lose9.jpg',
      'lose10.jpg',
      'lose11.jpg'
    ];
    let lose_img = array[Math.floor(Math.random() * array.length)];
    img_element.src = lose_img; // 画像パス
    img_element.alt = 'インシュランス失敗'; // 代替テキスト
    img_element.width = 165; // 横サイズ（px）
    img_element.height = 130; // 縦サイズ（px）
    result.appendChild(img_element);
  }, 500);
}
// 勝ったとき画像表示
function win() {
  setTimeout(function(){
    let result_box = document.createElement('p');
    let result_text = document.createTextNode("YOU WIN!");
    result_box.className = 'result_win';
    result.appendChild(result_box);
    result_box.appendChild(result_text);
    let img_element = document.createElement('img');
    let img_zawa = document.createElement('img');
    let img_zawa2 = document.createElement('img');
    let img_zawa3 = document.createElement('img');
    let img_zawa4 = document.createElement('img');
    let img_zawa5 = document.createElement('img');
    let img_zawa6 = document.createElement('img');
    let array = 
    [
      'win1.jpg', 
      'win2.jpg', 
      'win3.jpg',
      'win4.jpg',
      'win5.jpg',
      'win6.jpg',
      'win7.jpg',
      'win8.jpg',
      'win9.jpg',
      'win10.jpg'
    ];
    let win_img = array[Math.floor(Math.random() * array.length)];
    img_element.src = win_img; // 画像パス
    img_element.alt = '勝ち'; // 代替テキスト
    img_element.width = 160; // 横サイズ(px)
    img_element.height = 130; // 縦サイズ(px)
    img_zawa.src = 'zawa.jpg'; // 画像パス
    img_zawa.alt = 'ざわ'; // 代替テキスト
    img_zawa.width = 25; // 横サイズ(px)
    img_zawa.height = 10; // 縦サイズ(px)
    img_zawa.className = 'zawa';
    img_zawa2.src = 'zawa.jpg'; // 画像パス
    img_zawa2.alt = 'ざわ'; // 代替テキスト
    img_zawa2.width = 25; // 横サイズ(px)
    img_zawa2.height = 10; // 縦サイズ(px)
    img_zawa2.className = 'zawa2';
    img_zawa3.src = 'zawa.jpg'; // 画像パス
    img_zawa3.alt = 'ざわ'; // 代替テキスト
    img_zawa3.width = 25; // 横サイズ(px)
    img_zawa3.height = 10; // 縦サイズ(px)
    img_zawa3.className = 'zawa3';
    img_zawa4.src = 'zawa.jpg'; // 画像パス
    img_zawa4.alt = 'ざわ'; // 代替テキスト
    img_zawa4.width = 25; // 横サイズ(px)
    img_zawa4.height = 10; // 縦サイズ(px)
    img_zawa4.className = 'zawa4';
    img_zawa5.src = 'zawa.jpg'; // 画像パス
    img_zawa5.alt = 'ざわ'; // 代替テキスト
    img_zawa5.width = 25; // 横サイズ(px)
    img_zawa5.height = 10; // 縦サイズ(px)
    img_zawa5.className = 'zawa5';
    img_zawa6.src = 'zawa.jpg'; // 画像パス
    img_zawa6.alt = 'ざわ'; // 代替テキスト
    img_zawa6.width = 25; // 横サイズ(px)
    img_zawa6.height = 10; // 縦サイズ(px)
    img_zawa6.className = 'zawa6';
    result.appendChild(img_zawa);
    result.appendChild(img_zawa2);
    result.appendChild(img_zawa3);
    result.appendChild(img_element);
    result.appendChild(img_zawa4);
    result.appendChild(img_zawa5);
    result.appendChild(img_zawa6);
  }, 500);
}
// 負けたときの画像表示
function lose() {
  setTimeout(function(){
    let result_box = document.createElement('p');
    let result_text = document.createTextNode("YOU LOSE!");
    result_box.className = 'result_lose';
    result.appendChild(result_box);
    result_box.appendChild(result_text);
    let img_element = document.createElement('img');
    let img_zawa = document.createElement('img');
    let img_zawa2 = document.createElement('img');
    let img_zawa3 = document.createElement('img');
    let img_zawa4 = document.createElement('img');
    let img_zawa5 = document.createElement('img');
    let img_zawa6 = document.createElement('img');
    let array = 
    [
      'lose1.jpg', 
      'lose2.jpg', 
      'lose3.jpg', 
      'lose4.jpg',
      'lose5.jpg',
      'lose6.jpg',
      'lose7.jpg',
      'lose8.jpg',
      'lose9.jpg',
      'lose10.jpg',
      'lose11.jpg'
    ];
    let lose_img = array[Math.floor(Math.random() * array.length)];
    img_element.src = lose_img; // 画像パス
    img_element.alt = '負け'; // 代替テキスト
    img_element.width = 165; // 横サイズ（px）
    img_element.height = 130; // 縦サイズ（px）
    img_zawa.src = 'zawa.jpg'; // 画像パス
    img_zawa.alt = 'ざわ'; // 代替テキスト
    img_zawa.width = 25; // 横サイズ(px)
    img_zawa.height = 10; // 縦サイズ(px)
    img_zawa.className = 'zawa';
    img_zawa2.src = 'zawa.jpg'; // 画像パス
    img_zawa2.alt = 'ざわ'; // 代替テキスト
    img_zawa2.width = 25; // 横サイズ(px)
    img_zawa2.height = 10; // 縦サイズ(px)
    img_zawa2.className = 'zawa2';
    img_zawa3.src = 'zawa.jpg'; // 画像パス
    img_zawa3.alt = 'ざわ'; // 代替テキスト
    img_zawa3.width = 25; // 横サイズ(px)
    img_zawa3.height = 10; // 縦サイズ(px)
    img_zawa3.className = 'zawa3';
    img_zawa4.src = 'zawa.jpg'; // 画像パス
    img_zawa4.alt = 'ざわ'; // 代替テキスト
    img_zawa4.width = 25; // 横サイズ(px)
    img_zawa4.height = 10; // 縦サイズ(px)
    img_zawa4.className = 'zawa4';
    img_zawa5.src = 'zawa.jpg'; // 画像パス
    img_zawa5.alt = 'ざわ'; // 代替テキスト
    img_zawa5.width = 25; // 横サイズ(px)
    img_zawa5.height = 10; // 縦サイズ(px)
    img_zawa5.className = 'zawa5';
    img_zawa6.src = 'zawa.jpg'; // 画像パス
    img_zawa6.alt = 'ざわ'; // 代替テキスト
    img_zawa6.width = 25; // 横サイズ(px)
    img_zawa6.height = 10; // 縦サイズ(px)
    img_zawa6.className = 'zawa6';
    result.appendChild(img_zawa);
    result.appendChild(img_zawa2);
    result.appendChild(img_zawa3);
    result.appendChild(img_element);
    result.appendChild(img_zawa4);
    result.appendChild(img_zawa5);
    result.appendChild(img_zawa6);
  }, 500);
}
// 引き分けのときの画像表示
function draw() {
  setTimeout(function(){
    let result_box = document.createElement('p');
    let result_text = document.createTextNode("DRAW!");
    result_box.className = 'result_draw';
    result.appendChild(result_box);
    result_box.appendChild(result_text);
    let img_element = document.createElement('img');
    let img_zawa = document.createElement('img');
    let img_zawa2 = document.createElement('img');
    let img_zawa3 = document.createElement('img');
    let img_zawa4 = document.createElement('img');
    let img_zawa5 = document.createElement('img');
    let img_zawa6 = document.createElement('img');
    let array = ['draw1.jpg', 'draw2.jpg', 'draw3.jpg', 'draw4.jpg'];
    let draw_img = array[Math.floor(Math.random() * array.length)];
    img_element.src = draw_img; // 画像パス
    img_element.alt = '引き分け'; // 代替テキスト
    img_element.width = 165; // 横サイズ（px）
    img_element.height = 130; // 縦サイズ（px）
    img_zawa.src = 'zawa.jpg'; // 画像パス
    img_zawa.alt = 'ざわ'; // 代替テキスト
    img_zawa.width = 25; // 横サイズ(px)
    img_zawa.height = 10; // 縦サイズ(px)
    img_zawa.className = 'zawa';
    img_zawa2.src = 'zawa.jpg'; // 画像パス
    img_zawa2.alt = 'ざわ'; // 代替テキスト
    img_zawa2.width = 25; // 横サイズ(px)
    img_zawa2.height = 10; // 縦サイズ(px)
    img_zawa2.className = 'zawa2';
    img_zawa3.src = 'zawa.jpg'; // 画像パス
    img_zawa3.alt = 'ざわ'; // 代替テキスト
    img_zawa3.width = 25; // 横サイズ(px)
    img_zawa3.height = 10; // 縦サイズ(px)
    img_zawa3.className = 'zawa3';
    img_zawa4.src = 'zawa.jpg'; // 画像パス
    img_zawa4.alt = 'ざわ'; // 代替テキスト
    img_zawa4.width = 25; // 横サイズ(px)
    img_zawa4.height = 10; // 縦サイズ(px)
    img_zawa4.className = 'zawa4';
    img_zawa5.src = 'zawa.jpg'; // 画像パス
    img_zawa5.alt = 'ざわ'; // 代替テキスト
    img_zawa5.width = 25; // 横サイズ(px)
    img_zawa5.height = 10; // 縦サイズ(px)
    img_zawa5.className = 'zawa5';
    img_zawa6.src = 'zawa.jpg'; // 画像パス
    img_zawa6.alt = 'ざわ'; // 代替テキスト
    img_zawa6.width = 25; // 横サイズ(px)
    img_zawa6.height = 10; // 縦サイズ(px)
    img_zawa6.className = 'zawa6';
    result.appendChild(img_zawa);
    result.appendChild(img_zawa2);
    result.appendChild(img_zawa3);
    result.appendChild(img_element);
    result.appendChild(img_zawa4);
    result.appendChild(img_zawa5);
    result.appendChild(img_zawa6);
  }, 500);
}

// ユーザーが１枚引いた時
function user_play() {
  let ram = Math.floor(Math.random() * cards.length);
  let user_box = document.createElement('span')
  let user_draw = document.createTextNode(cards[ram].mark + cards[ram].num);
  user_box.className = 'box';
  user_cards_box.appendChild(user_box);
  user_box.appendChild(user_draw);

  switch(cards[ram].num) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      user_sum1_process += cards[ram].num;
      user_sum11_process += cards[ram].num;
      counting++;
    break;
    case 10:
    case 11:
    case 12:
    case 13:
      user_sum1_process += 10;
      user_sum11_process += 10;
      counting--;
    break;
    case 1:
      user_sum1_process += 1;
      if(user_sum11_process + 11 > 21) {
        user_sum11_process += 1;
      } else {
        user_sum11_process += 11;
      }
      counting--;
    break;
    default:
      user_sum1_process += cards[ram].num;
      user_sum11_process += cards[ram].num;
    break;
  }
  user_sum1.innerHTML = user_sum1_process;
  user_sum11.innerHTML = user_sum11_process;
  cards.splice(ram, 1);
}

// スプリットした上段のユーザーが1枚ひいた時
function split_user_play() {
  let ram = Math.floor(Math.random() * cards.length);
  let split_user_box3 = document.createElement('span')
  let split_user_draw = document.createTextNode(cards[ram].mark + cards[ram].num);
  split_user_box3.className = 'box';
  split_user_cards_box.appendChild(split_user_box3);
  split_user_box3.appendChild(split_user_draw);

  switch(cards[ram].num) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      split_user_sum1_process += cards[ram].num;
      split_user_sum11_process += cards[ram].num;
      counting++;
    break;
    case 10:
    case 11:
    case 12:
    case 13:
      split_user_sum1_process += 10;
      split_user_sum11_process += 10;
      counting--;
    break;
    case 1:
      split_user_sum1_process += 1;
      if(split_user_sum11_process + 11 > 21) {
        split_user_sum11_process += 1;
      } else {
        split_user_sum11_process += 11;
      }
      counting--;
    break;
    default:
      split_user_sum1_process += cards[ram].num;
      split_user_sum11_process += cards[ram].num;
    break;
  }
  split_user_sum1.innerHTML = split_user_sum1_process;
  split_user_sum11.innerHTML = split_user_sum11_process;
  cards.splice(ram, 1);
}

// CPが17以上になるまで引き続けるとき
function cp_play() {
  document.getElementById('box_none').remove();
  while(cp_sum11_process <= 16) {
    let ram = Math.floor(Math.random() * cards.length);
    let cp_box = document.createElement('span')
    let cp_draw = document.createTextNode(cards[ram].mark + cards[ram].num);
    cp_box.className = 'box';
    cp_cards_box.appendChild(cp_box);
    cp_box.appendChild(cp_draw);

    switch(cards[ram].num) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        cp_sum1_process += cards[ram].num;
        cp_sum11_process += cards[ram].num;
        counting++;
      break;
      case 10:
      case 11:
      case 12:
      case 13:
        cp_sum1_process += 10;
        cp_sum11_process += 10;
        counting--;
      break;
      case 1:
        cp_sum1_process += 1;
        if(cp_sum11_process + 11 > 21) {
          cp_sum11_process += 1;
        } else {
          cp_sum11_process += 11;
        }
        counting--;
      break;
      default:
        cp_sum1_process += cards[ram].num;
        cp_sum11_process += cards[ram].num;
      break;
    }
    if(cp_sum1_process > 21) {
      cp_sum1.className = 'bust';
      let cp_burst = document.createElement('p')
      cp_cards_box.appendChild(cp_burst);
      cp_burst.className = 'bust_position';
      cp_burst.innerHTML = 'BUST';
    }
    if(cp_sum11_process > 21) {
      cp_sum11.className = 'bust';
    }
    cp_sum1.innerHTML = cp_sum1_process;
    cp_sum11.innerHTML = cp_sum11_process;
    cards.splice(ram, 1);
  }

  if(cp_sum11_process > 21) {
    while(cp_sum1_process <= 16) {
      let ram = Math.floor(Math.random() * cards.length);
      let cp_box = document.createElement('span')
      let cp_draw = document.createTextNode(cards[ram].mark + cards[ram].num);
      cp_box.className = 'box';
      cp_cards_box.appendChild(cp_box);
      cp_box.appendChild(cp_draw);
  
      switch(cards[ram].num) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          cp_sum1_process += cards[ram].num;
          cp_sum11_process += cards[ram].num;
          counting++;
        break;
        case 10:
        case 11:
        case 12:
        case 13:
          cp_sum1_process += 10;
          cp_sum11_process += 10;
          counting--;
        break;
        case 1:
          cp_sum1_process += 1;
          if(cp_sum11_process + 11 > 21) {
            cp_sum11_process += 1;
          } else {
            cp_sum11_process += 11;
          }
          counting--;
        break;
        default:
          cp_sum1_process += cards[ram].num;
          cp_sum11_process += cards[ram].num;
        break;
      }
      if(cp_sum1_process > 21) {
        cp_sum1.className = 'bust';
        let cp_burst = document.createElement('p');
        cp_cards_box.appendChild(cp_burst);
        cp_burst.className = 'bust_position';
        cp_burst.innerHTML = 'BUST';
      }
      cp_sum1.innerHTML = cp_sum1_process;
      cp_sum11.innerHTML = cp_sum11_process;
      cards.splice(ram, 1);
    }
  }
}

// ユーザーがBUSTしたとき
function user_bust_result() {
  user_sum1.className = 'bust';
  let user_burst = document.createElement('p')
  user_cards_box.appendChild(user_burst);
  user_burst.className = 'bust_position';
  user_burst.innerHTML = 'BUST';
  if (split_user_sum1_process === 0) {
    lose()
    betmoney = 0;
    bet.innerHTML = betmoney;
    money.innerHTML = totalmoney;
    stand.className = 'btn invalid';
    next.className = 'btn';
    next_flg = 1;
  } else {
    //
    // splitあり
    // 
    //
    // split1つ目
    //
    if(cp_sum11_process > 21) {
      if (split_user_sum1_process > 21) {
        lose()
        split1_money = 0;
      } else {
        //cpのsum11が22以上の場合
        if(split_user_sum11_process > 21) {
          if(split_user_sum1_process > cp_sum1_process) {
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum1_process < 22 && cp_sum1_process > 21){
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum1_process < 22 && user_sum1_process === cp_sum1_process){
            draw()
            totalmoney = totalmoney + split1_money;
            split1_money = 0;
          } else {
            lose()
            split1_money = 0;
          };
        } else {
          if(split_user_sum11_process > cp_sum1_process) {
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum11_process < 22 && cp_sum1_process > 21){
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum11_process < 22 && split_user_sum11_process === cp_sum1_process){
            draw()
            totalmoney = totalmoney + split1_money;
            split1_money = 0;
          } else {
            lose()
            split1_money = 0;
          };
        } 
      }
    } else {
      if (split_user_sum1_process > 21) {
        lose()
        split1_money = 0;
      } else {
        //cpのsum11が21以下の場合
        if(split_user_sum11_process > 21) {
          if(split_user_sum1_process > cp_sum11_process) {
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum1_process < 22 && cp_sum11_process > 21){
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum1_process < 22 && split_user_sum1_process === cp_sum11_process){
            draw()
            totalmoney = totalmoney + split1_money;
            split1_money = 0;
          } else {
            lose()
            split1_money = 0;
          };
        } else {
          if(split_user_sum11_process > cp_sum11_process) {
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum11_process < 22 && cp_sum11_process > 21){
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum11_process < 22 && split_user_sum11_process === cp_sum11_process){
            draw()
            totalmoney = totalmoney + split1_money;
            split1_money = 0;
          } else {
            lose()
            split1_money = 0;
          };
        } 
      }
    }
    //
    // split2つ目
    //
    lose()
    split2_money = 0;
    bet.innerHTML = 0;
    money.innerHTML = totalmoney;
    stand.className = 'btn invalid';
    next.className = 'btn';
    next_flg = 1;
  }
}

// スプリットした上段のユーザーがバストした時
function split_user_bust_result() {
  split_user_sum1.className = 'bust';
  let split_user_burst = document.createElement('p')
  split_user_cards_box.appendChild(split_user_burst);
  split_user_burst.className = 'bust_position';
  split_user_burst.innerHTML = 'BUST';
  split_stand.className = 'btn invalid';
}

// 勝敗判定結果
function game_result() {
  if (split_user_sum1_process === 0) {
    // splitなし
    if(cp_sum11_process > 21) {
      if(user_sum11_process > 21) {
        if(user_sum1_process > cp_sum1_process) {
          win()
          totalmoney = totalmoney + betmoney * 2;
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else if(user_sum1_process < 22 && cp_sum1_process > 21){
          win()
          totalmoney = totalmoney + betmoney * 2;
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else if(user_sum1_process < 22 && user_sum1_process === cp_sum1_process){
          draw()
          totalmoney = totalmoney + betmoney;
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else {
          lose()
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        };
      } else {
        if(user_sum11_process > cp_sum1_process) {
          win()
          if (bj_flg === 1) {
            totalmoney = totalmoney + betmoney * 2.5;
          } else {
            totalmoney = totalmoney + betmoney * 2;
          }
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else if(user_sum11_process < 22 && cp_sum1_process > 21){
          win()
          if (bj_flg === 1) {
            totalmoney = totalmoney + betmoney * 2.5;
          } else {
            totalmoney = totalmoney + betmoney * 2;
          }
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else if(user_sum11_process < 22 && user_sum11_process === cp_sum1_process){
          draw()
          totalmoney = totalmoney + betmoney;
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else {
          lose()
          betmoney = 0;
          money.innerHTML = totalmoney
          bet.innerHTML = betmoney;
        };
      } 
    } else {
      if(user_sum11_process > 21) {
        if(user_sum1_process > cp_sum11_process) {
          win()
          totalmoney = totalmoney + betmoney * 2;
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else if(user_sum1_process < 22 && cp_sum11_process > 21){
          win()
          totalmoney = totalmoney + betmoney * 2;
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else if(user_sum1_process < 22 && user_sum1_process === cp_sum11_process){
          draw()
          totalmoney = totalmoney + betmoney;
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else {
          lose()
          betmoney = 0;
          money.innerHTML = totalmoney
          bet.innerHTML = betmoney;
        };
      } else {
        if(user_sum11_process > cp_sum11_process) {
          win()
          if (bj_flg === 1) {
            totalmoney = totalmoney + betmoney * 2.5;
          } else {
            totalmoney = totalmoney + betmoney * 2;
          }
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else if(user_sum11_process < 22 && cp_sum11_process > 21){
          win()
          if (bj_flg === 1) {
            totalmoney = totalmoney + betmoney * 2.5;
          } else {
            totalmoney = totalmoney + betmoney * 2;
          }
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else if(user_sum11_process < 22 && user_sum11_process === cp_sum11_process){
          draw()
          totalmoney = totalmoney + betmoney;
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
        } else {
          lose()
          betmoney = 0;
          money.innerHTML = totalmoney
          bet.innerHTML = betmoney;
        };
      } 
    }
  } else {
    //
    // splitあり
    // 
    //
    // split1つ目
    //
    if(cp_sum11_process > 21) {
      if (split_user_sum1_process > 21) {
        lose()
        split1_money = 0;
      } else {
        //cpのsum11が22以上の場合
        if(split_user_sum11_process > 21) {
          if(split_user_sum1_process > cp_sum1_process) {
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum1_process < 22 && cp_sum1_process > 21){
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum1_process < 22 && user_sum1_process === cp_sum1_process){
            draw()
            totalmoney = totalmoney + split1_money;
            split1_money = 0;
          } else {
            lose()
            split1_money = 0;
          };
        } else {
          if(split_user_sum11_process > cp_sum1_process) {
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum11_process < 22 && cp_sum1_process > 21){
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum11_process < 22 && split_user_sum11_process === cp_sum1_process){
            draw()
            totalmoney = totalmoney + split1_money;
            split1_money = 0;
          } else {
            lose()
            split1_money = 0;
          };
        } 
      }
    } else {
      if (split_user_sum1_process > 21) {
        lose()
        split1_money = 0;
      } else {
        //cpのsum11が21以下の場合
        if(split_user_sum11_process > 21) {
          if(split_user_sum1_process > cp_sum11_process) {
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum1_process < 22 && cp_sum11_process > 21){
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum1_process < 22 && split_user_sum1_process === cp_sum11_process){
            draw()
            totalmoney = totalmoney + split1_money;
            split1_money = 0;
          } else {
            lose()
            split1_money = 0;
          };
        } else {
          if(split_user_sum11_process > cp_sum11_process) {
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum11_process < 22 && cp_sum11_process > 21){
            win()
            totalmoney = totalmoney + split1_money * 2;
            split1_money = 0;
          } else if(split_user_sum11_process < 22 && split_user_sum11_process === cp_sum11_process){
            draw()
            totalmoney = totalmoney + split1_money;
            split1_money = 0;
          } else {
            lose()
            split1_money = 0;
          };
        } 
      }
    }
    //
    // split2つ目
    //
    if(cp_sum11_process > 21) {
      //cpのsum11が22以上の場合
      if(user_sum11_process > 21) {
        if(user_sum1_process > cp_sum1_process) {
          win()
          totalmoney = totalmoney + split2_money * 2;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else if(user_sum1_process < 22 && cp_sum1_process > 21){
          win()
          totalmoney = totalmoney + split2_money * 2;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else if(user_sum1_process < 22 && user_sum1_process === cp_sum1_process){
          draw()
          totalmoney = totalmoney + split2_money;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else {
          lose()
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        };
      } else {
        if(user_sum11_process > cp_sum1_process) {
          win()
          totalmoney = totalmoney + split2_money * 2;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else if(user_sum11_process < 22 && cp_sum1_process > 21){
          win()
          totalmoney = totalmoney + split2_money * 2;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else if(user_sum11_process < 22 && user_sum11_process === cp_sum1_process){
          draw()
          totalmoney = totalmoney + split2_money;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else {
          lose()
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        };
      } 
    } else {
      //cpのsum11が21以下の場合
      if(user_sum11_process > 21) {
        if(user_sum1_process > cp_sum11_process) {
          win()
          totalmoney = totalmoney + split2_money * 2;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else if(user_sum1_process < 22 && cp_sum11_process > 21){
          win()
          totalmoney = totalmoney + split2_money * 2;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else if(user_sum1_process < 22 && user_sum1_process === cp_sum11_process){
          draw()
          totalmoney = totalmoney + split2_money;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else {
          lose()
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        };
      } else {
        if(user_sum11_process > cp_sum11_process) {
          win()
          totalmoney = totalmoney + split2_money * 2;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else if(user_sum11_process < 22 && cp_sum11_process > 21){
          win()
          totalmoney = totalmoney + split2_money * 2;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else if(user_sum11_process < 22 && user_sum11_process === cp_sum11_process){
          draw()
          totalmoney = totalmoney + split2_money;
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        } else {
          lose()
          split2_money = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = 0;
        };
      } 
    }
  }
}

// スタートボタンを押した時
start.addEventListener("click", function() {
  if(start_flg === 1) {
    return;
  }
  console.log(cards.length);
  if(cards.length <= 10) {
    alert('デッキ枚数が少なくなりましたので、デッキ交換します。');
    exchange.click();
    return;
  }
  result.innerHTML = '';
  start_flg = 1;
  bet_flg = 1;
  split_hit_flg = 1;
  split_stand_flg = 1;
  hit_flg = 1;
  stand_flg = 1;
  double_flg = 1;
  start.className = 'btn invalid';
  double.className = 'btn';
  hit.className = 'btn';
  stand.className = 'btn';
  split_hit.className = 'btn';
  split_stand.className = 'btn';
  split_btn_box.className = '';
  $1.className = 'btn invalid';
  $5.className = 'btn invalid';
  $25.className = 'btn invalid';
  $50.className = 'btn invalid';
  $100.className = 'btn invalid';
  if (user_sum1_process === 0 && cp_sum1_process === 0) {
    // CPの最初のカード
    let ram = Math.floor(Math.random() * cards.length);
    let cp_box = document.createElement('span');
    let cp_box_none = document.createElement('span');
    let cp_draw = document.createTextNode(cards[ram].mark + cards[ram].num);
    cp_box.className = 'box';
    cp_box_none.id = 'box_none';
    cp_cards_box.appendChild(cp_box);
    cp_cards_box.appendChild(cp_box_none);
    cp_box.appendChild(cp_draw);
    switch(cards[ram].num) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        cp_sum1_process += cards[ram].num;
        cp_sum11_process += cards[ram].num;
        counting++;
      break;
      case 10:
      case 11:
      case 12:
      case 13:
        cp_sum1_process += 10;
        cp_sum11_process += 10;
        counting--;
      break;
      case 1:
        cp_sum1_process += 1;
        cp_sum11_process += 11;
        counting--;
      break;
      default:
        cp_sum1_process += cards[ram].num;
        cp_sum11_process += cards[ram].num;
      break;
    }
    cp_sum1.className = 'fade_in';
    cp_sum11.className = 'fade_in';
    cp_sum1.innerHTML = cp_sum1_process;
    cp_sum11.innerHTML = cp_sum11_process;
    cards.splice(ram, 1);
    
    // USERの最初のカード
    let n = 0;
    let split_box = [];
    while(n < 2) {
      let ram = Math.floor(Math.random() * cards.length);
      let user_box = document.createElement('span');
      let user_draw = document.createTextNode(cards[ram].mark + cards[ram].num);
      user_box.className = 'box';
      user_cards_box.appendChild(user_box);
      user_box.appendChild(user_draw);
  
      switch(cards[ram].num) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          user_sum1_process += cards[ram].num;
          user_sum11_process += cards[ram].num;
          counting++;
        break;
        case 10:
        case 11:
        case 12:
        case 13:
          user_sum1_process += 10;
          user_sum11_process += 10;
          counting--;
        break;
        case 1:
          if(n === 0) {
            user_sum1_process += 1;
            user_sum11_process += 11;
          } else {
            user_sum1_process += 1;
            if(user_sum11_process + 11 > 21) {
              user_sum11_process += 1;
            } else {
              user_sum11_process += 11;
            }
          }
          counting--;
        break;
        default:
          user_sum1_process += cards[ram].num;
          user_sum11_process += cards[ram].num;
        break;
      }
      user_sum1.className = 'fade_in';
      user_sum11.className = 'fade_in';
      if (n == 1) {
        split_box[n] = user_sum1_process - split_box[0];
      } else {
        split_box[n] = user_sum1_process;
      }
      user_sum1.innerHTML = user_sum1_process;
      user_sum11.innerHTML = user_sum11_process;
      if (user_sum11_process === 21) {
        double.className = 'btn invalid';
        hit.className = 'btn invalid';
        let user_bj = document.createElement('p')
        user_cards_box.appendChild(user_bj);
        user_bj.className = 'bust_position';
        user_bj.innerHTML = 'BLACK JACK!';
        bj_flg = 1;
      }
      cards.splice(ram, 1);
      n++;
    }
    if (split_box[0] === split_box[1]) {
      split.className  = 'btn';
      split_flg = 1;
    }
  }
  /*
  インシュランス
  インシュランス
  インシュランス
  */
  if (cp_sum1_process === 1) {
    setTimeout(function(){
      let insurance = window.confirm('インシュランスしますか？');
      if (insurance) {
        document.getElementById('box_none').remove();
        let ram = Math.floor(Math.random() * cards.length);
        let cp_box = document.createElement('span')
        let cp_draw = document.createTextNode(cards[ram].mark + cards[ram].num);
        cp_box.className = 'box';
        cp_cards_box.appendChild(cp_box);
        cp_box.appendChild(cp_draw);

        switch(cards[ram].num) {
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
            cp_sum1_process += cards[ram].num;
            cp_sum11_process += cards[ram].num;
            counting++;
          break;
          case 10:
          case 11:
          case 12:
          case 13:
            cp_sum1_process += 10;
            cp_sum11_process += 10;
            counting--;
          break;
          case 1:
            cp_sum1_process += 1;
            if(cp_sum11_process + 11 > 21) {
              cp_sum11_process += 1;
            } else {
              cp_sum11_process += 11;
            }
            counting--;
          break;
          default:
            cp_sum1_process += cards[ram].num;
            cp_sum11_process += cards[ram].num;
          break;
        }
        if (cp_sum11_process == 21) {
          insurance_ok()
          totalmoney = totalmoney + betmoney / 2;
          betmoney = 0;
          money.innerHTML = totalmoney;
          bet.innerHTML = betmoney;
          double.className = 'btn invalid';
          hit.className = 'btn invalid';
          stand.className = 'btn invalid';
          next.className = 'btn';
          split.className = 'btn invalid';
          next_flg = 1;
          insurance_flg = 1;
          split_flg = 0;
        } else {
          insurance_miss()
          betmoney = 0;
          money.innerHTML = totalmoney
          bet.innerHTML = betmoney;
          double.className = 'btn invalid';
          hit.className = 'btn invalid';
          stand.className = 'btn invalid';
          next.className = 'btn';
          split.className = 'btn invalid';
          next_flg = 1;
          insurance_flg = 1;
          split_flg = 0;
        }
        cp_sum1.innerHTML = cp_sum1_process;
        cp_sum11.innerHTML = cp_sum11_process;
        cards.splice(ram, 1);
        // デッキ枚数
        list();
        // カウント
        counting_sum(counting);
      }
    },600);
  }
  /*
  インシュランス終わり
  インシュランス終わり
  インシュランス終わり
  */
  // デッキ枚数
  list();
  // カウント
  counting_sum(counting);
});

// スプリットボタンを押した時
split.addEventListener("click", function() {
  if(start_flg === 0) {
    return;
  }
  if(split_flg === 0) {
    return;
  }
  // ベット額を倍にする
  split1_money = betmoney;
  split2_money = betmoney;
  totalmoney -= betmoney;
  money.innerHTML = totalmoney;
  bet.innerHTML = betmoney * 2;

  hit_flg = 0;
  double_flg = 0;
  stand_flg = 0;
  hit.className = 'btn invalid';
  double.className = 'btn invalid';
  stand.className = 'btn invalid';
  split_flg = 0;
  split.className = 'btn invalid';
  split_area.className = 'split_block';
  let split_user_box = document.createElement('span');
  split_user_cards_box.appendChild(split_user_box);
  split_user_box.appendChild(user_cards_box.firstChild);
  let text_num = split_user_box.textContent.slice(1);
  text_num = Number(text_num);

  // CPスプリット後に１枚ドロー
  let ram = Math.floor(Math.random() * cards.length);
  let split_user_box2 = document.createElement('span')
  let split_user_draw = document.createTextNode(cards[ram].mark + cards[ram].num);
  split_user_box2.className = 'box';
  split_user_cards_box.appendChild(split_user_box2);
  split_user_box2.appendChild(split_user_draw);

  switch(cards[ram].num) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      split_user_sum1_process += cards[ram].num;
      split_user_sum11_process += cards[ram].num;
      counting++;
    break;
    case 10:
    case 11:
    case 12:
    case 13:
      split_user_sum1_process += 10;
      split_user_sum11_process += 10;
      counting--;
    break;
    case 1:
      split_user_sum1_process += 1;
      if(split_user_sum11_process + 11 > 21) {
        split_user_sum11_process += 1;
      } else {
        split_user_sum11_process += 11;
      }
      counting--;
    break;
    default:
      split_user_sum1_process += cards[ram].num;
      split_user_sum11_process += cards[ram].num;
    break;
  }
  split_user_sum1_process += text_num;
  if (text_num === 1) {
    if (split_user_sum11_process + 11 > 21) {
      split_user_sum11_process += 1;
    } else {
      split_user_sum11_process += 11;
    }
  } else {
    split_user_sum11_process += text_num;
  }
  split_user_sum1.innerHTML = split_user_sum1_process;
  split_user_sum11.innerHTML = split_user_sum11_process;
  cards.splice(ram, 1);

  // USERのスプリットしたカードを合計から引く
  user_sum1_process -= text_num;
  if (text_num === 1) {
    if (user_sum11_process - 1 === 11) {
      user_sum11_process -= 1;
    } else {
      user_sum11_process -= 11;
    }
  } else {
    user_sum11_process -= text_num;
  }
  // USERスプリット後に1枚ドロー
  user_play();

  // デッキ枚数
  list();
  // カウント
  counting_sum(counting);
});

// ダブルダウンボタンを押した時
double.addEventListener("click", function() {
  if(start_flg === 0) {
    return;
  }
  if(double_flg === 0) {
    return;
  }
  if(user_sum1_process >= 21) {
    return;
  };
  if(bj_flg === 1) {
    return;
  };
  if(insurance_flg === 1) {
    return;
  };
  if(cp_sum1_process > 16) {
    return;
  };
  double.className = 'btn invalid';
  hit.className = 'btn invalid';
  stand.className = 'btn invalid';
  split.className = 'btn invalid';
  next.className = 'btn';
  next_flg = 1;
  split_flg = 0;
  hit_flg = 0;
  stand_flg = 0;

  // USER PLAY
  user_play();

  // CP PLAY
  cp_play();

  if(user_sum11_process > 21) {
    user_sum11.className = 'bust';
  }

  totalmoney = totalmoney - betmoney;
  betmoney = betmoney * 2;

  if(user_sum1_process > 21) {
    // USER BUST 結果
    user_bust_result();
  } else {
    // 結果
    game_result();
  }

  // デッキ枚数
  list();
  // カウント
  counting_sum(counting);
});

// ヒットボタンを押した時
hit.addEventListener("click", function() {
  if(start_flg === 0) {
    return;
  }
  if(hit_flg === 0) {
    return;
  }
  if(user_sum1_process >= 21) {
    return;
  };
  if(bj_flg === 1) {
    return;
  };
  if(insurance_flg === 1) {
    return;
  };
  if(cp_sum1_process > 16) {
    return;
  };
  split_flg = 0;
  split.className = 'btn invalid';
  double.className = 'btn invalid';
  // USER PLAY
  user_play();

  if(user_sum1_process > 21) {
    // CP PLAY
    cp_play();

    // USER BUST 結果
    user_bust_result();
  }
  if(user_sum11_process > 21) {
    user_sum11.className = 'bust';
  }
  if(user_sum1_process >= 21) {
    hit.className = 'btn invalid';
  }

  // デッキ枚数
  list();
  // カウント
  counting_sum(counting);
});

// スプリットした上段ユーザーのヒットボタンを押した時
split_hit.addEventListener("click", function() {
  if(start_flg === 0) {
    return;
  }
  if(split_hit_flg === 0) {
    return;
  }
  if(split_user_sum1_process >= 21) {
    return;
  };
  if(cp_sum1_process > 16) {
    return;
  };
  
  // USER PLAY
  split_user_play();

  if(split_user_sum1_process > 21) {
    // USER BUST 結果
    split_user_bust_result();
    hit_flg = 1;
    stand_flg = 1;
    hit.className = 'btn';
    stand.className = 'btn';
    split_btn_box.className = 'split_none';
  }
  if(split_user_sum11_process > 21) {
    split_user_sum11.className = 'bust';
  }
  if(split_user_sum1_process >= 21) {
    split_hit.className = 'btn invalid';
  }

  // デッキ枚数
  list();
  // カウント
  counting_sum(counting);
});

// リセットボタンを押した時
reset.addEventListener("click", function(){
  location.reload();
});
// デッキ交換ボタンを押した時
exchange.addEventListener("click", function(){
  cards = [];
  init();
  list();
  counting_sum();
});
// デッキ枚数一覧の非表示ボタンを押した時
hide.addEventListener("click", function(){
  cont.style.color = '#ccc';
  probability.style.color = '#ccc';
  content.style.color = '#ccc';
  hide.style.display = 'none'
  show.style.display = 'inline'
});
// デッキ枚数一覧の表示ボタンを押した時
show.addEventListener("click", function(){
  cont.style.color = 'red';
  probability.style.color = 'red';
  content.style.color = 'black';
  show.style.display = 'none'
  hide.style.display = 'inline'
});
// ベーシックストラテジーの非表示ボタンを押した時
hide2.addEventListener("click", function(){
  strategy.src = 'gray.jpg'; // 画像パス
  hide2.style.display = 'none'
  show2.style.display = 'inline'
});
// ベーシックストラテジーの表示ボタンを押した時
show2.addEventListener("click", function(){
  strategy.src = 'strategy.gif'; // 画像パス
  show2.style.display = 'none'
  hide2.style.display = 'inline'
});

// スタンドボタンを押した時
stand.addEventListener("click", function(){ 
  if(start_flg === 0) {
    return;
  }
  if(stand_flg === 0) {
    return;
  }
  if(user_sum1_process > 21) {
    return;
  }
  if(insurance_flg === 1) {
    return;
  };
  double.className = 'btn invalid';
  hit.className = 'btn invalid';
  split.className = 'btn invalid';
  stand.className = 'btn invalid';
  next.className = 'btn';
  next_flg = 1;
  split_flg = 0;

  // CP PLAY
  cp_play();
  // 結果
  game_result()
  // デッキ枚数
  list();
  // カウント
  counting_sum(counting);
});

// スプリットした上段ユーザーのスタンドボタンを押した時
split_stand.addEventListener("click", function(){ 
  if(start_flg === 0) {
    return;
  }
  if(split_stand_flg === 0) {
    return;
  }
  if(split_user_sum1_process > 21) {
    return;
  }
  hit_flg = 1;
  stand_flg = 1;
  split_hit_flg = 0;
  split_stand_flg = 0;
  hit.className = 'btn';
  stand.className = 'btn';
  split_hit.className = 'btn invalid';
  split_stand.className = 'btn invalid';
  split_btn_box.className = 'split_none';

  // デッキ枚数
  list();
  // カウント
  counting_sum(counting);
});

// ネクストゲームボタンを押した時
next.addEventListener("click", function() {
  if(next_flg === 0) {
    return;
  }

  split_area.className = 'split_none';
  start.className = 'btn';
  next.className = 'btn invalid';
  insurance_flg = 0;
  start_flg = 0;
  next_flg = 0;
  bet_flg = 0;
  bj_flg = 0;
  betmoney = 0;
  $1.className = 'btn';
  $5.className = 'btn';
  $25.className = 'btn';
  $50.className = 'btn';
  $100.className = 'btn';

  cp_cards_box.innerHTML = '';
  user_cards_box.innerHTML = '';
  result.innerHTML = '';
  split_user_cards_box.innerHTML = '';
  result.innerHTML = '';

  cp_sum1_process = 0;
  cp_sum11_process = 0;
  user_sum1_process = 0;
  user_sum11_process = 0;
  split_user_sum1_process = 0;
  split_user_sum11_process = 0;
  cp_sum1.innerHTML = cp_sum1_process;
  cp_sum11.innerHTML = cp_sum11_process;
  user_sum1.innerHTML = user_sum1_process;
  user_sum11.innerHTML = user_sum11_process;
  split_user_sum1.innerHTML = user_sum1_process;
  split_user_sum11.innerHTML = user_sum11_process;

  user_sum1.classList.remove('bust');
  user_sum11.classList.remove('bust');
  cp_sum1.classList.remove('bust');
  cp_sum11.classList.remove('bust');
  split_user_sum1.classList.remove('bust');
  split_user_sum11.classList.remove('bust');
});