import React from 'react'

const SwiperSlideContent = (props) => {
    return (
        <div className="scene_content">
            <div className="inner_scene">
                <div className="scene_tistory scene_tistory_type2">
                    <strong className="tit_scene">
                        <b>{props.swiper.tit_sceneb}</b>
                        <br/>
                        {props.swiper.tit_scene}
                    </strong>
                    <p className="desc_scene">
                        {props.swiper.desc_scene1}
                        <br/>
                        {props.swiper.desc_scene2}
                    </p>
                    <div className="wrap_btn">
                        <a href={props.swiper.wrap_btn} className='btn_tistory btn_tistory_type5'>자세히보기</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwiperSlideContent;