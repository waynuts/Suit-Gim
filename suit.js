var tanya = true
while (tanya) {
    
    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang')

    // menangkap pilihan computer
    var comp = Math.random()

    if(comp < 0.34) {
        comp = 'gajah'
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang'
    } else {
        comp = 'semut'
    }

    var hasil = ''
    // menentukan rules

    if (p == comp) {
        hasil = (comp == 'orang') ? 'Menang!' : 'Kalah!'
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'Kalah!' : 'Menang!'
    } else if(p == 'semut') {
        hasil = (comp == 'orang') ? 'Kalah!' : 'Menang!'
    }else {
        hasil = 'Memasukan pilihan salah!'
    }

    // output
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil)

    tanya = confirm('lagi?')
}
alert('terimakasih sudah bermain')