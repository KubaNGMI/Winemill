import React from 'react'
import '../Choice/Choice.scss'
import choiceimage1 from '../Choice/choiceimg.png'

function Choice({ 
  image = choiceimage1,
  title = "Sommelier Choice",
  heading = "НЕ УВЕРЕНЫ В ВЫБОРЕ?МЫ ГОТОВЫ ПОМОЧЬ!",
  linkText = "ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ",
  linkUrl = "#",
  paragraph1 = "Благодаря рекомендациям наших опытных кавистов, вы сможете не только приобрести ту самую бутылку вина, но и узнать много нового о сочетаниях, подборе гастрономической пары, необходимости декантации, хранении и сервировке.",
  paragraph2 = "Мы с удовольствием поделимся с Вами самыми главными винными секретами, а также поможем подобрать идеальные букет и вкус, соответствующие поводу, вашим предпочтениям и статусу.",
  buttonText = "СМОТРЕТЬ ВСЕ"
}) {
  return (
    <section className='choice'>
      <div className="choice-all">
        <div className="choice_content">
          <div className="choice-container">
            <img src={image} alt="" />
          </div>
          <div className="choice-offer">
            <div className="text-box-choice">
              <h4>{title}</h4>
              <h2>{heading}</h2>
              <a href={linkUrl}>{linkText}</a>
            </div>
          </div>
        </div>
        <div className="choice-text-box">
          <p className='choice-p1'>{paragraph1}</p>
          <span className='choice-p2'>{paragraph2}</span>
        </div>
        <button className='viewall-choice'>{buttonText}
          <svg width="46" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="46" y1="0.5" y2="0.5" stroke="white"/>
          </svg>
        </button>
      </div>      
    </section>
  )
}

export default Choice