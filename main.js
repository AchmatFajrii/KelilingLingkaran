const btnHitung = document.querySelector('.btnHitung');
      const inputJariJari = document.querySelector('input');
      const hasil = document.querySelector('.hasil');

      function validasi() {
        if (isNaN(inputJariJari.value)) {
          alert('harus angka woy');
          inputJariJari.value = '';
        }
      }

      function klik() {
        if (isNaN(inputJariJari.value)) {
          hasil.innerText = 'harus masukin angka woi';
        } else {
          const jariJari = inputJariJari.value;
          const keliling = 2 * Math.PI * jariJari;
          hasil.innerText = Math.round(keliling);
        }
      }