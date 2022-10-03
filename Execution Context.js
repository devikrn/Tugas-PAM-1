*javascript akan melakukan creation phase pada global execution context dan menghoisting isi function a */
function a() {
  /* execution phase: Menjalankan console.log ('ini a') dan tampil ke layar 'ini a' lalu loncat ke function 'b' dan membuat local Execution Context. */
  console.log("ini a")

  /* creation phase: pada local execution context dan menghoisting function b */
  function b() {
    /* creation phase: pada local execution context dan menghoisting function c */
    function c() {
      /* tidak terjadi creation phase karena tidak ada function atau variabel dalam function c */

      /* Execution phase : Menjalankan console.log ('ini c') dan tampil ke layar 'ini c'. */
      console.log("ini c")
    }
    /* execition phase: Menjalankan console.log ('ini b') dan tampil ke layar 'ini b' lalu loncat ke function c dan membuat local Execution Context. */
    console.log("ini b")

    // menjalankan function c pada saat execution phase
    c()
    // function c selesai dijalankan
  }
  b() // menjalankan function b pada saat execution phase
  // function b selesai dijalankan
}

a() //menjalankan function a pada saat execution phase

//function a selesai dijalankan