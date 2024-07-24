import React from 'react';
import Vector from '../image/vector_1.png';
import Vector2 from '../image/vector_2.png';
import 느림메인 from '../image/느림이_테마.png';
import 느림1 from '../image/느림이2.png';
import 느림2 from '../image/느림이1.png';


const Home = ({ openLoginModal, isLoggedIn, userProfile }) => (
  <>
      <div className='home'>
        <div className='slowness_Theme'>
          <img src={느림메인} alt='slowness main Logo' />
        </div>

      {isLoggedIn ? (
        <section className='profile_section'>
          <div className= "profile_card">
            <h3>유저 정보</h3>
              <p>닉네임: {userProfile.nickname}</p>
              <p>레벨: {userProfile.level}</p>
              <p>뱃지: {userProfile.badges}</p>
              <p>칭호: {userProfile.title}</p>
              <p>날짜: {userProfile.login_at}</p>
          </div>
        </section>
      ) : (
        <section className='login_section'>
          <p className='login_message'>
            저속노화<span className='font_light1'>로 건강한 삶을 오래 유지하고 싶으신가요?</span>
          </p>
          <p className='login_message2'>
            <span>느림의 미학</span>과 함께라면 어렵지 않아요!
          </p>
          <button className='login_button login' onClick={openLoginModal}> 시작하기</button>
        </section>
      )}

      <section className='description_section'>
        <h2>저속노화가 무엇인가요?</h2>
        <p>노화 과정을 천천히 진행시키고, 가능한 한 건강하게 나이를 먹도록<br />도와주는 생활습관과 방법들을 실천하는 것입니다</p>
      </section>

      <section className='features_section'>
        <h2>느림의 미학에서 함께할 수 있어요</h2>
        <div className='features'>
          <div className='feature'>
            <div className='feature_header'>
              <p>1</p>
            </div>
            <p><span className='font_light1'>저속노화를 위한 첫번째 걸음</span></p>
            <p>저속노화 발걸음</p>
          </div>
          <div className="wrapper">
            <img src={Vector} alt="Vector 이미지" className="vector" />
            <img src={느림1} alt="느림1 이미지" className="absolute-img1" />
          </div>
          <div className="wrapper">
            <img src={Vector2} alt="Vector2 이미지" className="vector2" />
            <img src={느림2} alt="느림2 이미지" className="absolute-img2" />
          </div>
          <div className='feature'>
            <div className='feature_header'>
              <p>2</p>
            </div>
            <p><span className='font_light1'>저속노화를 위한 두번째 걸음</span></p>
            <p>월간 통계</p>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Home;