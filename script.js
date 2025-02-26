function copyAddress(address, notificationId) {
  navigator.clipboard.writeText(address).then(() => {
    const notification = document.getElementById(notificationId);
    notification.style.display = 'block';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 2500);
  }).catch(() => {
    alert('Failed to copy address. Please manually select and copy.');
  });
}