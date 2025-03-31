import React from 'react'
import '../Choice/Choice.scss'
import choiceimage1 from '../Choice/choiceimg.png'


function Choice() {
  return (
    <section className='choice'>
                <div className="choice-all">
                  <div className="choice_content">
                    <div className="choice-container">
                      <img src={choiceimage1} alt="" />
                    </div>
                    <div className="choice-offer">
                      <div className="text-box-choice">
                      <h4>Sommelier Choice</h4>
                      <h2>НЕ УВЕРЕНЫ В ВЫБОРЕ?
                      МЫ ГОТОВЫ ПОМОЧЬ!</h2>
                      <a href="#">ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</a>
                      </div>
                    </div>
                    </div>
                    <div className="choice-text-box">
                        <p className='choice-p1'>Благодаря рекомендациям наших опытных кавистов, вы сможете не только приобрести ту самую бутылку вина, но и узнать много нового о сочетаниях, подборе гастрономической пары, необходимости декантации, хранении и сервировке. </p>
                        <span className='choice-p2'>Мы с удовольствием поделимся с Вами самыми главными винными секретами, а также поможем подобрать идеальные букет и вкус, соответствующие поводу, вашим предпочтениям и статусу. </span>
                  </div>
                  <button className='viewall-choice'>СМОТРЕТЬ ВСЕ
            <svg width="46" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="46" y1="0.5" y2="0.5" stroke="white"/>
            </svg>
            </button>
                  </div>      
    </section>
  )
}

export default Choice
