// สร้าง หน้าเริ่มเกม.html โดยฝังโมดูล 2.1-2.4 (shim require สำหรับเบราว์เซอร์)
const fs=require('fs'),path=require('path');
const files={'2.1':'2.1 ระบบเริ่มเกม.js','2.2':'2.2 ระบบเลือกท่าบริหาร.js','2.3':'2.3 ระบบควบคุมลำดับการเล่น.js','2.4':'2.4 ระบบหยุดและสิ้นสุดเกม.js','2.5':'2.5 ระบบรองรับกล้อง.js'};
let m='const __src={},__cache={};function require(p){const k=p.replace("./","").slice(0,3);if(__cache[k])return __cache[k].exports;const mod={exports:{}};__cache[k]=mod;__src[k](mod,mod.exports,require);return mod.exports}\n';
for(const[k,f]of Object.entries(files)){
  const src=fs.readFileSync(path.join(__dirname,f),'utf8').replace(/<\/script/gi,'<\/script');
  m+=`__src['${k}']=function(module,exports,require){${src}\n};\n`;
}
const t=fs.readFileSync(path.join(__dirname,'หน้าเริ่มเกม.template.html'),'utf8');
fs.writeFileSync(path.join(__dirname,'หน้าเริ่มเกม.html'),t.replace('/*__MODULES__*/',()=>m));
