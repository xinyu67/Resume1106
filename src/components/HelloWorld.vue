<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="job-title">
      <p>
        創科實習生
      </p>
    </div>
    <p>🎂2002.06.07</p>
    <p>
      📬silvia50727@gmail.com
    </p>
    <p>🏫國立臺中科技大學 | 資訊管理系</p>
    
  </div>
  <div class="frontend">
    <h2 style="color: #5A5AAD;">簡歷</h2>
    <hr>
    <p>
      我的名字是陳欣妤，目前就讀台中科技大學資訊管理系，有不畏苦不怕難的性格，且配合度高，我希望透過這次的訓機會，將資訊領域的知識學習的更透徹，對於企業開發流程更加熟悉，未來工作能更快上手。
      平時休閒活動是到美術館觀展、看電影和唱歌，讓自己放鬆心情並吸取藝術知識。
      主要擅長後端的技能，熟悉C#及PHP，版本控制的部分則使用過Git，使用Windows系統。
      曾經有開發過兩個大專案，第一個是康寧大學宿舍管理系統，在這個專案中我負責舍監權限前後端頁面及功能開發，過程中運用了PHP、JavaScript、CSS及HTML。
      第二個專案是啤酒商行企業形象網站，這個專案我主要負責後端功能開發、資料庫規劃與設計，使用了c#及.NET MVC架構及SQL Server。
      在這兩個專案中，差異最大的是系統有沒有做前後分離，那從中我也學習到前後分離的重要性，以及不同語言的語法。
      過去實習過兩間公司，工作內容分別是電腦軟硬體維護及盤點器材、前端頁面需求修改，這些實習經驗讓我學習到許多技術與知識，對於業界的流程與技術有初步的了解。
    </p>
  </div>

  <div class="WS">
    <div class="work">
      <h2 style="color: #5A5AAD;">工作經驗</h2>
      <hr>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-left">
            <div class="dot"></div>
            <div class="line"></div>
          </div>
          <div class="timeline-right">
            <h3 class="work-title">創科資訊公司 / 2023/07-至今 </h3>
            <p>系統前後端維護及更新</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-left">
            <div class="dot"></div>
            <div class="line"></div>
          </div>
          <div class="timeline-right">
            <h3 class="work-title">希文資訊有限公司 / 2022/01-2022/04 </h3>
            <p>系統前後端維護及更新</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-left">
            <div class="dot"></div>
            <div class="line"></div>
          </div>
          <div class="timeline-right">
            <h3 class="work-title">威策電腦股份有限公司 / 2021/02-2021/05 </h3>
            <p>普查維護工程師 (電腦軟硬體維護及盤點器材)</p>
          </div>
        </div>
      </div>
    </div>

    <div class="work">
      <h2 style="color: #5A5AAD;">學歷</h2>
      <hr>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-left">
            <div class="dot"></div>
            <div class="line"></div>
          </div>
          <div class="timeline-right">
            <h3 class="work-title"> 國立臺中科技大學 / 2022/09-現今 </h3>
            <p>資訊管理系－二技部</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-left">
            <div class="dot"></div>
            <div class="line"></div>
          </div>
          <div class="timeline-right">
            <h3 class="work-title">康寧學校財團法人康寧大學 / 2017/09-2022/06 </h3>
            <p>資訊管理科－五專部</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="project">
    <h2 style="color: #5A5AAD;">專案與作品集</h2>
    <hr>
    <div class="project_content">
      <img alt="My Image" :src="require('@/assets/aa1.png')" :style="{ width: '300px', height: 'auto' }"/>
      <div class="project-right">
        <h3 class="project-title">康寧大學宿舍管理系統</h3>
        <p>過去宿舍管理採用紙本，流程相當耗時，藉由此系統學生可線上申請住宿、請假及愛宿；老師、舍監和教官能即時查看及審核、安排住宿生寢室，解決了許多跑流程的時間。</p>
      </div>
    </div>
    <br>
    <div class="project_content">
      <img alt="My Image" :src="require('@/assets/bb1.png')" :style="{ width: '300px', height: 'auto' }"/>
      <div class="project-right">
        <h3 class="project-title">啤酒商行企業形象網站</h3>
        <p>啤酒商行產品眾多，管理較不方便，開發此系統可提供啤酒商快速瀏覽產品，也能提供買家在線上下單產品，再由啤酒商確認後出貨，使啤酒商行的日常工作變成線上化，工作更有效率。</p>
      </div>
    </div>
  </div>

  <div class="WS">
    <div class="work">
      <h2 style="color: #5A5AAD;">專業技能</h2>
      <hr>
      <div class="skill-list">
        <h3>程式語言</h3>
        <ul>
          <li>C#</li>
          <li>PHP</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <h3>框架</h3>
        <ul>
          <li>.NET MVC</li>
          <li>Vue3</li>
          <li>Laravel </li>
        </ul>
        <h3>資料庫</h3>
        <ul>
          <li>SQL Server</li>
          <li>MySQL</li>
        </ul>
        <h3>版本控制</h3>
        <ul>
          <li>Git</li>
        </ul>
      </div>
    </div>

    <div class="work">
      <h2 style="color: #5A5AAD;">語言能力</h2>
      <hr>
      <div class="skill-list">
        <ul>
          <li>中文</li>
          <li>英文</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.frontend {
  text-align: start;
  margin: 0px 100px 0px 100px;
}
.work {
  text-align: start;
  margin: 0px 100px 0px 100px;
}
.project {
  text-align: start;
  margin: 0px 100px 0px 100px;
}
.job-title {
  width: auto;
  display: inline-block;
  border: 1px solid #5A5AAD; /* 加框 */
  padding: 0px 20px 0px 20px; /* 調整內邊距以達到所需效果 */
  background-color: #5A5AAD; 
  color: #ffffff;
  border-radius: 10px;
}
.work-title {
  width: 500px;
  display: inline-block;
  border: 1px solid #5A5AAD; /* 加框 */
  padding: 0px 20px 0px 20px; /* 調整內邊距以達到所需效果 */
  background-color: #5A5AAD; 
  color: #ffffff;
  border-radius: 10px;
}
.project-title {
  width: 96%;
  display: inline-block;
  border: 1px solid #5A5AAD; /* 加框 */
  padding: 0px 20px 0px 20px; /* 調整內邊距以達到所需效果 */
  background-color: #5A5AAD; 
  color: #ffffff;
  border-radius: 10px;
}
h3 {
  margin: 10px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 5px;
}
a {
  color: #42b983;
}

.WS {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 左右對齊 */
}
.project_content {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 左右對齊 */
}
.project-right{
  margin-left: 50px; /* 在项目之间创建20像素的右边距 */
  flex: 1;
}
.work {
  width: 50%; /* 控制兩列的寬度 */
}
.timeline {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px; /* 項目之間的距離 */
}

.timeline-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 靠左對其 */
  margin-right: 20px; /* 線與右邊的距離 */
}

.line {
  width: 2px; /* 線的寬度 */
  background-color: 	#A6A6D2; /* 線的顏色 */
  height: 70px; /* 線的長度 */
  margin: 4px;
}

.dot {
  width: 10px; /* 點的寬度 */
  height: 10px; /* 點的高度 */
  background-color: #5A5AAD; /* 點的顏色 */
  border-radius: 50%; /* 點為圓形 */
}

.timeline-right {
  flex: 1;
}

.skill-list {
  background-color: #f5f5f5;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.skill-list h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.skill-list ul {
  list-style-type: disc;
  padding-left: 20px;
}

.skill-list li {
  font-size: 16px;
  margin: 5px 15px;
}
</style>
