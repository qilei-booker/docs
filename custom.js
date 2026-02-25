const downloadUrl = {
  download_ioc: 'https://img.threatbook.io/Threatbook_IOC_Sample.json',
  download_ip: 'https://img.threatbook.io/Threatbook_IP_Reputation_Sample.json',
  download_hash: 'https://img.threatbook.io/ThreatBook_Hash_Sample.json',
  download_url: 'https://img.threatbook.io/ThreatBook_URL_Sample.json',
  download_reports: 'https://img.threatbook.io/ThreatBook_Reports_Sample.zip',
  download_actors: 'https://img.threatbook.io/ThreatBook_Actors_Sample.json'
}

async function downloadFile(id) {
  const url = downloadUrl[id];
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  } catch (error) {
    console.error('download file error', error);
  }
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
