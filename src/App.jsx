import * as React from "react";
import Container from "@mui/material/Container";

import { Footer } from "../src/components/footer";
import { Header } from "../src/components/header";

import Place from "../src/contents/date";
import Detail from "../src/contents/detail";
import Group from "../src/contents/group";
import Past from "../src/contents/past";
import { Heading } from "../src/components/heading";
import './App.css'

function App() {

  return (
    <main>
      <Header />
            <Container maxWidth="lg">
                <div className="about">
                    <Heading name={"概要"} id={"about"}/>
                    <p>
                        新入生の皆さん、ご入学おめでとうございます！今年も工学研究部が主催する技術系サークル合同新歓を行います。多数の技術系サークルが参加するので興味のある方はぜひ参加してみてください！
                    </p>
                </div>
                <div className="contents">
                    <Heading name={"開催内容"} id={"contents"}/>
                    <div className="date">
                        <h4>日時・場所</h4>
                    </div>
                    <Place />
                    <div className="detail">
                        <h4>詳細</h4>
                        <Detail />
                    </div>
                </div>
                <div className="circle">
                    <Heading name={"参加団体"} id={"circle"}/>
                    <Group />
                </div>
                <div className="past">
                    <Heading name={"過去の開催"} id={"past"}/>
                    <p>
                        過去の合同新歓の様子は以下のリンクからご覧いただけます。ぜひサークル選びの参考にしてください。
                    </p>
                    <Past />
                </div>
                <div className="contact">
                    <Heading name={"お問い合わせ"} id={"contact"}/>
                    <p>
                        本合同新歓に関するお問い合わせは以下のメールアドレスまたは𝕏アカウントへお願いします。この「技術系合同新歓」は、技術系サークルが合同で主催しており、大学側は主催に関わっておりません。
                        そのため、お問い合わせは大学へは行わないようご注意いただくようお願いいたします。
                    </p>
                    <p>e-mail: <a href="mailto:info@tech-shinkan.club.uec.ac.jp">info@tech-shinkan.club.uec.ac.jp</a></p>
                    <p>𝕏(Twitter): <a href="https://twitter.com/uec_tech" target="_blank" rel="noopener noreferrer">@uec_tech</a></p>
                </div>
            </Container>
            <Footer />
    </main>
  )
}

export default App
