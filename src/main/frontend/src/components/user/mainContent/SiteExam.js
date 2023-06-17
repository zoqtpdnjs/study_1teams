import React from 'react'

const SiteExam = (props) => {

    return (
        <a className="site_exam" href={props.slideCase.siteExamHref} target="_blank">
            <div className="wrap_thumb">
                <img width="528" height="396" src={props.slideCase.wrapThumbImg} className="thumb_g" alt="" />
            </div>
            <div className="info_exam">
                <strong className="tit_exam">{props.slideCase.titExamStrong}</strong>
                <p className="txt_exam">{props.slideCase.txtExamP}</p>
                <span className="link_exam">{props.slideCase.linkExam}<span className="img_top ico_view"></span></span>
            </div>
        </a>
    )
}

export default SiteExam;