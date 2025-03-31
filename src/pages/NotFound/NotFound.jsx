import React from 'react'
import './NotFound.scss'
function NotFound() {
  return (
    <>
     <main>
      <section>
        <div className="cantainer">
          <div className="woman__wine">
          <h2>Ooooops...</h2>
          <h1>похоже, мы не можем найти <br />
          нужную вам страницу <br />
          <p>404</p>
          <br />
          <br />
          загляните сюда</h1>
          <div className="arrow"></div>
          <div className="woman__rigth">
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
    </>
  )
}

export default NotFound
