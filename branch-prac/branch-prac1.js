let a = (window.prompt('ユーザーが身長を入力するダイアログ>>'));
if (!a || !a.match(/\S/g)) {
    window.alert('入力がないと判定ができません。');
} else if (isNaN(a)) {
    window.alert('半角数字で入力してください。');
} else if (a >= 100) {
    b = window.confirm('プレミアムチケットを持っていますか？');
    if (b === true) {
        window.alert('プレミアムシートに乗車可能です。');
    } else {
        window.alert('通常のシートに乗車可能です。');
    }
} else if (a >= 90) {
    window.alert('付き添いありで乗車可能です。');
} else {
    window.alert('乗車できません。');
}