/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/






const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "📃",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────●●*
> *BOT CREATOR:*
*|* *IGWE TECH*

> *TERRA_MD REPO:*
 | https://github.com/LORD-IGWE/TERRA-MD

> *SUPPORT CHANNEL:*
 | https://whatsapp.com/channel/0029Vb2VplFFCCoQsZKtVV24
*╰──────────●●*

> *CREATED BY IGWETECH*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "igwe ᴄʜᴀɴɴᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'TERRA MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/LORD-IGWE/TERRA-MD" ,
thumbnailUrl: "https://i.imgur.com/392ueVP.jpeg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
