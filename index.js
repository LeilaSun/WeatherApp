const startFetch = () => {
  const inputValue = document.querySelector("input").value;
  if (inputValue == "") {
    alert("输入框不能为空！");
  } else {
    // 输入框不为空，提交表单或者其他操作
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=bac56e07d03dbc48060bdd2e03428a33`
  )
    .then(function (response) {
      if (response.status === 200) {
        return response.json(); // 将返回数据解析为 JSON 对象
      } else {
        throw new Error("请求失败");
      }
    })
    .then(function (data) {
      console.log(data); // 打印返回的数据

      const currentDate = new Date();
      const year = currentDate.getFullYear(); // 获取当前年份
      const month = currentDate.getMonth() + 1; // 获取当前月份，注意月份要加1
      const day = currentDate.getDate();

      document.getElementById("city").textContent = data.name;
      document.getElementById("deta").textContent = `${year}-${month}-${day}`;
      document.getElementById("temp").textContent =
        Math.round(parseInt(data.main.temp)) + "°C";
      document.getElementById("weather").textContent = data.weather[0].main;
      document.getElementById("humidity").textContent =
        data.main.humidity + "%";
    })
    .catch(function (error) {
      console.log(error);
    });
};
