import React from 'react';

import './index.css';

const Detail = () => {
  return (
    <div className="detail">
      <ul>
        <li>
          4月7日(月),13日(日)に行われるLT会では、参加サークルの部員がサークルの紹介をしたり、自分の興味のあることや発見、開発したことについて発表を行います。
        </li>
        <li>
          13日(日)のLT会では新入生枠がございますので、発表したい内容がある新入生は
          <a href="https://uec-tech.connpass.com/event/351044/">こちら</a>
          から参加申込みをお願いします。
        </li>
        <li>
          4月4日(金),13日(日)には、メインストリートで合同新歓のチラシ配布を行います。
        </li>
      </ul>
    </div>
  );
};

export default Detail;
