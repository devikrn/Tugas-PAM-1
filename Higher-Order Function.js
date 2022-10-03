let orang = [
  { nama: 'Sutan', umur: 16 },
  { nama: 'Joni', umur: 18 },
  { nama: 'Mark', umur: 27 },
  { nama: 'Back', umur: 14 },
  { nama: 'Toni', umur: 24},
]

orang = orang.filter(orang => orang.umur >= 18)
alert(orang.map(orang => orang.nama)) // ['Joni','Mark','Toni']
Lihat hasil
