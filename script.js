

let tx = document.getElementById('tx');
let btn = document.getElementById('btn');
let show = document.getElementById('show');
btn.addEventListener('click', () => removeAccents(tx.value));

function removeAccents(str) {
  str = str.trim();
  // str = str.trim().replace(/\s/g, ' ');
  let content = str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ' ')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
   let result = content.replace(/ +/g, '');
//     let result = content.replace(/ +/g, '-').toLowerCase();
  // let result = content.split(" ").join('-').toLowerCase();
   console.log(result);
  show.innerText = result;
}
