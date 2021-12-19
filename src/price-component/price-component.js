import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './price-component.css';
const PriceComponent = () => {
    return (
        <>


<div className = "tab">

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="Оплата">
    <div>
            <p className="text">Ми працюємо за повною та частковою передоплатою послуг.
Ви можете сплатити за послуги готівковим або безготівковим способом при оформленні та отриманні замовлення. 
Просто скажіть про це  під час оформлення замовлення.
Як тільки передоплата надійшла на рахунок, ми ставимо замовлення в чергу, 
і повідомляєм приблизну дату коли замовлення буде готово.</p>
        </div>
  </Tab>
  <Tab eventKey="profile" title="Повернення">
    <div>
            <p className="text">Заперечення щодо наданих послуг та повернення коштів можна обговорити за контактним телефоном.</p>
        </div>
  </Tab>
  <Tab eventKey="contact" title="Доставка" >
    <div>
            
            <p className="text"> Ми приймаємо та доставляємо замовлення кур'єрською службою Нова Пошта.
Доставка замовлень  за рахунок відправника.</p>
        </div>
  </Tab>
    <Tab eventKey="dostavka" title="Доставка+" >
    <div>
            
            <p className="text">Ви можете обрати свою службу доставки за умови узгодження з оператором та додаткової доплати</p>
        </div>
  </Tab>
</Tabs>
</div>
<div>

  <table border="1" width="90%" cellpadding="0">
  <h1>Ціни</h1>
   <tr>
    <th>Футболка</th>
    <th>300грн.</th>
   </tr>
   <tr>
    <th>Худі</th>
    <th>400грн.</th>
   </tr>
   <tr>
    <th>Світшот</th>
    <th>350грн.</th>
   </tr>
   <tr>
    <th>Пуховик</th>
    <th>500грн.</th>
   </tr>
   <h1>Додатки</h1>
   <tr>
    <th>Прінт з каталогу</th>
    <th>+50грн.</th>
   </tr>
   <tr>
    <th>Свій прінт</th>
    <th>+150грн.</th>
   </tr>

   
 </table>
<br/>
<br/>
</div>
        </>
    );
};

export default PriceComponent;