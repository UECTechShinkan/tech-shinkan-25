import React from 'react';

import './index.css';

const Place = () => {
  return (
    <div className="table-div">
      <table>
        <thead>
          <tr>
            <th>日時</th>
            <th>場所</th>
            <th>イベント</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              4/7(月)
              <br />
              4/13日(日)
              <br />
              (14:00 ~ 17:00)
            </td>
            <td>
              7日&nbsp;B102
              <br />
              13日&nbsp;B202
            </td>
            <td>LT会</td>
          </tr>
          <tr>
            <td>
              4/4(金)
              <br />
              4/7(月)
              <br />
              4/13(日)
            </td>
            <td>メインストリート</td>
            <td>チラシ配布</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Place;
