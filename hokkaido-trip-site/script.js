const tripDays = Object.freeze([
  {
    day: 0,
    date: "9/12（六）",
    fullDate: "2026 年 9 月 12 日・星期六",
    route: "台北 → 香港 → 札幌",
    note: "所有航班時間皆為當地時間。香港抵達第 1 航廈後，需前往第 2 航廈搭乘下一段航班。",
    stay: null,
    schedule: [
      {
        period: "航班 HB711",
        title: "台北桃園 → 香港",
        description: "起飛 02:55｜抵達 04:45（飛行 1 小時 50 分）\n出發：臺灣桃園國際機場 第 1 航廈（T1）\n抵達：香港國際機場 第 1 航廈（T1）",
        locations: [
          {
            name: "桃園機場 T1",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Taiwan+Taoyuan+International+Airport+Terminal+1",
          },
          {
            name: "香港機場 T1",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Hong+Kong+International+Airport+Terminal+1",
          },
        ],
      },
      {
        period: "轉機",
        title: "香港機場 T1 → T2",
        description: "轉機時間 4 小時 20 分\n04:45 抵達香港 T1，下一班 09:05 由香港 T2 起飛。請依機場指示預留航廈移動與登機時間。",
        locations: [
          {
            name: "香港機場 T2",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Hong+Kong+International+Airport+Terminal+2",
          },
        ],
      },
      {
        period: "航班 HB880",
        title: "香港 → 新千歲",
        description: "起飛 09:05｜抵達 15:05（飛行 5 小時）\n出發：香港國際機場 第 2 航廈（T2）\n抵達：新千歲機場 國際線航廈",
        locations: [
          {
            name: "香港機場 T2",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Hong+Kong+International+Airport+Terminal+2",
          },
          {
            name: "新千歲機場國際線航廈",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=New+Chitose+Airport+International+Terminal",
          },
        ],
      },
    ],
  },
  {
    day: 1,
    date: "9/12（六）",
    fullDate: "2026 年 9 月 12 日・星期六",
    route: "抵達札幌",
    note: "新千歲機場到札幌搭 JR 約 37～43 分鐘；請預留通關與領取行李時間。",
    stay: {
      name: "BROOKLYN HOTEL 札幌",
      mapUrl: "https://maps.app.goo.gl/Ns3EWJLf364k5dVR9",
    },
    schedule: [
      {
        period: "下午",
        title: "抵達北海道，前往札幌",
        description: "15:05 抵達新千歲機場國際線航廈，完成入境與領取行李後，搭 JR 前往札幌。",
        locations: [
          {
            name: "新千歲機場",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8D%83%E6%AD%B2%E6%A9%9F%E5%A0%B4%20%E5%8C%97%E6%B5%B7%E9%81%93",
          },
        ],
      },
      {
        period: "晚上",
        title: "飯店入住與薄野晚餐",
        description: "約 17:30～18:00 入住。視體力前往拉麵橫丁或狸小路散步。",
        locations: [
          {
            name: "薄野",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%96%84%E9%87%8E%20%E6%9C%AD%E5%B9%8C",
          },
          {
            name: "元祖札幌拉麵橫丁",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%A5%96%E6%9C%AD%E5%B9%8C%E6%8B%89%E9%BA%B5%E6%A9%AB%E4%B8%81",
          },
          {
            name: "狸小路商店街",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%8B%B8%E5%B0%8F%E8%B7%AF%E5%95%86%E5%BA%97%E8%A1%97%20%E6%9C%AD%E5%B9%8C",
          },
        ],
      },
    ],
  },
  {
    day: 2,
    date: "9/13（日）",
    fullDate: "2026 年 9 月 13 日・星期日",
    route: "札幌 → 旭川",
    note: "札幌到旭川車程約 2 小時。",
    stay: {
      name: "東橫INN 北海道旭川站前一條通",
      mapUrl: "https://maps.app.goo.gl/X6RvyiysbyT8tS1V9",
    },
    schedule: [
      {
        period: "上午",
        title: "札幌取車，開往旭川",
        description: "完成取車後開始自駕行程，前往旭川。",
        locations: [
          {
            name: "租車地點｜KITA 7 JO HIGASHI",
            mapUrl: "https://www.google.com/maps/place/KITA+7+JO+HIGASHI,+1-ch%C5%8Dme-1-1+Kita+7+J%C5%8Dhigashi,+Higashi+Ward,+Sapporo,+Hokkaido+060-0907%E6%97%A5%E6%9C%AC/@43.0699194,141.3540747,18z/data=!3m1!4b1!4m7!3m6!1s0x5f0b297337f3e071:0x4a8a2425232d3c67!8m2!3d43.0699194!4d141.3553622!15sCj0xLTEtMSBraXRhLTctasWNLWhpZ2FzaGksIEhpaGlnYXNoaS1rdSwgU2FwcG9yby1zaGksIEhva2thaWRvkgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11t2x8c47l?entry=tts&g_ep=EgoyMDI2MDcyMC4wIPu8ASoASAFQAw%3D%3D&skid=d1767814-ec32-4373-a984-feb230dfc547",
          },
        ],
      },
      {
        period: "下午",
        title: "旭山動物園",
        description: "安排下午遊園，留意當日閉園時間。",
        locations: [
          {
            name: "旭山動物園",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%97%AD%E5%B1%B1%E5%8B%95%E7%89%A9%E5%9C%92",
          },
        ],
      },
      {
        period: "晚上",
        title: "旭川美食之夜",
        description: "品嘗旭川醬油拉麵或大黑屋成吉思汗。",
        locations: [
          {
            name: "旭川拉麵村",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%97%AD%E5%B7%9D%E6%8B%89%E9%BA%B5%E6%9D%91",
          },
          {
            name: "大黑屋成吉思汗",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%88%90%E5%90%89%E6%80%9D%E6%B1%97%E5%A4%A7%E9%BB%91%E5%B1%8B%20%E6%97%AD%E5%B7%9D",
          },
        ],
      },
    ],
  },
  {
    day: 3,
    date: "9/14（一）",
    fullDate: "2026 年 9 月 14 日・星期一",
    route: "旭川 → 網走",
    note: "旭川到網走車程約 4 小時，途中安排層雲峽與石北峠休息。",
    stay: {
      name: "燈光民宿",
      mapUrl: "https://maps.app.goo.gl/E8TH1PUfXjbTF8hz8",
    },
    schedule: [
      {
        period: "上午",
        title: "穿越層雲峽與石北峠",
        description: "開車前往網走，沿途欣賞山谷與展望景色。",
        locations: [
          {
            name: "層雲峽",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%B1%A4%E9%9B%B2%E5%B3%BD%20%E5%8C%97%E6%B5%B7%E9%81%93",
          },
          {
            name: "石北峠",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%9F%B3%E5%8C%97%E5%B3%A0%20%E5%8C%97%E6%B5%B7%E9%81%93",
          },
        ],
      },
      {
        period: "下午",
        title: "抵達網走，眺望鄂霍次克海",
        description: "前往天都山展望台與鄂霍次克流冰館。流冰館參考票價 990 日圓／人。",
        locations: [
          {
            name: "天都山展望台",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E9%83%BD%E5%B1%B1%E5%B1%95%E6%9C%9B%E5%8F%B0%20%E7%B6%B2%E8%B5%B0",
          },
          {
            name: "鄂霍次克流冰館",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%84%82%E9%9C%8D%E6%AC%A1%E5%85%8B%E6%B5%81%E5%86%B0%E9%A4%A8%20%E7%B6%B2%E8%B5%B0",
          },
        ],
      },
      {
        period: "晚上",
        title: "網走自由活動",
        description: "入住後自由用餐、散步與休息。",
        locations: [],
      },
    ],
  },
  {
    day: 4,
    date: "9/15（二）",
    fullDate: "2026 年 9 月 15 日・星期二",
    route: "網走 → 知床",
    note: "網走到知床車程約 1.5 小時；網走監獄建議停留 3～4 小時。",
    stay: {
      name: "知床第一飯店",
      mapUrl: "https://maps.app.goo.gl/KhH8eRDNC2vQEfMH7",
    },
    schedule: [
      {
        period: "上午",
        title: "博物館網走監獄",
        description: "參觀北海道開拓史重要文化設施。參考票價 1,500 日圓／人。",
        locations: [
          {
            name: "博物館網走監獄",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8D%9A%E7%89%A9%E9%A4%A8%E7%B6%B2%E8%B5%B0%E7%9B%A3%E7%8D%84",
          },
        ],
      },
      {
        period: "下午",
        title: "能取湖珊瑚草，前往知床",
        description: "9 月正值珊瑚草觀賞期，參觀後繼續開往知床溫泉區。",
        locations: [
          {
            name: "能取湖",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%83%BD%E5%8F%96%E6%B9%96%20%E5%8C%97%E6%B5%B7%E9%81%93",
          },
          {
            name: "能取湖珊瑚草群落",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%83%BD%E5%8F%96%E6%B9%96%E5%8D%AF%E5%8E%9F%E5%86%85%E7%8F%8A%E7%91%9A%E8%8D%89%E7%BE%A4%E8%90%BD",
          },
          {
            name: "知床溫泉區",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%AE%87%E7%99%BB%E5%91%82%E6%BA%AB%E6%B3%89%20%E7%9F%A5%E5%BA%8A",
          },
        ],
      },
      {
        period: "晚上",
        title: "知床溫泉休息",
        description: "享受飯店溫泉，為隔日戶外行程補充體力。",
        locations: [],
      },
    ],
  },
  {
    day: 5,
    date: "9/16（三）",
    fullDate: "2026 年 9 月 16 日・星期三",
    route: "知床一日探索",
    note: "知床國立公園行程依天候、道路與野生動物狀況調整。遊覽船請提前確認航班。",
    stay: {
      name: "知床第一飯店",
      mapUrl: "https://maps.app.goo.gl/KhH8eRDNC2vQEfMH7",
    },
    schedule: [
      {
        period: "上午",
        title: "知床五湖健行",
        description: "沿步道探索原始森林與五座湖泊，依現場開放狀況選擇路線。",
        locations: [
          {
            name: "知床五湖",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%9F%A5%E5%BA%8A%E4%BA%94%E6%B9%96",
          },
          {
            name: "知床五湖健行步道",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%9F%A5%E5%BA%8A%E4%BA%94%E6%B9%96%20%E5%9C%B0%E4%B8%8A%E9%81%8A%E6%AD%A5%E9%81%93",
          },
        ],
      },
      {
        period: "下午",
        title: "知床峠、自然中心與遊覽船",
        description: "依天候彈性安排展望、自然解說與海上觀光。",
        locations: [
          {
            name: "知床峠",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%9F%A5%E5%BA%8A%E5%B3%A0",
          },
          {
            name: "知床自然中心",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%9F%A5%E5%BA%8A%E8%87%AA%E7%84%B6%E4%B8%AD%E5%BF%83",
          },
          {
            name: "知床遊覽船碼頭區",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%9F%A5%E5%BA%8A%E8%A7%80%E5%85%89%E8%88%B9%20%E5%AE%87%E7%99%BB%E5%91%82",
          },
        ],
      },
      {
        period: "晚上",
        title: "知床溫泉區自由活動",
        description: "回到飯店休息，享受第二晚知床溫泉。",
        locations: [],
      },
    ],
  },
  {
    day: 6,
    date: "9/17（四）",
    fullDate: "2026 年 9 月 17 日・星期四",
    route: "知床 → 阿寒湖",
    note: "知床到阿寒湖車程約 2.5 小時，途中請安排適當休息。",
    stay: {
      name: "帶廣站前裡滿士飯店",
      mapUrl: "https://maps.app.goo.gl/tMNeuerDRTW4CiVe6?g_st=ic",
    },
    schedule: [
      {
        period: "上午",
        title: "開車前往阿寒湖",
        description: "離開知床，沿途欣賞道東自然景觀。",
        locations: [],
      },
      {
        period: "下午",
        title: "阿寒湖與愛努文化",
        description: "湖畔散步，接著造訪阿寒湖愛努村落。",
        locations: [
          {
            name: "阿寒湖",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E5%AF%92%E6%B9%96%20%E5%8C%97%E6%B5%B7%E9%81%93",
          },
          {
            name: "阿寒湖愛努村落",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E5%AF%92%E6%B9%96%E6%84%9B%E5%8A%AA%E6%9D%91%E8%90%BD",
          },
          {
            name: "阿寒湖溫泉區",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E5%AF%92%E6%B9%96%E6%BA%AB%E6%B3%89",
          },
        ],
      },
      {
        period: "晚上",
        title: "溫泉與愛努文化體驗",
        description: "在溫泉區放鬆，依現場活動安排文化體驗。",
        locations: [],
      },
    ],
  },
  {
    day: 7,
    date: "9/18（五）",
    fullDate: "2026 年 9 月 18 日・星期五",
    route: "阿寒湖 → 札幌",
    note: "車程約 4.5～5 小時；含用餐與休息建議預留 5.5～6 小時。",
    stay: {
      name: "G508・札幌",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AD%E5%B9%8C",
    },
    schedule: [
      {
        period: "上午",
        title: "08:00 左右出發返回札幌",
        description: "長途駕駛日，建議每 1.5～2 小時停車休息。",
        locations: [],
      },
      {
        period: "下午",
        title: "抵達札幌與還車",
        description: "包含休息與午餐，預計約 15:00 抵達市區。",
        locations: [
          {
            name: "札幌車站／還車區域",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AD%E5%B9%8C%E8%BB%8A%E7%AB%99",
          },
        ],
      },
      {
        period: "晚上",
        title: "札幌市區晚餐",
        description: "正常用餐、早點休息，為隔日市區行程養足精神。",
        locations: [],
      },
    ],
  },
  {
    day: 8,
    date: "9/19（六）",
    fullDate: "2026 年 9 月 19 日・星期六",
    route: "札幌城市散策",
    note: "札幌市區一日，以大眾運輸和步行移動；藻岩山行程依天候調整。",
    stay: {
      name: "G508・札幌",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AD%E5%B9%8C",
    },
    schedule: [
      {
        period: "上午",
        title: "市場早餐與北海道神宮",
        description: "07:30 二條市場享用早餐，09:30 前往北海道神宮。",
        locations: [
          {
            name: "二條市場",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E4%BA%8C%E6%A2%9D%E5%B8%82%E5%A0%B4%20%E6%9C%AD%E5%B9%8C",
          },
          {
            name: "北海道神宮",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%8C%97%E6%B5%B7%E9%81%93%E7%A5%9E%E5%AE%AE%20%E6%9C%AD%E5%B9%8C",
          },
        ],
      },
      {
        period: "下午",
        title: "大通公園與狸小路購物",
        description: "依序安排大通公園、札幌電視塔與狸小路商圈。",
        locations: [
          {
            name: "大通公園",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%80%9A%E5%85%AC%E5%9C%92%20%E6%9C%AD%E5%B9%8C",
          },
          {
            name: "札幌電視塔",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AD%E5%B9%8C%E9%9B%BB%E8%A6%96%E5%A1%94",
          },
          {
            name: "狸小路商店街",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%8B%B8%E5%B0%8F%E8%B7%AF%E5%95%86%E5%BA%97%E8%A1%97%20%E6%9C%AD%E5%B9%8C",
          },
          {
            name: "札幌藥妝店",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%9C%AD%E5%B9%8C%E8%97%A5%E5%A6%9D%20%E6%9C%AD%E5%B9%8C",
          },
          {
            name: "Don Quijote",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%94%90%E5%90%89%E8%A8%B6%E5%BE%B7%20%E7%8B%B8%E5%B0%8F%E8%B7%AF%E5%BA%97",
          },
        ],
      },
      {
        period: "晚上",
        title: "藻岩山夕陽與夜景",
        description: "傍晚前往山頂，欣賞札幌市區夕陽及百萬夜景。",
        locations: [
          {
            name: "藻岩山",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%97%BB%E5%B2%A9%E5%B1%B1%20%E6%9C%AD%E5%B9%8C",
          },
        ],
      },
    ],
  },
  {
    day: 9,
    date: "9/20（日）",
    fullDate: "2026 年 9 月 20 日・星期日",
    route: "札幌 → 台北桃園",
    note: "VZ571 於 09:00 起飛，建議 05:30～06:00 離開飯店，前往新千歲機場國際線航廈辦理報到與安檢。航班時間皆為當地時間。",
    stay: null,
    schedule: [
      {
        period: "清晨",
        title: "前往新千歲機場",
        description: "05:30～06:00 退房並搭乘 JR，前往新千歲機場國際線航廈。",
        locations: [
          {
            name: "新千歲機場國際線航廈",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=New+Chitose+Airport+International+Terminal",
          },
        ],
      },
      {
        period: "機場",
        title: "報到與最後採購",
        description: "完成報到與安檢後，視候機時間採購 Royce、白色戀人與北海道限定伴手禮。",
        locations: [
          {
            name: "Royce' Chocolate World",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Royce%20Chocolate%20World%20%E6%96%B0%E5%8D%83%E6%AD%B2%E6%A9%9F%E5%A0%B4",
          },
        ],
      },
      {
        period: "航班 VZ571",
        title: "新千歲 → 台北桃園",
        description: "起飛 09:00｜抵達 12:25（飛行 4 小時 25 分）\n出發：新千歲機場 國際線航廈\n抵達：臺灣桃園國際機場 第 1 航廈（T1）",
        locations: [
          {
            name: "新千歲機場國際線航廈",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=New+Chitose+Airport+International+Terminal",
          },
          {
            name: "桃園機場 T1",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Taiwan+Taoyuan+International+Airport+Terminal+1",
          },
        ],
      },
    ],
  },
]);

