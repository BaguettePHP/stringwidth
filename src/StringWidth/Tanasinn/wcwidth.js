/* -*- Mode: JAVASCRIPT; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is tanasinn
 *
 * The Initial Developer of the Original Code is * Hayaki Saito.
 * Portions created by the Initial Developer are Copyright (C) 2010 - 2011
 * the Initial Developer. All Rights Reserved.
 *
 * ***** END LICENSE BLOCK ***** */

"use strict";

function wcwidth_amb_as_single(c)
{
    if (c < 0x10000) {
        var s = String.fromCharCode(c);
        if (/^[\u1100-\u115f\u2329\u232a\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3000-\u3039\u303b-\u303e\u303a\u3041-\u3096\u309f\u309a-\u309e\u30a0\u30fb\u30ff\u30a1-\u30fa\u30fc-\u30fe\u3105-\u312d\u3131-\u318e\u3190-\u31ba\u31c0-\u31e3\u31f0-\u321e\u3220-\u3247\u3250-\u32fe\u3300-\u4dbf\u4e00-\u9fff\ua015\ufe17-\ufe19\ufe30\ufe35-\ufe44\ufe47\ufe48\ufe58-\ufe5e\ufe62\ufe63\ufe68\ufe69\uff04\uff08-\uff0d\uff3b-\uff40\uff5b-\uff60\uffe2-\uffe4\ua000-\ua014\ua016-\ua48c\ua490-\ua4c6\ua960-\ua97c\uac00-\ud7a3\uf900-\ufaff\ufe10-\ufe16\ufe31-\ufe34\ufe45\ufe46\ufe49-\ufe52\ufe54-\ufe57\ufe5f-\ufe61\ufe64-\ufe66\ufe6a\ufe6b\uff01-\uff03\uff05-\uff07\uff0e-\uff3a\uff41-\uff5a\uffe0\uffe1\uffe5]$/.test(s)) {
            return 2;
        } else if (/^[\u0000\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0600-\u0605\u0610-\u061a\u061c\u064b-\u065f\u0670\u06d6-\u06dd\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u070f\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962\u0963\u0981\u09bc\u09c1-\u09c4\u09cd\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b62\u0b63\u0b82\u0bc0\u0bcd\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c81\u0cbc\u0cbf\u0cc6\u0ccc\u0ccd\u0ce2\u0ce3\u0d01\u0d41-\u0d44\u0d4d\u0d62\u0d63\u0dca\u0dd2-\u0dd4\u0dd6\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180e\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1bab-\u1bad\u1be6\u1be8\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u206f\u20d0-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u3099\u309a\ua66f-\ua672\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaec\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2d\ufeff\ufff9]$/.test(s)) {
            return 0;
        }
        return 1;
    } else if (c < 0x1F200) {
        return 1;
    } else if (c < 0x1F300) {
        return 2;
    } else if (c < 0x20000) {
        return 1;
    } else if (c < 0xE0000) {
        return 2;
    }
    return 1;
}

