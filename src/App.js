import { Component } from "react";
import Content from "./Content.js";
import TOC from "./TOC.js";
import Subject from "./Subject.js";

import image4 from "./img/image4.png";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "FINALFANTASY XIV - ENDWALKER", sub: "파이널판타지14 - 효월의 종언" },
      welcome: { title: "효월의 종언 확장팩 영웅 난이도 토벌전", desc: "네 번째 확장팩 효월의 종언 시즌 하드 컨텐츠 중 '변영'편 공대 클리어 기록", image: image4 },
      contents: [
        { id: 1, title: "마의 전당 판데모니움: 변옥편 1(영웅)", desc: "보스 : 에리크토니오스 / 줄거리 : 엘피스에서 테미스와 만난 모험가는 판데모니움에 위기가 닥쳤다는 말을 듣고 판데모니움 변옥에 돌입한다. 수많은 간수들이 있어야 할 변옥의 입구에는 그 누구도 입구를 지키고 있지 않았고, 동태를 살피러 변옥으로 들어가려는 테미스와 모험가 앞을 가로막은 것은 변신한 모습으로 반쯤 정신이 나가 있는 에리크토니오스였다. 테미스는 우선 변옥에 들어서려면 에리크토니오스를 진정시켜야 한다고 말하며, 이에 모험가는 테미스의 도움으로 환영들과 함께 맞선다. / 클리어 시간 : 약 4릴(1주)", image: img1 },
        { id: 2, title: "마의 전당 판데모니움: 변옥편 2(영웅)", desc: "보스 : 히포캄포스 / 줄거리 : 간수 에리크토니오스의 증언으로, 누군가가 판데모니움 제1계층인 '변옥'을 장악하여 창조 생물들이 봉인에서 풀려났다는 것을 알게 되었다. 이대로 두면 위험한 존재가 세상에 풀려나게 된다. 모험가 일행은 이 위기를 해결하고자 에리크토니오스와 테미스가 힘을 합쳐 감옥 마법을 전개함으로써 창조 생물들을 다시 봉인하는 작전을 세운다. 수생 생물 히포캄포스를 첫 번째 목표로 정한 일행은 지하수로로 향한다. / 클리어 시간 : 약 6릴(1.5주)", image: img2 },
        { id: 3, title: "마의 전당 판데모니움: 변옥편 3(영웅)", desc: "보스 : 페넥스 / 줄거리 : 일동은 각자 지닌 힘을 합쳐 창조 생물을 '감옥' 마법으로 다시 봉인하는 데에 성공했다. 다음 상대는 예전에 불사조 이데아를 만들고자 도전하던 자들이 그 과정에서 탄생시킨 창조 생물 '페넥스'. 라하브레아가 만든 성공작 '피닉스'와 닮았지만 다른 존재이며, 성질이 흉포하여 판데모니움에 수용되었다고 한다. 페넥스가 떠돌던 회랑은 창조 생물이 힘을 발휘하기 위한 전투장으로 완전히 변해버렸다. 흑막의 정체를 밝히기 위해, 다시 판데모니움으로 들어간다. / 클리어 시간 : 초월하는힘o,템레벨 조정x 시 템레벨 600~630 기준 12릴(3주), 최저조율 시 약 20릴(6주)", image: img3 },
        { id: 4, title: "마의 전당 판데모니움: 변옥편 4(영웅)", desc: "보스 : 헤르페로스 / 줄거리 : 판데모니움의 결계를 공격한 흑막이 드디어 모험가 일행 앞에 모습을 드러냈다. 그의 이름은 헤스페로스. 변옥을 이끄는 간수장이다. 창조 생물과 융합하여 반신 '헤미테오스'로 변화한 그는, 장관인 라하브레아를 숭배하고 그 아들인 에리크토니오스를 증오함을 털어놓는다. 이번 사건은 그런 감정들이 폭주했기에 벌어진 일일까. 진의를 확인하기 위해, 변옥 심층에서 기다리는 헤스페로스를 쓰러뜨려야 한다. / 클리어 시간 : 초월하는힘o, 템레벨 조정x 시 템레벨 600~630 기준 약 14릴(3주), 최저조율 시 약 30릴(8주) ", image: img4 }, 
      ],
    };
  }
  render() {
    var _title,
      _desc,
      _image = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc} img={_image}></Content>
      </div>
    );
  }
}

export default App;
