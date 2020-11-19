# Interview project for Tripresso

### Preview

https://tripresso.vercel.app/search?currentPage=9&rowPerPage=10&sortBy=rating_desc

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<h2>入口頁</h2>
[http://localhost:3000/] <br/>
會進到 SearchPage，內有Banner及MainContent兩個組件分別放置首頁圖片及網頁文字<br/>
我在MainContent中的SearchResult函式組件裡用串接Tripresso提供的 api <br/>
獲取到資料之後建立TourList組件將資料傳入TourItem組件render出來，作為放每筆行程資料的component。<br/>
<br/>

<h2>Pagination</h2>
Pagination是換頁的組件，從父層傳入setCurrentPage這個hook做換頁的功能。也傳入currentPage代表當前頁碼，對應到在Pagination組件中map出來代表頁數的number進行比對，當currentPage等於number的時候，在包著當前頁數的number的div加上一個客製化的className更改樣式，顯示當前頁與其他頁數的不同，並且用cursor: default取消點選。

<h2>Filter</h2>
在SearchResult組件中建立 clickSortRateDesc / clickSortRateAsc /  clickSortPriceDesc / clickSortPriceAsc 四個function，用來改變setSort這個hook的值，作為評價高低和價格高低的filter，<br/>
，sort的值會傳入fetchList這個fetch api的function中對應的query，預設是currentPage=1&rowPerPage=10&sortBy=rating_desc<br/>
為了在不同頁數中，都能在改變filter之後回到第一頁，在四個funtion中加入setCurrentPage(1)這個hook去讓畫面重新回到第一頁。

<h2>切換分頁時滑回最上方</h2>
在useEffect中加入一個叫rollBack的函式，讓畫面重新渲染後回到回到上方，能夠從頭看到最新更新的旅遊資料。<br/>
 const rollBack = () => {<br/>
        setTimeout(() => window.scrollTo(0, 270), 100)<br/>
    }<br/>
