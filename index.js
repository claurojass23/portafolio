document.getElementById('descargarBtn').addEventListener('click', function() {
    descargarPDF();
  });
  
  function descargarPDF() {
    // Puedes usar una URL válida de un archivo PDF en lugar de 'url_del_pdf.pdf'
    let pdfURL = '';
    let a = document.createElement('a');
    a.href = pdfURL;
    a.download = 'claudia_rojas.pdf'; 
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  