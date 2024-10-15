import React from "react";
import styles from "./howToOrder.module.scss";


function HelpPage(){
  return (
    <div className={"helPage-wrapper"}>
      <div className="container">
        <div className={"helPage-wrapperInner"}>
        <div>
          <h1 className={"helPage-orederTitile"}>Как заказать? (Пошаговая инструкция)</h1>
         <ul className={"helPage-orderList"} role="list">
            <li className={"helPage-listItem"}>Зарегистрируйтесь или выполните вход в имеющийся аккаунт</li>
            <li className={"helPage-listItem"}>Выберите нужную вам категорию в меню, вы можете выбирать бренды или же категории товаров.При желании воспользуйтесь поиском(значок лупы)</li>
            <li className={"helPage-listItem"}>Найдя нужный товар, нажмите на кнопку «в корзину»</li>
            <li className={"helPage-listItem"}>Когда вы добавите в корзину все необходимые товары, перейдите к ней нажав на кнопку «КОРЗИНА» в правом верхнем углу.</li>
            <li className={"helPage-listItem"}>Проверьте содержимое корзины и нажмите кнопку "Оформить заказ"</li>
            <li className={"helPage-listItem"}>Выберите самовывоз (если хотите забрать заказ самостоятельно) или же укажите адрес доставки, выберите удобный способ оплаты, и оставьте дополнительный комментарий (при наличии).</li>
            <li className={"helPage-listItem"}>Нажмите кнопку «ОФОРМИТЬ» и дождитесь звонка оператора-консультанта.</li>
         </ul>
        </div>
        <div className={"helPage-imgBox"}>
          <div className={"helPage-imgBoxInner"} >
            <img alt="img" src="https://mylittlekorea.com/cdn/shop/files/LaneigeNeoCushion_Glow_PDP_01.jpg?v=1688366004&width=528"/>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  )
} 

export default HelpPage;