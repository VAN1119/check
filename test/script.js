function check() {
    let str = [];
    //ラジオボタンの中身を取得
    const q = [document.ask.q0, document.ask.q1, document.ask.q2];
    //変数の宣言
    var aaa = 0;
    var bbb = 0;
    
    // for文でqの配列の要素番号をaaaに足し込む
    for (let i = 0; i < q.length; i++) {
        // qの配列の中でラジオボタンの選択肢の配列(2字配列)を呼び出し
        for (let j = 0; j < q[i].length; j++) {
            //　チェックが入っているラジオボタンの検索
            if(q[i][j].checked) {
                // チェックが入ってるラジオボタンのvalueをbbbに代入
                bbb = q[i][j].value;
                //valueからは文字列しか取得できないのでbbbの文字列を強制的に数値に変換してaaaに代入
                aaa += Number(bbb);
                // ラジオボタンは1つしか選べないのでvalueを取得後にブレイク
                break;
            }
        }
    }
    if (aaa < 9) {
        window.location.href = 'a.html';
    } else if (aaa > 9) {
        window.location.href = 'b.html'; // 通常の遷移
    } else {
        window.location.href = 'c.html'; // 通常の遷移
    }
    /*
    //どのラジオボタンが選択されたか判定し、点数を加算
    for (let n = 0; n < q.length; n++) {
        for (let i = 0; i < q[n].length; i++) {
            if (q[n][i].checked) {
                str[n] = q[n][i].value;
                if (str[n] == "A") {
                    aaa++;
                } else if (str[n] == "B") {
                    bbb++;
                } else if (str[n] == "C") {
                    ccc++;
                }
                break;
            }
        }
    }
    
    //結果の条件分岐
    var message = "";
    if (aaa > bbb && aaa > ccc) {
        // aへ移動
        window.location.href = 'a.html';
    } else if (bbb > aaa && bbb > ccc) {
        // bへ移動
        window.location.href = 'b.html'; // 通常の遷移
    } else if (ccc > aaa && ccc > bbb) {
        window.location.href = 'c.html'; // 通常の遷移
    } else {
        window.location.href = 'd.html'; // 通常の遷移
    }
    */
}