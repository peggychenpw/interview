# Interview project for Tripresso

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<h2>入口頁</h2>
[http://localhost:3000/] <br/>
會進到 SearchPage，內有<Banner/>及<MainContent/>兩個組件分別放置首頁圖片及網頁文字<br/>
我在 <MainContent/>中的<SearchResult/>函式組件裡用串接Tripresso提供的 api <br/>
獲取到資料之後建立<TourList/>組件將資料傳入<TourItem/>組件render出來，作為放每筆行程資料的component。<br/>
<br/>

<h2>Filter</h2>
也在<SearchResult/>組件中建立 clickSortRateDesc / clickSortRateAsc /  clickSortPriceDesc / clickSortPriceAsc 四個function改變setSort這個hook的值，<br/>
作為評價高低和價格高低的filter，sort的值會傳入fetchList這個fetch api的function中對應的query

<h2>Pagination</h2>
<Pagination/>是作為換頁的組件，傳入setCurrentPage這個hook做換頁的功能
