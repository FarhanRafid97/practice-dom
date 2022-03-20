const kabataku = document.querySelector('.kabataku')
const kubus = document.querySelector('.kubus')
const form = document.querySelector('.form')

let show = ``

kabataku.addEventListener('click',function(){
  
let kabatakuForm=`<input type="text" class='kabatakuInput1' placeholder="Angka Pertama">
                <br>
                <input type="text" class='kabatakuInput2' placeholder='Angka Kedua'>
                <br>
                <div class="hasil">Hasil</div>
                <br>
                <button type="button "class='kali'>KALI</button>
                <button type="button "class='bagi'>BAGI</button>
                <button type="button "class='tambah'>TAMBAH</button>
                <button type="button "class='kurang'>KURANG</button>`

form.innerHTML = kabatakuForm

const elementAngka1 = document.querySelector('.kabatakuInput1')
const elementAngka2 = document.querySelector('.kabatakuInput2')

elementAngka1.addEventListener('click',function(){
    elementAngka1.value = ''
})
const elementKali = document.querySelector('.kali')
const elementBagi = document.querySelector('.bagi')
const elementTambah = document.querySelector('.tambah')
const elementKurang = document.querySelector('.kurang')

const elementHasil= document.querySelector('.hasil')
elementKali.addEventListener('click', function(){
    elementHasil.textContent = Number(elementAngka1.value) * Number(elementAngka2.value)

    elementAngka1.value = ''
    elementAngka2.value = ''
})
elementBagi.addEventListener('click', function(){
    elementHasil.textContent = Number(elementAngka1.value) / Number(elementAngka2.value)
    elementAngka1.value = ''
    elementAngka2.value = ''
})
elementTambah.addEventListener('click', function(){
    elementHasil.textContent =Number(elementAngka1.value) + Number(elementAngka2.value)
    elementAngka1.value = ''
    elementAngka2.value = ''
})
elementKurang.addEventListener('click', function(){
    elementHasil.textContent =Number(elementAngka1.value) - Number(elementAngka2.value)
    elementAngka1.value = ''
    elementAngka2.value = ''
})
    
})



kubus.addEventListener('click',function(){
    const kubusForm=`<input type="text" class='jari' placeholder='Jari-Jari Tabung(cm)'>
                     <br>
                     <input type="text" class='tinggi' placeholder='Tinggi Tabung(cm)'>
                     <br>
                     <div class="hasil">Hasil</div>
                     <br>
                     <button type="button "class='hitung'>HITUNG</button>`
                    
form.innerHTML = ''
form.innerHTML = kubusForm
        
const elementHasil = document.querySelector('.hasil')
const elementHitung = document.querySelector('.hitung')
const elementJari = document.querySelector('.jari')
const elementtinggi = document.querySelector('.tinggi')

elementHitung.addEventListener('click',function(){
    let jarijari = Number(elementJari.value)
    let tinggi = Number(elementtinggi.value)
   let  hasil = 3.14*jarijari*jarijari*tinggi
   elementHasil.textContent = `${hasil}cm`


})
    })

