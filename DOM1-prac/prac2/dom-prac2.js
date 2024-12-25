"use strict";
function play(userChoice) {
    const choices = ['グー', 'チョキ', 'パー'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = `あなたの手: ${userChoice} | コンピュータの手: ${computerChoice}\n`;

    if (userChoice === computerChoice) {
        result += '引き分けです！';
    } else if (
        (userChoice === 'グー' && computerChoice === 'チョキ') ||
        (userChoice === 'チョキ' && computerChoice === 'パー') ||
        (userChoice === 'パー' && computerChoice === 'グー')
    ) {
        result += 'あなたの勝ちです！';
    } else {
        result += 'あなたの負けです！';
    }

    document.getElementById('result').textContent = result;
}
