import {useState} from 'react';
import AppBar from '@/components/AppBar';
import InfiniteScroll from "react-infinite-scroller";

// import Image from 'next/image'

export default function Home() {

  //表示するデータ
  const [list, setList] = useState([0]);
  
  //項目を読み込むときのコールバック
  const loadMore = (page: any) => {
    setList([...list, page]);
  };

  //各スクロール要素
  const items = (
    <ul>
      {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
  
  //全体のスタイル
  const root_style = {
    marginLeft : "50px",
    marginTop : "50px",
  }

  //ロード中に表示する項目
  const loader =<div className="loader" key={0}>Loading ...</div>;
  return (
    <main>
      <AppBar />
      <div style={root_style}>
        <InfiniteScroll
          loadMore={loadMore}    //項目を読み込む際に処理するコールバック関数
          hasMore={true}         //読み込みを行うかどうかの判定
          loader={loader}>      {/* 読み込み最中に表示する項目 */}

            {items}             {/* 無限スクロールで表示する項目 */}
        </InfiniteScroll>
      </div>
    </main>
  )
}
