import React from 'react'

const WrapQuestion = (props) => {
    return (
        <div className="wrap_question">
            <span className="tit_question">{props.footer.tit_question}</span>
            <ul className="list_question">
                {props.footer.list_question.map((list)=>{
                    return(
                        <li key={list.id}><a href={list.href} className="link_txt">{list.list}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default WrapQuestion;