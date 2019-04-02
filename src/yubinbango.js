"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var YubinBango;
(function (YubinBango) {
    var dataSource = 'https://yubinbango.github.io/yubinbango-data/data';
    var prefectures = [
        null, '北海道', '青森県', '岩手県', '宮城県',
        '秋田県', '山形県', '福島県', '茨城県', '栃木県',
        '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
        '新潟県', '富山県', '石川県', '福井県', '山梨県',
        '長野県', '岐阜県', '静岡県', '愛知県', '三重県',
        '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県',
        '和歌山県', '鳥取県', '島根県', '岡山県', '広島県',
        '山口県', '徳島県', '香川県', '愛媛県', '高知県',
        '福岡県', '佐賀県', '長崎県', '熊本県', '大分県',
        '宮崎県', '鹿児島県', '沖縄県'
    ];
    var normalizeZipCode = function (input) {
        var a = input.replace(/[０-９]/g, function (s) { return String.fromCharCode(s.charCodeAt(0) - 65248); });
        var b = a.match(/\d/g);
        if (!b)
            throw input + " is invalid zip code format";
        var normalized = b.join('');
        if (normalized.length !== 7)
            throw "zip code must be 7 characters\n input: " + input;
        return normalized;
    };
    YubinBango.getAddress = function (zipCode) {
        var normalized = normalizeZipCode(zipCode);
        var zipCodeA = zipCode.substr(0, 3);
        var dataUrl = dataSource + "/" + zipCodeA + ".js";
        window.$yubin = function (data) {
            console.log(data[normalized]);
        };
        var scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "text/javascript");
        scriptTag.setAttribute("charset", "UTF-8");
        scriptTag.setAttribute("src", dataUrl);
        if (!document.head)
            document.createElement('head');
        document.head.appendChild(scriptTag);
    };
})(YubinBango || (YubinBango = {}));
exports.default = YubinBango;
