// 脚本执行入口
!(async () => {
  typeof $request !== `undefined` ? await getCk() : (CryptoJS = await intCryptoJS(), await main());  // 主函数
})()
    .catch((e) => $.messages.push(e.message || e) && $.logErr(e))
    .finally(async () => {
      // await sendMsg($.messages.join('\n').trimStart().trimEnd());  // 推送通知
      // $.done();
    })

//--------
function pushMsg(msg) {
  $.messages.push(msg.trimEnd()), $.log(msg.trimEnd());
}

//加载 crypto-js
async function intCryptoJS() {
  function Eval_Crypto(script_str) {
    const evalFunc = $.isNode() ? global.eval : eval;
    evalFunc(script_str);
    return $.isNode() ? global.CryptoJS : CryptoJS;
  }
  let script_str = ($.isNode() ? require("crypto-js") : $.getdata("cryptojs_Script")) || "";
  if ($.isNode()) {
    return script_str;
  }
  if (script_str && Object.keys(script_str).length) {
    $.log("✅ " + $.name + ": 缓存中存在CryptoJS代码, 跳过下载");
    return Eval_Crypto(script_str)
  }

  $.log("🚀 " + "开始下载CryptoJS代码");
  // const script_str = (await $.http.get('http://192.168.2.170:8080/crypto-js.min.js')).body;
  // Eval_Crypto(script_str);
  return new Promise(async resolve => {
    $.getScript('http://ys-l.ysepan.com/551976330/420094417/k5G4J73367NKLlPfoiL4c/crypto-js.min.js').then(script_str => {
      $.setdata(script_str, "cryptojs_Script");
      Eval_Crypto(script_str)
      $.log("✅ CryptoJS加载成功");
      resolve(CryptoJS);
    });
  });
}

 
// 示例字符串和密钥
var message = "Hello, Quantumult X!";
var key = "secret_key";

// 对字符串进行 UTF-8 编码解析
var utf8Message = CryptoJS.enc.Utf8.parse(message);

// 进行 HMAC-SHA256 哈希计算
var hash = CryptoJS.HmacSHA256(utf8Message, key);

// 将哈希结果进行 Base64 编码
var base64Hash = CryptoJS.enc.Base64.stringify(hash);

console.log(base64Hash);  // 打印结果
