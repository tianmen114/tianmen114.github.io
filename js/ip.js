// 在页面底部添加一个用于显示IP和位置的元素
const ipLocationDisplay = document.createElement('div');
ipLocationDisplay.id = 'user-ip-location';
ipLocationDisplay.innerHTML = '您的IP地址是: <span id="ip" class="gradient-text"></span><br>您的位置是: <span id="location" class="gradient-text"></span>';
document.body.appendChild(ipLocationDisplay);

// 设置显示IP和位置元素的样式
ipLocationDisplay.style.position = 'fixed';
ipLocationDisplay.style.bottom = '10px';
ipLocationDisplay.style.right = '10px';
ipLocationDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
ipLocationDisplay.style.color = 'white';
ipLocationDisplay.style.padding = '10px';
ipLocationDisplay.style.borderRadius = '5px';
ipLocationDisplay.style.display = 'none';  // 初始状态为隐藏

// 创建切换显示IP和位置的按钮
const toggleIpBtn = document.createElement('button');
toggleIpBtn.id = 'toggle-ip-btn';
toggleIpBtn.textContent = 'IP';
document.body.appendChild(toggleIpBtn);

// 设置按钮的样式
toggleIpBtn.style.position = 'fixed';
toggleIpBtn.style.bottom = '2px';
toggleIpBtn.style.right = '3px';
toggleIpBtn.style.marginRight = '0px';
toggleIpBtn.style.padding = '10px';
toggleIpBtn.style.backgroundColor = '#49b1f5';
toggleIpBtn.style.color = 'white';
toggleIpBtn.style.border = 'none';
toggleIpBtn.style.borderRadius = '5px';
toggleIpBtn.style.cursor = 'pointer';

// 按钮点击事件
toggleIpBtn.addEventListener('click', () => {
  const ipLocation = document.getElementById('user-ip-location');
  if (ipLocation.style.display === 'none') {
    ipLocation.style.display = 'block';
  } else {
    ipLocation.style.display = 'none';
  }
});

// 使用fetch API获取用户的IP地址和位置信息
fetch('https://ipinfo.io/json?token=9e39c989d6f1f5')
  .then(response => response.json())
  .then(data => {
    // 将获取到的IP地址和位置信息显示在页面上
    document.getElementById('ip').textContent = data.ip;
    document.getElementById('location').textContent = `${data.region}, ${data.city}`;
  })
  .catch(error => {
    console.error('无法获取IP地址或位置', error);
    document.getElementById('ip').textContent = '无法获取';
    document.getElementById('location').textContent = '无法获取';
  });
