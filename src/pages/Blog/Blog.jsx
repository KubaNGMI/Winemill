import React from 'react'
import './Blog.scss'
const Blog = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="article">
            <h1>статьи о вине и <br />
            крепких напитках</h1>
            <p>Просто и понятно о винных стилях, регионах, сортах, о том, как выбрать вино, с чем его пить и из какого бокала, о типах и особенностях виски, о разнице между игристым вином и шампанским.</p>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="cart__blog">
              <div className="cart__blog__left">
            <div className="pink">
              <div className="pink__pos"></div>
              <h4>Wine</h4>
              <h1>ВИНА ИЗ ГРЕНАША <br />
              СРАВНЕНИЕ СТИЛЕЙ</h1>
              <p>ЧИТАТЬ СТАТЬЮ</p>
            </div>
            <div className="green">
              <div className="green__pos"></div>
              <h4>Wine</h4>
              <h1>НОВОЕ ПОКОЛЕНИЕ ВИНОДЕЛОВ:
              НА ЧТО ОЖИДАТЬ?</h1>
              <p>ЧИТАТЬ СТАТЬЮ</p>
            </div>
            <div className="pink">
              <div className="pink__pos"></div>
              <h4>Wine</h4>
              <h1>ВИНА ИЗ ГРЕНАША
              СРАВНЕНИЕ СТИЛЕЙ</h1>
              <p>ЧИТАТЬ СТАТЬЮ</p>
            </div>
            <div className="green">
              <div className="green__pos"></div>
              <h4>Wine</h4>
              <h1> КАК ВАМ ВЫБРАТЬ ШАРДОНЕ:
                ПОЛЕЗНЫЕ СОВЕТЫ
              </h1>
              <p>ЧИТАТЬ СТАТЬЮ</p>
            </div>
              </div>
              <div className="cart__blog__right">
              <div className="blue">
                <div className="blue__pos"></div>
              <h4>Wine</h4>
              <h1>МАЛЕНЬКИЕ ГРОУЕРЫ 
              ВНУТРИ БОЛЬШОЙ ШАМПАНИы</h1>
              <p>ЧИТАТЬ СТАТЬЮ</p>
            </div>
            <div className="orange">
              <div className="orange__pos"></div>
              <h4>Wine</h4>
              <h1>ИНВЕСТИЦИИ В АРМАНЬЯК: <br />СТОИТ ЛИ?</h1>
              <p>ЧИТАТЬ СТАТЬЮ</p>
            </div>
            <div className="blue">
              <div className="blue__pos"></div>
              <h4>Wine</h4>
              <h1>МАЛЕНЬКИЕ ГРОУЕРЫ 
              ВНУТРИ БОЛЬШОЙ ШАМПАНИ</h1>
              <p>ЧИТАТЬ СТАТЬЮ</p>
            </div>
            <div className="orange">
              <div className="orange__pos"></div>
              <h4>Wine</h4>
              <h1>ИНВЕСТИЦИИ В АРМАНЬЯК: <br />СТОИТ ЛИ?</h1>
              <p>ЧИТАТЬ СТАТЬЮ</p>
            </div>
              </div>
            </div>
            <div className="h2">
            <h2 >СМОТРЕТЬ ВСЕ</h2>
            <svg width="65" height="1" viewBox="0 0 65 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="65" y1="0.5" y2="0.5" stroke="white"/>
</svg>
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
              <div className="learn-more">
              <h6 className="learn-moreh3">УЗНАТЬ БОЛЬШЕ</h6  >
              <svg width="46" height="1" viewBox="0 0 46 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="46" y1="0.5" y2="0.5" stroke="white"/>
</svg>

              </div>
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
    </>
  )
}

export default Blog
