// 在页面底部添加一个用于显示IP和位置的元素
const ipLocationDisplay = document.createElement('div');
ipLocationDisplay.id = 'user-ip-location';
ipLocationDisplay.innerHTML = '您的IP地址是: <span id="ip" class="gradient-text"></span><br>您的位置是: <span id="location" class="gradient-text"></span>';
document.body.appendChild(ipLocationDisplay);

// 创建切换显示IP和位置的按钮
const toggleIpBtn = document.createElement('button');
toggleIpBtn.id = 'toggle-ip-btn';
toggleIpBtn.textContent = 'IP';
document.body.appendChild(toggleIpBtn);

// 按钮点击事件
toggleIpBtn.addEventListener('click', () => {
  const ipLocation = document.getElementById('user-ip-location');
  if (ipLocation.style.display === 'none') {
    ipLocation.style.display = 'block';
  } else {
    ipLocation.style.display = 'none';
  }
});

// 使用fetch API获取用户的IP地址
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    // 将获取到的IP地址显示在页面上
    document.getElementById('ip').textContent = data.ip;
    // 调用IP地址定位服务API获取位置信息
    return fetch(`https://ipapi.co/${data.ip}/json/`);
  })
  .then(response => response.json())
  .then(locationData => {
    // 将获取到的位置信息显示在页面上
    document.getElementById('location').textContent = `${locationData.city}, ${locationData.region}, ${locationData.country_name}`;
  })
  .catch(error => {
    console.error('无法获取IP地址或位置', error);
    document.getElementById('ip').textContent = '无法获取';
    document.getElementById('location').textContent = '无法获取';
  });