function wcwidth_amb_as_single_with_emoji_fix(c)
{
    if (c < 0x10000) {
        var s = String.fromCharCode(c);
        if (/^[\u1100-\u115f\u2329\u232a\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3000-\u3039\u303b-\u303e\u303a\u3041-\u3096\u309f\u309a-\u309e\u30a0\u30fb\u30ff\u30a1-\u30fa\u30fc-\u30fe\u3105-\u312d\u3131-\u318e\u3190-\u31ba\u31c0-\u31e3\u31f0-\u321e\u3220-\u3247\u3250-\u32fe\u3300-\u4dbf\u4e00-\u9fff\ua015\ufe17-\ufe19\ufe30\ufe35-\ufe44\ufe47\ufe48\ufe58-\ufe5e\ufe62\ufe63\ufe68\ufe69\uff04\uff08-\uff0d\uff3b-\uff40\uff5b-\uff60\uffe2-\uffe4\ua000-\ua014\ua016-\ua48c\ua490-\ua4c6\ua960-\ua97c\uac00-\ud7a3\uf900-\ufaff\ufe10-\ufe16\ufe31-\ufe34\ufe45\ufe46\ufe49-\ufe52\ufe54-\ufe57\ufe5f-\ufe61\ufe64-\ufe66\ufe6a\ufe6b\uff01-\uff03\uff05-\uff07\uff0e-\uff3a\uff41-\uff5a\uffe0\uffe1\uffe5]$/.test(s)) {
            return 2;
        } else if (/^[\u0000\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0600-\u0605\u0610-\u061a\u061c\u064b-\u065f\u0670\u06d6-\u06dd\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u070f\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962\u0963\u0981\u09bc\u09c1-\u09c4\u09cd\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b62\u0b63\u0b82\u0bc0\u0bcd\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c81\u0cbc\u0cbf\u0cc6\u0ccc\u0ccd\u0ce2\u0ce3\u0d01\u0d41-\u0d44\u0d4d\u0d62\u0d63\u0dca\u0dd2-\u0dd4\u0dd6\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180e\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1bab-\u1bad\u1be6\u1be8\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u206f\u20d0-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u3099\u309a\ua66f-\ua672\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaec\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2d\ufeff\ufff9]$/.test(s)) {
            return 0;
        }
        return 1;
    } else if (c < 0xE0000) {
        return 2;
    }
    return 1;
}

