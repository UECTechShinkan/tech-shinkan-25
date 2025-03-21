import React from "react";

import "./index.css";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";

const Circle = (props) => {
	const handleButtonClick = (url) => {
		if (url) {
			window.open(url, "_blank");
		}
	};
	return (
		<div className="card-container">
			<img className="img" src={props.image} alt={props.name} />
			<h4>{props.name}</h4>
			<p>{props.description}</p>
			<div className="button">
				{props.homeUrl && (
					<Button
						variant="contained"
						onClick={() => handleButtonClick(props.homeUrl)}
						sx={{ textTransform: "none" }}
					>
						ホームページ
					</Button>
				)}
				{props.XUrl && (
					<Button
						variant="outlined"
						onClick={() => handleButtonClick(props.XUrl)}
						sx={{ textTransform: "none" }}
					>
						𝕏(Twitter)
					</Button>
				)}
			</div>
		</div>
	);
};

class circleData {
	constructor(name, image, description, homeUrl, XUrl) {
		this.name = name;
		this.image = image;
		this.description = description;
		this.homeUrl = homeUrl;
		this.XUrl = XUrl;
	}
}

const koken = new circleData(
	"工学研究部",
	"images/koken.png",
	"工学研究部は大学公認の、部員が一人ひとり作りたいものを作る技術系サークルです。 ハードウェアからソフトウェアまで工学分野において幅広く活動しており、Maker Faire Tokyoや技術書典に参加しています。  活動日：いつでも 部会：毎週金曜日18:00",
	"https://www.koken.club.uec.ac.jp/",
	"",
);
const team411 = new circleData(
	"team411",
	"images/team411.png",
	"team411は大学生が「自分たちの身の回りの課題」を解決するために、 IT技術を用いてプロダクトを開発する電気通信大学のチームです。具体的には学生が自主的に学んだ技術力を用いて、課題解決のためのプロダクトを開発します。",
	"https://team411.net/",
	"https://x.com/team411_uec",
);
const mma = new circleData(
	"MMA",
	"images/MMA.png",
	"こんにちは! 電気通信大学 MMA です! 1975年から続くサークルで、ソフトウェアやネットワークまわりの研究・開発などを主に、計算機に関わることだったらなんでも活動しています! また、毎年の合宿では本格的な花火の打ち上げなども行っています! お気軽にお越しください!",
	"https://wiki.mma.club.uec.ac.jp/",
	"https://twitter.com/uecmma",
);
const vll = new circleData(
	"バーチャルライブ研究会",
	"images/VLL.png",
	"バーチャルライブ研究会（VLL）では、様々なバーチャルシンガーたちが登場するファンメイドの3DCGライブ「MIKUEC」や、バーチャルアイドル「歌奏絆」の制作運営などに関わる幅広い活動を行っています。新歓ライブなどの企画も開催するので、まずは一度遊びに来てみませんか？",
	"https://mikuec.com/",
	"",
);

const x68x0 = new circleData(
	"X680x0同好会",
	"images/X68.png",
	"X680x0同好会はプログラミングや楽曲、イラスト、3Dモデルの作成を行うゲーム制作サークルです。初心者向けの各種講座を用意していて、先輩方から制作の基礎を学ぶことができます。未経験の方でも大歓迎です！！興味のある方はぜひX680x0同好会へお越し下さい！！",
	"https://www.x68uec.org/",
	"https://twitter.com/x68uec",
);

const ds = new circleData(
	"データサイエンス研究会",
	"images/DS.png",
	"データサイエンス研究会では勉強会や Kaggle 等のコンペへの参加、競馬や仮想通貨等の予測や外部企業様との連携プロジェクトに取り組んでいます✨  普段は大学内の教室を借りて活動を行っています！ 初心者でも大丈夫、新歓ではプログラミング講座を予定しています！是非ご参加ください！",
	"",
	"https://x.com/uec_dsclub",
);

const iml = new circleData(
	"インタラクティブメディアラボ",
	"images/IML.png",
	"IMLは、ただ楽しいものづくりをするだけでなく、学問・研究的に新しくておもしろいものを作る技術系サークルです！1年生の前半は講習会を行うので誰でも技術をつけ、ものづくりをできます。ぜひ見に来てみてください！",
	"https://imedia-lab.net/",
	"",
);

const wings = new circleData(
	"U.E.C.wings",
	"images/wings.png",
	"U.C.E.wingsは「飛ぶもの」に関する技術系サークルであり、人力飛行機の作成を主な活動としています。複数回の鳥人間コンテストへの出場の実績がある歴史と人力飛行機を擬人化したオリジナルキャラクターのらごぱすたん姉妹が魅力のチームです。興味のある方をお待ちしております。",
	"http://www.uecwings.club.uec.ac.jp/blog/ ",
	"https://twitter.com/bird_uecwings",
);

const musen = new circleData(
	"無線部",
	"images/musen.png",
	"無線部は主にアマチュア無線のコンテストに参加し、全国規模で実績を残しています。アマチュア無線は個人の趣味で行われる無線通信であり、自らの設備を用いて世界中の相手と交信できることが魅力です。コンテストでの勝利を目指すために、高性能なアンテナの製作やソフトウェアの開発なども行います。",
	"https://www.ja1zgp.com/clubguide/",
	"https://x.com/ja1zgp",
);

const robo = new circleData(
	"ロボメカ工房",
	"images/robo.png",
	"ロボメカ工房は7部隊に分かれた技術系サークルで、さまざまなものづくりが楽しめます。初心者向け講習も充実し、先輩が優しくサポートするので安心！経験がなくても大丈夫。あなたのアイデアや夢を形にし、一緒にものづくりを楽しみましょう！",
	"https://sites.google.com/view/uec-rmf",
	"",
);

const circleList = [
	koken,
	team411,
	mma,
	vll,
	x68x0,
	ds,
	iml,
	wings,
	musen,
	robo,
];

const Group = () => {
	return (
		<div className="group-container">
			<div className="group">
				{circleList.map((circleData) => (
					<Circle
						key={uuidv4()}
						name={circleData.name}
						image={circleData.image}
						description={circleData.description}
						homeUrl={circleData.homeUrl}
						XUrl={circleData.XUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default Group;
