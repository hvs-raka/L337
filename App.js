import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Image,
  Clipboard,
  Linking,
} from "react-native";

const LeetConverter = () => {
  const [inputText, setInputText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  let a = ["4", "a", "A", "@", "⋋", "ɑ", "ʎ"];
  let b = ["B", "b", "₿"];
  let c = ["(", "<", "{", "©", "∁"];
  let d = ["|)", "D", "d"];
  let e = ["3", "£", "∃", "€", "ɐ", "e", "E", "ɘ", "∈", "∋", "∑"];
  let f = ["F", "f", "₣", "ƒ", "⨎"];
  let g = ["G", "g", "₲", "Ġ", "ğ"];
  let h = ["H", "h", "#"];
  let i = ["1", "i", "I", "!", "¡", "Î", "ⅰ"];
  let j = ["J", "j"];
  let k = ["|<", "K", "k", "ʞ"];
  let l = ["l", "L", "⌊", "Ł"];
  let m = ["|\\/|", "|V|", "₥", "₼", "ɱ", "M", "m", "ℳ"];
  let n = ["N", "n", "|\\|", "[\\]", "₦", "ɧ", "∏", "∩", "⊓", "ɳ"];
  let o = ["0", "()", "[]", "O", "o", "¤", "ö", "⊕", "⊗"];
  let p = ["P", "p", "⁋", "₱", "₽", "℗"];
  let q = ["Q", "q", "(,)", "Ø", "ø", "ɸ", "ↀ"];
  let r = ["R", "r", "|2"];
  let s = ["5", "s", "S", "$", "ʂ"];
  let t = ["7", "T", "t", "+", "₸", "ʈ", "⊤", "†", "∔"];
  let u = ["|_|", "U", "u", "(_)", "µ", "ʉ", "ʊ", "ʋ", "∐", "⊔"];
  let v = [
    "\\/",
    "V",
    "v",
    "✓",
    "Ⅴ",
    "∇",
    "√",
    "∨",
    "⋎",
    "⩒",
    "⩔",
    "⩗",
    "⩛",
    "⩡",
  ];
  let w = ["vv", "W", "w", "\\^/", "₩", "Ŵ", "⩖", "⩊"];
  let x = ["><", "X", "x", ")(", "※", "Ⅹ", "⋈", "⨉", "⨯"];
  let y = ["y", "y", "¥", "Ÿ"];
  let z = ["2", "z", "Z", "⪔"];

  const convertToLeet = () => {
    const leetMappings = {
      A: a[Math.floor(Math.random() * a.length)],
      B: b[Math.floor(Math.random() * b.length)],
      C: c[Math.floor(Math.random() * c.length)],
      D: d[Math.floor(Math.random() * d.length)],
      E: e[Math.floor(Math.random() * e.length)],
      F: f[Math.floor(Math.random() * f.length)],
      G: g[Math.floor(Math.random() * g.length)],
      H: h[Math.floor(Math.random() * h.length)],
      I: i[Math.floor(Math.random() * i.length)],
      J: j[Math.floor(Math.random() * j.length)],
      K: k[Math.floor(Math.random() * k.length)],
      L: l[Math.floor(Math.random() * l.length)],
      M: m[Math.floor(Math.random() * m.length)],
      N: n[Math.floor(Math.random() * n.length)],
      O: o[Math.floor(Math.random() * o.length)],
      P: p[Math.floor(Math.random() * p.length)],
      Q: q[Math.floor(Math.random() * q.length)],
      R: r[Math.floor(Math.random() * r.length)],
      S: s[Math.floor(Math.random() * s.length)],
      T: t[Math.floor(Math.random() * t.length)],
      U: u[Math.floor(Math.random() * u.length)],
      V: v[Math.floor(Math.random() * v.length)],
      W: w[Math.floor(Math.random() * w.length)],
      X: x[Math.floor(Math.random() * x.length)],
      Y: y[Math.floor(Math.random() * y.length)],
      Z: z[Math.floor(Math.random() * z.length)],
    };

    const convertedText = inputText
      .toUpperCase()
      .split("")
      .map((char) => leetMappings[char] || char)
      .join("");

    setConvertedText(convertedText);
  };

  const copyIt = () => Clipboard.setString(convertedText);

  return (
    <View style={styles.container}>
      <Image style={styles.main_image} source={require("./assets/icon.png")} />
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={inputText}
        onChangeText={setInputText}
      />

      <button title="Go L337" style={styles.button} onClick={convertToLeet}>
        <buttontext style={styles.button_text}>Go L337</buttontext>
      </button>

      <Text selectable={true} style={styles.convertedText}>
        {convertedText}
      </Text>
      <button style={styles.button} onClick={copyIt}>
        <buttontext style={styles.button_text}>Copy</buttontext>
      </button>
      <Text style={styles.text_style}>
        Created by{" "}
        <Text
          style={{
            textDecorationLine: "underline",
          }}
          onPress={() => Linking.openURL("https://linktr.ee/hvs_raka")}
        >
          Raka
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  convertedText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  main_image: {
    width: "50%",
    height: "30%",
    alignSelf: "center",
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button_text: {
    fontSize: 15,
    color: "#fff",
  },
  text_style: {
    textAlign: "center",
    paddingTop: "60%",
  },
});

export default LeetConverter;