function wcwidth_amb_as_double(c)
{
    if (c < 0x10000) {
        var s = String.fromCharCode(c);
        if (/^[\u00a1\u00a4\u00a7\u00a8\u00aa\u00ad\u00ae\u00b0\u00b1\u00b4\u00b8-\u00ba\u00bf\u00c6\u00d0\u00d7\u00d8\u00e6\u00f0\u00f7\u00fc\u00fe\u00b2\u00b3\u00b6\u00b7\u00bc-\u00be\u00de-\u00e1\u00e8-\u00ea\u00ec\u00ed\u00f2\u00f3\u00f8-\u00fa\u0101\u0111\u0113\u011b\u0126\u0127\u012b\u0131-\u0133\u0138\u013f-\u0142\u0144\u0148\u0149\u014d\u014a\u014b\u0152\u0153\u0166\u0167\u016b\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u0251\u0261\u02c4\u02c7\u02cd\u02d0\u02dd\u02df\u02c9-\u02cb\u02d8-\u02db\u030a-\u030f\u031a-\u031f\u032a-\u032f\u033a-\u033f\u034a-\u034f\u035a-\u035f\u036a-\u036f\u0391-\u03a1\u03a3-\u03a9\u03b1-\u03c1\u03c3-\u03c9\u0401\u0410-\u044f\u0451\u1100-\u115f\u2010\u2013-\u2016\u2018\u2019\u201c\u201d\u2020-\u2022\u2024-\u2027\u2030\u2032\u2033\u2035\u203b\u203e\u2074\u207f\u2081-\u2084\u20ac\u2103\u2105\u2109\u2113\u2116\u2121\u2122\u2126\u212b\u2153\u2154\u215b-\u215e\u2160-\u216b\u2170-\u2179\u2189\u2190-\u2199\u21d2\u21d4\u21e7\u21b8\u21b9\u2200\u2202\u2203\u2207\u2208\u220b\u220f\u2211\u2215\u221a\u221d-\u2220\u2223\u2225\u2227-\u2229\u222e\u222a-\u222c\u2234-\u2237\u223c\u223d\u2248\u224c\u2252\u2260\u2261\u2264-\u2267\u226a\u226b\u226e\u226f\u2282\u2283\u2286\u2287\u2295\u2299\u22a5\u22bf\u2312\u2329\u232a\u2460-\u24e9\u24eb-\u254b\u2550-\u2573\u2580-\u258f\u2592-\u2595\u25b6\u25b7\u25c0\u25c1\u25cb\u25ef\u25a0\u25a1\u25a3-\u25a9\u25b2\u25b3\u25bc\u25bd\u25c6-\u25c8\u25ce-\u25d1\u25e2-\u25e5\u2605\u2606\u2609\u260e\u260f\u2614\u2615\u261c\u261e\u2640\u2642\u2660\u2661\u2663-\u2665\u2667-\u2669\u266f\u266a\u266c\u266d\u269e\u269f\u26e3\u26be\u26bf\u26c4-\u26cd\u26cf-\u26e1\u26e8-\u26ff\u273d\u2757\u2776-\u277f\u2b55-\u2b59\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3000-\u3039\u303b-\u303e\u303a\u3041-\u3096\u309f\u309a-\u309e\u30a0\u30fb\u30ff\u30a1-\u30fa\u30fc-\u30fe\u3105-\u312d\u3131-\u318e\u3190-\u31ba\u31c0-\u31e3\u31f0-\u321e\u3220-\u32fe\u3300-\u4dbf\u4e00-\u9fff\ua015\ufe17-\ufe19\ufe30\ufe35-\ufe44\ufe47\ufe48\ufe58-\ufe5e\ufe62\ufe63\ufe68\ufe69\uff04\uff08-\uff0d\uff3b-\uff40\uff5b-\uff60\uffe2-\uffe4\ufffd\ua000-\ua014\ua016-\ua48c\ua490-\ua4c6\ua960-\ua97c\uac00-\ud7a3\ue000-\ufaff\ufe00-\ufe16\ufe31-\ufe34\ufe45\ufe46\ufe49-\ufe52\ufe54-\ufe57\ufe5f-\ufe61\ufe64-\ufe66\ufe6a\ufe6b\uff01-\uff03\uff05-\uff07\uff0e-\uff3a\uff41-\uff5a\uffe0\uffe1\uffe5]$/.test(s)) {
            return 2;
        } else if (/^[\u0000\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0600-\u0605\u0610-\u061a\u061c\u064b-\u065f\u0670\u06d6-\u06dd\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u070f\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962\u0963\u0981\u09bc\u09c1-\u09c4\u09cd\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b62\u0b63\u0b82\u0bc0\u0bcd\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c81\u0cbc\u0cbf\u0cc6\u0ccc\u0ccd\u0ce2\u0ce3\u0d01\u0d41-\u0d44\u0d4d\u0d62\u0d63\u0dca\u0dd2-\u0dd4\u0dd6\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180e\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1bab-\u1bad\u1be6\u1be8\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u206f\u20d0-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u3099\u309a\ua66f-\ua672\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaec\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2d\ufeff\ufff9]$/.test(s)) {
            return 0;
        }
        return 1;
    } else if (c < 0x1F100) {
        return 1;
    } else if (c < 0x1F1A0) {
        if (c === 0x1F12E) {
            return 1;
        } else if (c === 0x1F16A) {
            return 1;
        } else if (c === 0x1F16B) {
            return 1;
        }
        return 2;
    } else if (c < 0x1F200) {
        return 1;
    } else if (c < 0x1F300) {
        return 2;
    } else if (c < 0x20000) {
        return 1;
    } else if (c < 0xf0000) {
        return 2;
    }
    return 1;
}

