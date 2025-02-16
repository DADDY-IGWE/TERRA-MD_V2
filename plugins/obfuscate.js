


const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
  pattern: 'obfuscate',
  alias: ['obf'],
  react: '🖤',
  desc: 'Obfuscates JavaScript code.',
  category: 'main',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply('Please provide JavaScript code to obfuscate.');

    await reply('> *Obfuscating code...*');

    const response = await fetchJson(`https://api.giftedtech.web.id/api/tools/encrypt?apikey=gifted&code=${encodeURIComponent(q)}`);

    if (!response || !response.result) {
      throw new Error('Failed to obfuscate code');
    }

    const obfuscatedCode = response.result;

    await conn.sendMessage(m.chat, { text: obfuscatedCode }, { quoted: m });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});