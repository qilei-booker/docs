const downloadUrl = {
  download_ioc: 'https://img.threatbook.io/Threatbook_IOC_Sample.json',
  download_ip: 'https://img.threatbook.io/Threatbook_IP_Reputation_Sample.json'
}

function downloadFile(id) {
  const url = downloadUrl[id];
  const a = document.createElement('a');
  a.href = url;
  a.download = url.split('/').pop();
  a.click();
}

window.addEventListener('load', () => {
  document.addEventListener('click', e => {
    let div = e.target.closest('div');
    if (e.target.id === 'download_ioc' || e.target.id === 'download_ip' || div.id === 'download_ioc' || div.id === 'download_ip') {
      const id = e.target.id || div.id;
      downloadFile(id);
    }
  })
})
