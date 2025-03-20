import React from "react";

import "./index.css";

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
						<td>4/7(月)</td>
						<td>未定</td>
						<td>LT会(10:00 ~ 17:00)</td>
					</tr>
					<tr>
						<td rowSpan={2}>4/4(金) ~ 4/13(日)</td>
						<td>未定</td>
						<td>ポスター展示(10:00 ~ 17:00)</td>
					</tr>
					<tr>
						<td>メインストリート</td>
						<td>チラシ配布(10:00 ~ 17:00)</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Place;
