import React, { useState, useEffect } from 'react'
import SiteExam from'components/user/mainContent/SiteExam'

const SectionShowcase = () => {

    const slideCaseList = [
        {   
            id: 1,
            siteExamHref:"http://so-oh.tistory.com/category",
            wrapThumbImg: "https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F99368F335BB2C64F29335D",
            titExamStrong: "yunscent",
            txtExamP: "사진이 그림이 됩니다.",
            linkExam: "http://so-oh.tistory.com/category",
        },
        {   
            id: 2,
            siteExamHref:"http://mistyfriday.kr/",
            wrapThumbImg: "https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F996CC03C5BB2C66823DA6C",
            titExamStrong: "빛으로 쓴 편지",
            txtExamP: "여행하고 글을 씁니다.",
            linkExam: "http://mistyfriday.kr/",
        },
        {   
            id: 3,
            siteExamHref:"http://hotel990.com",
            wrapThumbImg: "https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F99A81B3C5BB2C6EF2C9883",
            titExamStrong: "HOTEL 990",
            txtExamP: "WELCOME TO THE HOTEL990",
            linkExam: "http://hotel990.com",
        },
        {   
            id: 4,
            siteExamHref:"https://hygphoto.tistory.com/",
            wrapThumbImg: "https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F99D6CF405BB2C6B824A969",
            titExamStrong: "HYGPHOTO",
            txtExamP: "아름다운 일상의 한 컷",
            linkExam: "https://hygphoto.tistory.com/",
        },
        {   
            id: 5,
            siteExamHref:"http://leeheehoon.tistory.com/",
            wrapThumbImg: "https://img1.daumcdn.net/thumb/C1200x900/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fassets%2Fpromotions%2F72a26c24396048fa9fb668442021a18b",
            titExamStrong: "Beyond Perspective",
            txtExamP: "Lee Heehoon,<br/> photographer for ohmynews Seoul S.Korea",
            linkExam: "http://leeheehoon.tistory.com/",
        }
    ];

    const relativeList = [
        {   
            id: 1,
            wrapLogoStyle:"https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F9989ED3B5BB2C5D3287867",
            wrapLogoHref: "http://blogdegalleria.tistory.com",
            a: "갤러리아 공식블로그 'BLOG DE GALLERIA'"
        },
        {   
            id: 2,
            wrapLogoStyle:"https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F991B033C5BB2C59024121E",
            wrapLogoHref: "http://www.witheverland.com",
            a: "withEverland"
        },
        {   
            id: 3,
            wrapLogoStyle:"https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F9988F0395BB2C5B11F8B83",
            wrapLogoHref: "http://blog.paradise.co.kr",
            a: "파라다이스 블로그"
        },
        {   
            id: 4,
            wrapLogoStyle:"https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F99A6963C5BB2C5C32AB7FC",
            wrapLogoHref: "http://thehyundaiblog.com",
            a: "현대백화점 공식블로그"
        },
        {   
            id: 5,
            wrapLogoStyle:"https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F995901365BB2C53C27D162",
            wrapLogoHref: "http://if-blog.tistory.com",
            a: "교육부 공식 블로그"
        },
        {   
            id: 6,
            wrapLogoStyle:"https://img1.daumcdn.net/thumb/R300x100/?scode=mtistory2&fname=http%3A%2F%2Fcfile24.uf.tistory.com%2Fimage%2F9950223C5BB2C57B2225FF",
            wrapLogoHref: "http://blog.ibk.co.kr",
            a: "IBK 기업은행 블로그"
        }
    ];

    return (
        <div className="section_content section_showcase">
            <h2 className="screen_out">SHOWCASE</h2>
            <div className="wrap_tit">
                <strong className="tit_section">
                    이 놀라운 사이트들이<br/>
                    <em>모두 <span className="txt_da">다</span>티스토리</em>
                    라는 사실
                </strong>
                <p className="desc_section">티스토리는 그저 공간일 뿐이에요. 그 공간에 무슨일이 일어날지는 아무도 상상할 수 없죠.</p>
            </div>
            <div className="case_list">
                <div className="inner_case">
                    <div className="slide_case" style={{width: '2772px', marginLeft: '-552px'}}>
                        {slideCaseList.map((slideCase)=>{
                            return(
                                <SiteExam key={slideCase.id} slideCase={slideCase} />
                            )
                        })}
                    </div>
                </div>
                <div className="area_btn area_prev">
                    <button type="button" className="btn_tistory_type4 btn_prev slick-arrow" style={{display: 'none'}}><span className="img_top ico_prev">이전</span></button>
                </div>
                <div className="area_btn area_next">
                    <button type="button" className="btn_tistory_type4 btn_next slick-arrow" style={{}}><span className="img_top ico_next">다음</span></button>
                </div>
            </div>
            <div className="relative_list">
                {relativeList.map((relativeList)=>{
                    return(
                        <a key={relativeList.id} className="wrap_logo" style={{backgroundImage:`url(${relativeList.wrapLogoStyle})`}} target="_blank" href={relativeList.wrapLogoHref}>{relativeList.a}</a>
                    )
                })}
            </div>
        </div>
    )
}

export default SectionShowcase;