import React from 'react'
import './AboutUs.scss'
import guys from '../AboutUs/guys3.png'
import glasses from '../AboutUs/glasses.png'
import table from '../AboutUs/table.png'
import grapes from '../AboutUs/grapes.png'
import oldgrapes from '../AboutUs/oldgrapes.png'
import map from '../AboutUs/map.png'
function AboutUs() {
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <div className="About__us">
            <div className="about__usLeft">
              <h1>О НАС</h1>
              <p>Шардоне кажется самым противоречивым вином в мире: вы либо любите его, либо ненавидите. В 1995 году газета «The New York Times» опубликовала статью,  в которой репутация Шардоне ставилась под сомнение. Среди винных энтузиастов создавались целые «community», именуемые «A.B.C.», что означает «что угодно, только не Шардоне».
                <br />
                <br />
                <br />
          Однако Шардоне по сей день остается краеугольным камнем винной культуры многих стран. Мы предлагаем глубже погрузиться в феномен этого сорта и разобраться, как правильно выбрать вино на основе Шардоне.</p>
            </div>
            <div className="about__usRight">
               <a href=""><img src={guys} alt="" /></a>
            </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="special">
              <div className="special__left">
                <h1>ЧТО ДЕЛАЕТ НАС <br />
                ОСОБЕННЫМИ?</h1>
              </div>
              <div className="special__right">
                <a href=""><img src={glasses} alt="" /></a>
                <a href=""><img src={table} alt="" /></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a aliquet libero. Maecenas nec erat sit amet nisl malesuada convallis. Suspendisse luctus ante non mi ultrices scelerisque. Praesent quis dolor in sem varius interdum. Sed at leo est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque porttitor ornare massa. Donec maximus metus sit amet tellus elementum cursus. Donec dictum libero sed augue euismod ullamcorper. Mauris et tortor vel elit maximus ultrices in in neque. Mauris condimentum mattis neque, in iaculis dolor volutpat ut. Mauris ut rutrum nibh. Sed consequat aliquam odio. In consequat sed enim vitae tincidunt.
                  <br />
                  <br />
                  <br />
                Quisque est erat, luctus non sollicitudin ut, facilisis quis purus. Nam dignissim velit ac massa elementum, sed ultricies orci pulvinar. Nulla tincidunt pellentesque urna a eleifend. Aliquam commodo est vel sollicitudin vestibulum. Suspendisse volutpat nisl velit. Aliquam dapibus commodo magna, ut scelerisque neque mollis sed. Sed scelerisque quis metus non blandit. Suspendisse sollicitudin enim quam, quis dictum lorem hendrerit pretium. Duis sagittis risus et tempus lobortis. Etiam vitae euismod leo, eu auctor est.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
          <div className="category">
          <div className="wine">
          <div className="wine__pos"></div>
          <p>НА ТЕРРИТОРИИ БОРДО</p>
          <h1>БРЕНДИРОВАНИЕ ВИН</h1>
          </div>
        <div className="convers">
          <div className="convers__pos"></div>
          <p>ЧТО ДЕЛАЕТ НАС ОСОБЕННЫМИ?</p>
          <h1>БЕСЕДА С СОМЕЛЬЕ</h1>
        </div>
        <div className="koktail">
          <div className="koktail__pos"></div>
          <p>С ИНТЕРЕСНЫМИ ИНГРЕДИЕНТАМИ</p>
          <h1>ФИРМЕННЫЕ КОКТЕЙЛИ</h1>
        </div>
          </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="grape">
              <div className="grape__left">
              <h1>Виноградники <br/>
              <h3>BARREAU</h3></h1>
              </div>
              <div className="grape__right">
              <a href=""><img src={grapes} alt="" /></a>
              <a href=""><img src={oldgrapes} alt="" /></a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a aliquet libero. Maecenas nec erat sit amet nisl malesuada convallis. Suspendisse luctus ante non mi ultrices scelerisque. Praesent quis dolor in sem varius interdum. Sed at leo est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque porttitor ornare massa. Donec maximus metus sit amet tellus elementum cursus. Donec dictum libero sed augue euismod ullamcorper. Mauris et tortor vel elit maximus ultrices in in neque. Mauris condimentum mattis neque, in iaculis dolor volutpat ut. Mauris ut rutrum nibh. Sed consequat aliquam odio. In consequat sed enim vitae tincidunt.
                <br />
                <br />
                <br />
              Quisque est erat, luctus non sollicitudin ut, facilisis quis purus. Nam dignissim velit ac massa elementum, sed ultricies orci pulvinar. Nulla tincidunt pellentesque urna a eleifend. Aliquam commodo est vel sollicitudin vestibulum. Suspendisse volutpat nisl velit. Aliquam dapibus commodo magna, ut scelerisque neque mollis sed. Sed scelerisque quis metus non blandit. Suspendisse sollicitudin enim quam, quis dictum lorem hendrerit pretium. Duis sagittis risus et tempus lobortis. Etiam vitae euismod leo, eu auctor est.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="location">
              <div className="location__left">
                <h1>где мы находимся?</h1>
                <div className="map-container">
                <img src={map} alt="" />
                </div>
                </div>
                <div className="location__right">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a aliquet libero. Maecenas nec erat sit amet nisl malesuada convallis. Suspendisse luctus ante non mi ultrices scelerisque. Praesent quis dolor in sem varius interdum. Sed at leo est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque porttitor ornare massa. Donec maximus metus sit amet tellus elementum cursus. Donec dictum libero sed augue euismod ullamcorper. Mauris et tortor vel elit maximus ultrices in in neque. Mauris condimentum mattis neque, in iaculis dolor volutpat ut. Mauris ut rutrum nibh. Sed consequat aliquam odio. In consequat sed enim vitae tincidunt. 
                  <br />
                  <br />
                  <br />
                  Quisque est erat, luctus non sollicitudin ut, facilisis quis purus. Nam dignissim velit ac massa elementum, sed ultricies orci pulvinar. Nulla tincidunt pellentesque urna a eleifend. Aliquam commodo est vel sollicitudin vestibulum. Suspendisse volutpat nisl velit. Aliquam dapibus commodo magna, ut scelerisque neque mollis sed. Sed scelerisque quis metus non blandit. Suspendisse sollicitudin enim quam, quis dictum lorem hendrerit pretium. Duis sagittis risus et tempus lobortis. Etiam vitae euismod leo, eu auctor est.</p>
                <div className="location__right__top">
                  <div className="phone">
                  <h3>Телефон:</h3>
                  <h2>2233 44 1234</h2>
                  </div>
                  <div className="email">
                  <h3>Email:</h3>
                  <h2>info@tripfinance.ru</h2>
                  </div>
                  <div className="address">
                  <h3>Адрес:</h3>
                  <h2>ул. Нарвская,<br /> д.1А, корп.2,<br /> помещение 17</h2>
                 </div>
                </div>
               
                <div className="location__right__bottom">
                <h4 className='feedbackh1'>ОБРАТНАЯ СВЯЗЬ</h4>
                <form>
  <div class="input-container">
    <label><p>ИМЯ</p></label>
    <input type="text"/>
  </div>

  <div class="input-container">
    <label for><p>ТЕЛЕФОН</p></label>
    <input type="text"/>
  </div>
</form>
          <form>
            <div className="input-container">
                  <label> <p>СООБЩЕНИЕ</p>  </label>
                    <input type="text"/>
                    </div>
                </form>
                <button>ОТПРАВИТЬ</button>
                </div>
                </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="conclusion">
              <div className="conclusion__left">
              <div className="convers2">
                <div className="convers2__pos"></div>
              <p>ЧТО ДЕЛАЕТ НАС ОСОБЕННЫМИ?</p>
              <h1>БЕСЕДА С СОМЕЛЬЕ</h1>
              </div>
              <div className="convers__p">
              <p>Благодаря рекомендациям наших опытных кавистов, вы сможете не только приобрести ту самую бутылку вина, но и узнать много нового о сочетаниях, подборе гастрономической пары, необходимости декантации, хранении и сервировке.</p>
              </div>
              <h3>УЗНАТЬ БОЛЬШЕ</h3>
              </div>
              <div className="conclusion__right">
              <div className="price">
                <div className="price__pos"></div>
              <p>НА ТЕРРИТОРИИ БОРДО</p>
              <h1>БРЕНДИРОВАНИЕ ВИН</h1>
              </div>
              <div className="price__p">
              <p>Мы с удовольствием поделимся с Вами самыми главными винными секретами, а также поможем подобрать идеальные букет и вкус, соответствующие поводу, вашим предпочтениям и статусу. </p>
              </div>
              </div>
            </div>
          </div>
        </section>
       
      </main>
    </div>
  )
}

export default AboutUs