function wcwidth_amb_as_double_with_emoji_fix(c)
{
    if (c < 0x10000) {
        var s = String.fromCharCode(c);
        if (/^[\u00a1\u00a4\u00a7\u00a8\u00aa\u00ad\u00ae\u00b0\u00b1\u00b4\u00b8-\u00ba\u00bf\u00c6\u00d0\u00d7\u00d8\u00e6\u00f0\u00f7\u00fc\u00fe\u00b2\u00b3\u00b6\u00b7\u00bc-\u00be\u00de-\u00e1\u00e8-\u00ea\u00ec\u00ed\u00f2\u00f3\u00f8-\u00fa\u0101\u0111\u0113\u011b\u0126\u0127\u012b\u0131-\u0133\u0138\u013f-\u0142\u0144\u0148\u0149\u014d\u014a\u014b\u0152\u0153\u0166\u0167\u016b\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u0251\u0261\u02c4\u02c7\u02cd\u02d0\u02dd\u02df\u02c9-\u02cb\u02d8-\u02db\u030a-\u030f\u031a-\u031f\u032a-\u032f\u033a-\u033f\u034a-\u034f\u035a-\u035f\u036a-\u036f\u0391-\u03a1\u03a3-\u03a9\u03b1-\u03c1\u03c3-\u03c9\u0401\u0410-\u044f\u0451\u1100-\u115f\u2010\u2013-\u2016\u2018\u2019\u201c\u201d\u2020-\u2022\u2024-\u2027\u2030\u2032\u2033\u2035\u203b\u203e\u2074\u207f\u2081-\u2084\u20ac\u2103\u2105\u2109\u2113\u2116\u2121\u2122\u2126\u212b\u2153\u2154\u215b-\u215e\u2160-\u216b\u2170-\u2179\u2189\u2190-\u2199\u21d2\u21d4\u21e7\u21b8\u21b9\u2200\u2202\u2203\u2207\u2208\u220b\u220f\u2211\u2215\u221a\u221d-\u2220\u2223\u2225\u2227-\u2229\u222e\u222a-\u222c\u2234-\u2237\u223c\u223d\u2248\u224c\u2252\u2260\u2261\u2264-\u2267\u226a\u226b\u226e\u226f\u2282\u2283\u2286\u2287\u2295\u2299\u22a5\u22bf\u2312\u2329\u232a\u2460-\u24e9\u24eb-\u254b\u2550-\u2573\u2580-\u258f\u2592-\u2595\u25b6\u25b7\u25c0\u25c1\u25cb\u25ef\u25a0\u25a1\u25a3-\u25a9\u25b2\u25b3\u25bc\u25bd\u25c6-\u25c8\u25ce-\u25d1\u25e2-\u25e5\u2605\u2606\u2609\u260e\u260f\u2614\u2615\u261c\u261e\u2640\u2642\u2660\u2661\u2663-\u2665\u2667-\u2669\u266f\u266a\u266c\u266d\u269e\u269f\u26e3\u26be\u26bf\u26c4-\u26cd\u26cf-\u26e1\u26e8-\u26ff\u273d\u2757\u2776-\u277f\u2b55-\u2b59\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3000-\u3039\u303b-\u303e\u303a\u3041-\u3096\u309f\u309a-\u309e\u30a0\u30fb\u30ff\u30a1-\u30fa\u30fc-\u30fe\u3105-\u312d\u3131-\u318e\u3190-\u31ba\u31c0-\u31e3\u31f0-\u321e\u3220-\u32fe\u3300-\u4dbf\u4e00-\u9fff\ua015\ufe17-\ufe19\ufe30\ufe35-\ufe44\ufe47\ufe48\ufe58-\ufe5e\ufe62\ufe63\ufe68\ufe69\uff04\uff08-\uff0d\uff3b-\uff40\uff5b-\uff60\uffe2-\uffe4\ufffd\ua000-\ua014\ua016-\ua48c\ua490-\ua4c6\ua960-\ua97c\uac00-\ud7a3\ue000-\ufaff\ufe00-\ufe16\ufe31-\ufe34\ufe45\ufe46\ufe49-\ufe52\ufe54-\ufe57\ufe5f-\ufe61\ufe64-\ufe66\ufe6a\ufe6b\uff01-\uff03\uff05-\uff07\uff0e-\uff3a\uff41-\uff5a\uffe0\uffe1\uffe5]$/.test(s)) {
            return 2;
        } else if (/^[\u0000\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0600-\u0605\u0610-\u061a\u061c\u064b-\u065f\u0670\u06d6-\u06dd\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u070f\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962\u0963\u0981\u09bc\u09c1-\u09c4\u09cd\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b62\u0b63\u0b82\u0bc0\u0bcd\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c81\u0cbc\u0cbf\u0cc6\u0ccc\u0ccd\u0ce2\u0ce3\u0d01\u0d41-\u0d44\u0d4d\u0d62\u0d63\u0dca\u0dd2-\u0dd4\u0dd6\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180e\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1bab-\u1bad\u1be6\u1be8\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u206f\u20d0-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u3099\u309a\ua66f-\ua672\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaec\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2d\ufeff\ufff9]$/.test(s)) {
            return 0;
        }
        return 1;
    } else if (c < 0xf0000) {
        return 2;
    }
    return 1;
}

