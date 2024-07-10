
function share() {
    const url = window.location.href;
  
    // 复制链接到剪贴板
    navigator.clipboard.writeText(url).then(() => {
      // 显示提示框
      showToast();
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
  
  function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000); // 提示框显示3秒后消失
  }
  