const dayTabs = document.querySelector("#day-tabs");
const currentDayNumber = document.querySelector("#current-day-number");
const currentRoute = document.querySelector("#current-route");
const currentDate = document.querySelector("#current-date");
const currentNote = document.querySelector("#current-note");
const scheduleList = document.querySelector("#schedule-list");
const stayCard = document.querySelector("#stay-card");
const stayName = document.querySelector("#stay-name");
const stayLink = document.querySelector("#stay-link");
const dayContent = document.querySelector("#day-content");
const previousDayTop = document.querySelector("#previous-day-top");
const nextDayTop = document.querySelector("#next-day-top");
let activeDayNumber = 0;

function createMapLink(location) {
  const link = document.createElement("a");
  const icon = document.createElement("span");

  link.className = "map-link";
  link.href = location.mapUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${location.name}－開啟 Google Maps 導航`);

  icon.textContent = "↗";
  icon.setAttribute("aria-hidden", "true");
  link.append(icon, document.createTextNode(location.name));

  return link;
}

function createScheduleCard(item) {
  const article = document.createElement("article");
  const period = document.createElement("p");
  const content = document.createElement("div");
  const title = document.createElement("h3");
  const description = document.createElement("p");

  article.className = "schedule-card";
  period.className = "schedule-card__period";
  period.textContent = item.period;
  title.textContent = item.title;
  description.className = "schedule-card__description";
  description.textContent = item.description;
  content.append(title, description);

  if (item.locations.length > 0) {
    const links = document.createElement("div");
    links.className = "location-links";
    item.locations.forEach(function appendLocation(location) {
      links.append(createMapLink(location));
    });
    content.append(links);
  }

  article.append(period, content);
  return article;
}

function updateSelectedTab(selectedDay) {
  const buttons = dayTabs.querySelectorAll(".day-tab");
  buttons.forEach(function updateButton(button) {
    const isSelected = Number(button.dataset.day) === selectedDay;
    button.setAttribute("aria-selected", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });
}

function updateNavigationButtons(day) {
  const currentIndex = tripDays.findIndex(function findCurrentDay(item) {
    return item.day === day.day;
  });
  const previousDay = tripDays[currentIndex - 1];
  const nextDay = tripDays[currentIndex + 1];

  previousDayTop.disabled = !previousDay;
  nextDayTop.disabled = !nextDay;

  previousDayTop.setAttribute("aria-label", previousDay ? `上一天：第 ${previousDay.day} 天` : "已是第一天");
  nextDayTop.setAttribute("aria-label", nextDay ? `下一天：第 ${nextDay.day} 天` : "已是最後一天");
}

function scrollSelectedTabIntoView(dayNumber) {
  const selectedTab = dayTabs.querySelector(`[data-day="${dayNumber}"]`);
  selectedTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}

function renderDay(dayNumber, scrollTarget) {
  const day = tripDays.find(function findDay(item) {
    return item.day === dayNumber;
  });

  if (!day) {
    return;
  }

  currentDayNumber.textContent = `DAY ${day.day}`;
  currentRoute.textContent = day.route;
  currentDate.textContent = day.fullDate;
  currentNote.textContent = day.note;
  scheduleList.replaceChildren(...day.schedule.map(createScheduleCard));

  if (day.stay) {
    stayCard.hidden = false;
    stayName.textContent = day.stay.name;
    stayLink.href = day.stay.mapUrl;
    stayLink.setAttribute("aria-label", `${day.stay.name}－開啟 Google Maps`);
  } else {
    stayCard.hidden = true;
  }

  activeDayNumber = day.day;
  updateSelectedTab(day.day);
  updateNavigationButtons(day);
  scrollSelectedTabIntoView(day.day);
  window.history.replaceState(null, "", `#day-${day.day}`);

  if (scrollTarget === "content") {
    dayContent.focus({ preventScroll: true });
    dayContent.scrollIntoView({ behavior: "smooth", block: "start" });
  }

}

