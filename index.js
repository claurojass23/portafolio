document.getElementById('descargarBtn').addEventListener('click', function() {
    descargarPDF();
  });
  
  function descargarPDF() {
    
    let pdfURL = '';
    let a = document.createElement('a');
    a.href = pdfURL;
    a.download = 'claudia_rojas.pdf'; 
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  