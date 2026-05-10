const { ethix } = require('../lib/ethix'); // Path check kar lein

ethix({
    pattern: "spam",
    desc: "Spam messages safely",
    category: "misc",
    use: '.spam 5|Hello',
    filename: __filename
},
async(conn, mek, m,{from, q, reply}) => {
    try {
        if (!q.includes('|')) return reply("Usage: .spam number|text\nExample: .spam 5|Hello");
        const [count, ...textArr] = q.split("|");
        const text = textArr.join("|");
        const limit = parseInt(count);

        if (limit > 30) return reply("Bhai, 30 se zyada limit mat rakho.");

        for (let i = 0; i < limit; i++) {
            await conn.sendMessage(from, { text: text }, { quoted: mek });
        }
    } catch (e) {
        console.log(e);
    }
})

