// SignUp.js
import React, { useEffect, useState } from 'react';
import S from './style.js'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './Modal.jsx';
import { NavLink ,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const SignUp = () => {
  const {register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode: "onChange"})
    
  const idRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]{5,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{10,}$/;

  const [allAgreed, setAllAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [uniqueIdAgreed, setUniqueIdAgreed] = useState(false);
  const [telecomAgreed, setTelecomAgreed] = useState(false);

  const handleAllAgreeChange = () => {
    const newAllAgreedState = !allAgreed;
    setAllAgreed(newAllAgreedState);
    setPrivacyAgreed(newAllAgreedState);
    setTermsAgreed(newAllAgreedState);
    setUniqueIdAgreed(newAllAgreedState);
    setTelecomAgreed(newAllAgreedState);
  };

  useEffect(() => {
    if (privacyAgreed && termsAgreed && uniqueIdAgreed && telecomAgreed) {
      setAllAgreed(true);
    } else {
      setAllAgreed(false);
    }
  }, [privacyAgreed, termsAgreed, uniqueIdAgreed, telecomAgreed]);

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showUniqueModal, setShowUniqueModal] = useState(false);
  const [showTelecomModal, setShowTelecomModal] = useState(false);

  const handleOpenPrivacyModal = () => {
    setShowPrivacyModal(true);
  };
  const handleClosePrivacyModal = () => {
    setShowPrivacyModal(false);
  };
  const handleOpenTermsModal = () => {
    setShowTermsModal(true);
  };
  const handleCloseTermsModal = () => {
    setShowTermsModal(false);
  };
  const handleOpenUniqueModal = () => {
    setShowUniqueModal(true);
  };
  const handleCloseUniqueModal = () => {
    setShowUniqueModal(false);
  };
  const handleOpenTelecomModal = () => {
    setShowTelecomModal(true);
  };
  const handleCloseTelecomModal = () => {
    setShowTelecomModal(false);
  };

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const navigate = useNavigate();
  const handleSignUpClick = (data) => {
    if (!privacyAgreed || !termsAgreed || !uniqueIdAgreed || !telecomAgreed) {
      alert("필수 약관에 동의해주세요.");
    } else {
      fetch('http://localhost:8000/register/signUp', {
                method : 'POST',
                credentials:'include',
                headers : {
                    'Content-Type': 'application/json',
                    'Accept':'application/json'
                },
                body : JSON.stringify({
                    id : data.id,
                    password : data.password,
                    phonenumber : data.phonenumber
                })
            })
            .then(res => res.json())
            .then(res => console.log(res))
            navigate('/signUpFinish')
      
  }};
  return (
    <S.Background>
      <S.FormContainer>
      <S.H1>회원가입</S.H1>
      <form onSubmit={handleSubmit(handleSignUpClick)}>
        <S.IdInputContainer>
          <S.Input type="text" placeholder=" 아이디 (최소 5글자)" id="id"  
           {...register("id", {
                        required : true,
                        pattern : {
                            value : idRegex,
                        }
                    })}
                />
          <S.Button>중복확인</S.Button>
        </S.IdInputContainer>
          <S.PasswordContainer>
          <S.PasswordInput type={isPasswordShown ? 'text' : 'password'} 
          placeholder=" 비밀번호 (영문과 숫자를 조합한 10글자 이상 문자)"
          id="password"
          {...register("password", {
            required : true,
            pattern : {
                value : passwordRegex,
            }
        })}/>
         {errors?.password?.type === 'pattern' && (
                    <S.ErrorMessge>소문자, 숫자, 특수문자 각 하나씩 포함한 10자리 이상의 패스워드를 만들어주세요.</S.ErrorMessge>
                )}

          <S.Icon onClick={togglePasswordVisiblity}>
            <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
          </S.Icon>
        </S.PasswordContainer>
        <S.PasswordContainer>
        <S.PasswordInput type={isPasswordShown ? 'text' : 'password'} 
        placeholder=" 비밀번호 확인" 
        {...register("passwordConfirm", {
          required : true,
          validate : {
              matchPassword : (value) => {
                  const { password } = getValues();
                  console.log(value, password, password === value)
                  return password === value;
              }
          }
      })}/>
          <S.Icon onClick={togglePasswordVisiblity}>
            <FontAwesomeIcon icon={isPasswordShown ? faEyeSlash : faEye} style={{ fontSize: "18px" }} color='#9F9F9F'/>
          </S.Icon>
          {errors?.passwordConfirm && (
                    <S.ErrorMessge>비밀번호가 일치하지 않습니다.</S.ErrorMessge>
                )}
          </S.PasswordContainer>
          <S.IdentificationContainer>
          <S.Input type="tel" placeholder="전화번호" id='phonenumber'
             {...register("phonenumber", {
              required : true
          })}
          />
          </S.IdentificationContainer>
          <S.RadioContainer>
            <label style={{fontWeight : 600}}><input type='checkbox' checked={allAgreed} onChange={handleAllAgreeChange} />휴대폰 본인확인 전체동의</label>
            <S.LabelContainer>
            <label><input type='checkbox' checked={privacyAgreed} onChange={() => setPrivacyAgreed(!privacyAgreed)} />개인정보 이용 동의 (필수)</label>
            <S.LabelButton onClick={handleOpenPrivacyModal}>자세히</S.LabelButton>
            <Modal show={showPrivacyModal} onClose={handleClosePrivacyModal}>
            <S.H5>제 1조 개인정보의 처리 목적</S.H5>
                <p>[제 1조 개인정보의 처리 목적] 회사는 개인정보를 다음의 목적을 위해 처리합니다. 
                  처리한 개인정보는 다음의 목적 이외의 용도로는 사용하지 않으며 이용 목적 이 변경될 시에는 「개인정보 보호법」제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                  ※ 귀하께서는 개인정보 수집·이용에 대한 동의를 거부하실 권리가 있으며, 동의를 거부하실 경우 회원제 서비스를 이용하실 수 없습니다.</p>
                  <p> ㆍ 1) 고객문의 처리 <br/>- 고객의 요청ㆍ문의사항 확인, 사실조사를 위한 연락ㆍ통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.</p>
                  <p> ㆍ 2) 재화 또는 서비스 제공 <br/>- 각종 컨텐츠 이용 및 이벤트 응모, 구매 및 요금 결제, 물품배송 또는 청구서 등 발송, 금융거래 본인 인증 및 금융 서비스, 요금추심 등을 목적으로 개인정보를 처리합니다.</p>
                  <p> ㆍ 3) 마케팅 및 광고 활용 <br/>- 이벤트 등 광고성 정보 전달, 이벤트 당첨 시 물품배송, 신규 서비스 개발 및 특화, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계 목적으로 개인정보를 처리합니다.</p>
                  <p> ㆍ 4) 쿠키, 서비스이용기록, 접속로그, 접속 IP 정보에 대한 이용 <br/>- 서비스 이용 기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 프라이버시 보호 측면의 서비스 환경구축, 맞춤형 서비스 제공, 서비스 개선에 활용목적으로 개인정보를 처리합니다.</p>
                  <p> - 파기절차:<br /> 고객님이 온라인 상담 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨 (종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
                  <br/>- 파기방법: 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>
            </Modal>
            </S.LabelContainer>
            <S.LabelContainer>
            <label><input type='checkbox' checked={termsAgreed} onChange={() => setTermsAgreed(!termsAgreed)} />서비스 이용약관 동의 (필수)</label>
            <S.LabelButton onClick={handleOpenTermsModal}>자세히</S.LabelButton>
            <Modal show={showTermsModal} onClose={handleCloseTermsModal}>
            <S.H5>서비스 이용약관 동의</S.H5>
                <p>[서비스이용약관]</p>
                  <p> ㆍ 제 1조 목적 <br/>
                  본 약관은 한국모바일인증(주)(이하"회사"라 한다)이 제공하는 본인확인서비스(이하"서비스"라 한다)에 관한 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.</p>
                  <p> ㆍ 제 2조 (약관의 효력 및 변경)<br/>-본 약관은 "이용자"에게 "서비스" 화면에 게시하거나, 기타의 방법으로 공지하는 것으로 효력이 발생합니다.<br/> - "이용자"는 변경된 약관에 대한 내용을 알지 못하여 발생하는 손해 및 피해에 대해서는 "회사"가 책임을 지지 않습니다.</p>
              </Modal>
            </S.LabelContainer>
            <S.LabelContainer>
              <label><input type='checkbox' checked={uniqueIdAgreed} onChange={() => setUniqueIdAgreed(!uniqueIdAgreed)} />고유식별 정보 처리 동의 (필수)</label>
              <S.LabelButton onClick={handleOpenUniqueModal}>자세히</S.LabelButton>
              <Modal show={showUniqueModal} onClose={handleCloseUniqueModal}>
                <S.H5>고유식별 정보 처리 동의</S.H5>
                <p>[고유식별정보의 처리에 관한 사항 동의]</p>
                  <p> SK텔레콤(주) 귀중 
                      본인은 SK텔레콤(주)(이하 ‘회사’라 합니다)가 제공하는 본인확인서비스(이하 ‘서비스’라 합니다)를 이용하기 위해, 다음과 같이 본인의 개인정보를 회사가 아래 기재된 제3자에게 제공하는 것에 동의합니다. <br/>
                      ㆍ 1. 개인정보를 제공받는 자 <br/>
                      - NICE평가정보(주), SCI평가정보(주)</p>
                  <p> ㆍ 제 2조 (약관의 효력 및 변경)<br/>2. 개인정보를 제공받는 자의 개인정보 이용목적 <br/>
                      - 연계정보(CI)/중복가입확인정보(DI) 생성 및 회사에 제공<br/>3. 제공하는 개인정보 항목<br/>
                      - 회사가 보유하고 있는 이용자의 주민등록번호, 외국인등록번호
                      <br/>
                      4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간<br/>
                      - 연계정보(CI)/중복가입확인정보(DI) 생성 후 즉시 폐기
                      <br/>
                      5. 위 개인정보 제공에 동의하지 않을 권리가 있으며, 동의하지 않으실 경우 서비스를 이용할 수 없습니다.<br/>
                      본인은 위 내용을 숙지하였으며 이에 동의합니다.</p>
              </Modal>
            </S.LabelContainer>
            <S.LabelContainer>
              <label><input type='checkbox' checked={telecomAgreed} onChange={() => setTelecomAgreed(!telecomAgreed)} />통신사 이용약관 동의 (필수)</label>
              <S.LabelButton onClick={handleOpenTelecomModal}>자세히</S.LabelButton>
              <Modal show={showTelecomModal} onClose={handleCloseTelecomModal}>
                <S.H5>통신사 이용약관 동의</S.H5>
                <p>[SKT '본인확인서비스'이용약관]</p>
                  <p> SK텔레콤(주) 귀중 
                      본인은 SK텔레콤(주)(이하 ‘회사’라 합니다)가 제공하는 본인확인서비스(이하 ‘서비스’라 합니다)를 이용하기 위해, 다음과 같이 본인의 개인정보를 회사가 아래 기재된 제3자에게 제공하는 것에 동의합니다. <br/>
                      ㆍ 1. 개인정보를 제공받는 자 <br/>
                      - NICE평가정보(주), SCI평가정보(주)</p>
                  <p> ㆍ 제 2조 (약관의 효력 및 변경)<br/>2. 개인정보를 제공받는 자의 개인정보 이용목적 <br/>
                      - 연계정보(CI)/중복가입확인정보(DI) 생성 및 회사에 제공<br/>3. 제공하는 개인정보 항목<br/>
                      - 회사가 보유하고 있는 이용자의 주민등록번호, 외국인등록번호
                      <br/>
                      4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간<br/>
                      - 연계정보(CI)/중복가입확인정보(DI) 생성 후 즉시 폐기
                      <br/>
                      5. 위 개인정보 제공에 동의하지 않을 권리가 있으며, 동의하지 않으실 경우 서비스를 이용할 수 없습니다.<br/>
                      본인은 위 내용을 숙지하였으며 이에 동의합니다.</p>
              </Modal>
              </S.LabelContainer>
            </S.RadioContainer>
            <S.ButtonContainer>
              <S.SubmitButton disabled={isSubmitting}>회원가입</S.SubmitButton>
              <NavLink to={"/"}>
                <S.CancleButton>취소</S.CancleButton>
              </NavLink>
            </S.ButtonContainer>
            </form>
      </S.FormContainer>
      </S.Background>
  );
};
export default SignUp;