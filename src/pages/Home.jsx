import React, {useState} from 'react';
import '../styles/App.css';
import Card from "../components/Card";

function Home() {                //Все передается одним элементом на отрисовку в компонент Card, в элементе название, описание и имя файла. Позже можно будет спокойно переделать под докер
    const [cards, setCards] = useState([

        {title: "Бойцовский клуб", body: "Сотрудник страховой компании страдает хронической бессонницей " +
                "и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной командировке " +
                "он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с извращенной философией. " +
                "Тайлер уверен, что самосовершенствование — удел слабых, а единственное, ради чего стоит жить — " +
                "саморазрушение.\n" +
                "\n" +
                "Проходит немного времени, и вот уже новые друзья лупят друг друга почем зря на стоянке перед " +
                "баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к простым " +
                "радостям физической жестокости, они основывают тайный Бойцовский клуб, который начинает пользоваться " +
                "невероятной популярностью.", img_id: "fight_club.jpg", id:"fc"},

        {title: "Пила 5", body: "Один из последователей маньяка-убийцы Пилы, Марк Хоффман, следуя заветам своего " +
                "кровавого гуру, готовит очередную смертельную головоломку. Тем временем агент Страм начинает " +
                "догадываться о связи Хоффмана с Пилой, и Хоффману приходится выйти на новую охоту, чтобы уничтожить " +
                "все ниточки, ведущие к нему.\n" +
                "\n" +
                "Пятерых незнакомых друг с другом людей уже ждёт жестокий урок командной игры на выживание — " +
                "ещё больше крови, ещё изощреннее ловушки… Страм идёт по следам Хоффмана, пытаясь докопаться до причин, " +
                "по которым он присоединился к Пиле.", img_id: "saw.jpeg", id:"sw"},

        {title: "Дюна", body: "Наследник знаменитого дома Атрейдесов Пол отправляется вместе с семьей на " +
                "одну из самых опасных планет во Вселенной — Арракис. Здесь нет ничего, кроме песка, палящего " +
                "солнца, гигантских чудовищ и основной причины межгалактических конфликтов — невероятно ценного " +
                "ресурса, который называется меланж. В результате захвата власти Пол вынужден бежать и " +
                "скрываться, и это становится началом его эпического путешествия. Враждебный мир Арракиса " +
                "приготовил для него множество тяжелых испытаний, но только тот, кто готов взглянуть в глаза " +
                "своему страху, достоин стать избранным.", img_id: "dune.jpg", id:"dn"},
    ])

  return (  //отрисовка заголовка сайта и чтение элемента, которая инфа для карточки фильма (компонент Card)
    <div className="Home">
        <div className="head"><b>BRUH Cinema</b></div>
        {cards.map(card =>
            <Card card={card} key={card.id}/>
        )}
    </div>
  );
}

export default Home;