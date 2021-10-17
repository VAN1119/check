function check() {
    let str = [];
    //ラジオボタンの中身を取得
    const q = [document.ask.q0, document.ask.q1, document.ask.q2];
    //A・B・Cそれぞれの合計点数を入れるための変数
    var aaa = 0;
    var bbb = 0;
    var ccc = 0;
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
}