import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="title">
        <div className="title_left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"></img>
          <h1 className="hoi_chem">HỘI CHÉM GIÓ VIỆT NAM</h1>
          <h1 className="chuong_trinh">CHƯƠNG TRÌNH</h1>
          <h1 className="react">REACT 2021</h1>
          <h1 className="date">Đà Nẵng, 1/2021</h1>

        </div>
      <div className="title_right">
        <div className="title_right_img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"></img>
        </div>
      </div>
      </div>
      <div className="tham_gia">
        <div className="dash">
        </div>
        <div className="title_tham_gia">
          <h1>tham gia đào tạo</h1>
        </div>
        <div className="nguoi_tham_gia">
          <div className="person">
            <div className="avatar">
              <img src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-1/c4.0.320.320a/p320x320/84569222_491709528423703_801483636653162496_n.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=c5yW8eMMd7MAX8nHGYA&_nc_ht=scontent.fdad3-2.fna&tp=27&oh=cf2fc29cb83daadb869d9eee67b5c39c&oe=60420DA5"></img>
            </div>
            <div className="person_content">
              <div className="person_name">
                <h3>Dương Quốc Lâm</h3>
              </div>
              <div className="person_position">
                    <p>student</p>
              </div>
            </div>
          </div>
                    <div className="person">
            <div className="avatar">
              <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-1/s320x320/135547839_1030364914144705_9151011061314656208_n.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_ohc=lqo2bKFOGGcAX_FXdpG&_nc_ht=scontent.fdad3-1.fna&tp=7&oh=a01c8340c73e953ffc0bee8522345a42&oe=603FE016"></img>
            </div>
            <div className="person_content">
              <div className="person_name">
                <h3>Lưu kim lào</h3>
              </div>
              <div className="person_position">
                    <p>student</p>
              </div>
            </div>
          </div>
                    <div className="person">
            <div className="avatar">
              <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-1/p320x320/143046061_777796179815494_5156185825220648704_o.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_ohc=P0DZiR697V8AX8tcHpF&_nc_ht=scontent.fdad3-1.fna&tp=6&oh=7f41104c973dc25e0bbee92dab36a540&oe=60408A63"></img>
            </div>
            <div className="person_content">
              <div className="person_name">
                <h3>long lol</h3>
              </div>
              <div className="person_position">
                    <p>student</p>
              </div>
            </div>
          </div>
                    <div className="person">
            <div className="avatar">
              <img src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-1/p320x320/118245628_1221629524841100_571552962971845789_o.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=mES8fygyPvMAX9Rhz_-&_nc_ht=scontent.fdad3-3.fna&tp=6&oh=3e0a7ac581262392069ae6ecc9030cf4&oe=6041E7B1"></img>
            </div>
            
            <div className="person_content">
              <div className="person_name">
                <h3>văn ml</h3>
              </div>
              <div className="person_position">
                    <p>student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chuong_trinh">
          <div className="dash">
          </div>
          <div className="title_chuong_trinh">
          <h1>chương trình đào tạo</h1>
          </div>
        <div className="table">
          <div className="table_title">
          <h3>phần cơ bản</h3>
          <p>(không giới hạn số người tham dự)</p>
          </div>
          <div className="row" id="col_1">
            <div className="col time" >Buổi 1</div>
            <div className="col activity">
              <ul>
                <li>
                    Ghi danh
                </li>
                <li>
                    Giới thiệu về ReactJS (reactjs.org)
                </li>
                <li>
                    Cài đặt môi trường cần thiết cho khóa học
                </li>
                <li>
                    Tạo React App đầu tiên (Hello world!)
                </li>
                <li>
                    Tạo React App giới thiệu bản thân (sử dụng html/css)
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col time" >Buổi 2</div>
            <div className="col activity">
              <ul>
                <li>
                    JSX là gì ?
                </li>
                <li>
                    Biểu thức trong JSX
                </li>
                <li>
                    Render Element
                </li>
                <li>
                    Cập nhật React App của bạn (sử dụng Object, Array, Biểu thức)
                </li>
               
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col time">Buổi 3</div>
            <div className="col activity">
              <ul>
                <li>
                    Component và Props (Cách phân chia cấu trúc)
                </li>
                <li>
                    Composing Component
                </li>
                <li>
                    Extracting Components
                </li>
                <li>
                    Cập nhật React App của bạn (Phân chia theo Component và Props)
                </li>
                
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col time">Buổi 5-6</div>
            <div className="col activity">
              <ul>
                <li>
                    State and Lifecycle
                </li>
                <li>
                    Định nghĩa state trong Class và Function
                </li>
                <li>
                    setState
                </li>
                <li>
                    Lifecycle
                </li>
                <li>
                    Điều kiện render - Rerender
                </li>
                <li>
                    Cập nhật React App của bạn (Hiển thị yêu thích và ghét với 1 button switch mode hiển thị)
                </li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
