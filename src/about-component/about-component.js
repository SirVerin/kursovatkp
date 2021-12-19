import React from 'react';
import img from './img.jpg' 
import './about.css';
const AboutComponent = () => {
    return (
        <>
       <img
      className="AboutImg"
      src={img}
      width="100%"
    />
 <h1 class = "T" >Про нас</h1>
 <div>
<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2188.8588009705777!2d24.709532596739663!3d48.91788997103343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16a5f4702e9%3A0xeedd9c30ee4526b!2z0LLRg9C70LjRhtGPINCE0LLQs9C10L3QsCDQmtC-0L3QvtCy0LDQu9GM0YbRjywgNSwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQuiwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1sru!2sua!4v1639834808937!5m2!1sru!2sua" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
<div className="about" >
<h1 >Прінт студія "Shazam"</h1>
<p className="text1" >Будь-які прінти на ваш одяг<br/>
м.Івано-Франківськ<br/>
Вул.коновальця 5<br/>

</p>

<p>
Пн-Сб 09:00-18:30 <br/>
Нд - Вихідний
</p>


<p>Тел. 0665847639
</p>
<br/>
<p><a className="socialMedia" href="https://www.instagram.com/">Наш instagram</a></p>

<p><a className="socialMedia"  href="https://www.facebook.com/">Наш facebook</a></p>
<br/><br/><br/><br/>


</div>
</div>
 </>
    );
};

export default AboutComponent;
