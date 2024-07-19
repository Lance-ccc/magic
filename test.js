@import-url  https://cdn.bootcdn.net/ajax/libs/crypto-js/4.1.1/crypto-js.min.js


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