function getAdjacentDay(offset) {
  const activeDayIndex = tripDays.findIndex(function findActiveDay(item) {
    return item.day === activeDayNumber;
  });
  return tripDays[activeDayIndex + offset];
}

function changeDay(offset, scrollTarget) {
  const nextDay = getAdjacentDay(offset);
  if (!nextDay) {
    return;
  }

  renderDay(nextDay.day, scrollTarget);
}

function handlePreviousTopClick() {
  changeDay(-1, null);
}

function handleNextTopClick() {
  changeDay(1, null);
}

function createDayTab(day) {
  const button = document.createElement("button");
  const dayLabel = document.createElement("span");
  const dateLabel = document.createElement("span");

  button.className = "day-tab";
  button.type = "button";
  button.role = "tab";
  button.dataset.day = String(day.day);
  button.setAttribute("aria-controls", "day-content");
  button.setAttribute("aria-label", `第 ${day.day} 天，${day.date}`);

  dayLabel.className = "day-tab__day";
  dayLabel.textContent = `DAY ${day.day}`;
  dateLabel.className = "day-tab__date";
  dateLabel.textContent = day.date.replace(/（.+）/, "");
  button.append(dayLabel, dateLabel);

  button.addEventListener("click", function handleClick() {
    renderDay(day.day, "content");
  });

  button.addEventListener("keydown", function handleArrowKey(event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const currentIndex = tripDays.findIndex(function findCurrentDay(item) {
      return item.day === day.day;
    });
    const nextIndex = (currentIndex + offset + tripDays.length) % tripDays.length;
    const nextDay = tripDays[nextIndex];
    renderDay(nextDay.day, null);
    dayTabs.querySelector(`[data-day="${nextDay.day}"]`).focus();
  });

  return button;
}

function getInitialDay() {
  const match = window.location.hash.match(/^#day-(\d)$/);
  const dayNumber = match ? Number(match[1]) : 0;
  return tripDays.some(function hasDay(item) {
    return item.day === dayNumber;
  })
    ? dayNumber
    : 0;
}

function initialize() {
  dayTabs.replaceChildren(...tripDays.map(createDayTab));
  previousDayTop.addEventListener("click", handlePreviousTopClick);
  nextDayTop.addEventListener("click", handleNextTopClick);
  renderDay(getInitialDay(), null);
}

initialize();
