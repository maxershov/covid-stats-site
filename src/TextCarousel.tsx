import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
// import '.react-responsive-carousel/lib/styles/main.css';


const TextCarousel: React.FC = () => {
    return (
        <div className="textCarousel">
            <h2>Рекомендации по защите:</h2>
            <Carousel infiniteLoop useKeyboardArrows showStatus={false} autoPlay interval={7000} showThumbs={false} showArrows={false}>
                <div>
                    <h3>Регулярно мойте руки</h3>
                    <p>Регулярно обрабатывайте руки спиртосодержащим средством или мойте их с мылом.
                    Если на поверхности рук присутствует вирус, то обработка рук спиртосодержащим средством или мытье их с мылом убьет его.</p>
                </div>
                <div>
                    <h3>Соблюдайте дистанцию в общественных местах</h3>
                    <p>Держитесь от людей на расстоянии как минимум 1 метра, особенно если у них кашель, насморк и повышенная температура.
                    Кашляя или чихая, человек, болеющий респираторной инфекцией, распространяет вокруг себя мельчайшие
                    капли, содержащие вирус.
                    Если вы находитесь слишком близко к такому человеку, то можете заразиться вирусом при вдыхании воздуха.</p>
                </div>
                <div>
                    <h3>По возможности, не трогайте руками глаза, нос и рот</h3>
                    <p>Руки касаются многих поверхностей, на которых может присутствовать вирус. Прикасаясь содержащими инфекцию руками к
                    глазам, носу или рту, можно перенести вирус с кожи рук в организм.</p>
                </div>
                <div>
                    <h3>Соблюдайте правила респираторной гигиены</h3>
                    <p>При кашле и чихании прикрывайте рот и нос салфеткой или сгибом локтя; сразу выкидывайте салфетку в контейнер
                    для мусора с крышкой и обрабатывайте руки спиртосодержащим антисептиком или мойте их водой с мылом.
                    Если при кашле или чихании прикрывать нос и рот рукой, микробы могут попасть
                    на ваши руки, а затем на предметы или людей, к которым вы прикасаетесь.</p>
                </div>
                <div>
                    <h3>При повышении температуры, появлении кашля и затруднении дыхания как можно быстрее обращайтесь за медицинской помощью</h3>
                    <p>Симптомы поражения органов дыхания в сочетании с повышением
                    температуры могут иметь самые различные причины, среди которых в зависимости от совершенных пациентом поездок и его контактов может
                     быть COVID-19.</p>
                </div>
                <div>
                    <h3>Следите за новейшей информацией и выполняйте рекомендации медицинских специалистов</h3>
                    <p>Следите за новейшей информацией о COVID-19. Выполняйте рекомендации специалистов, центральных и
                    местных органов общественного здравоохранения, а также организации, в которой вы работаете, по защите себя и
                     окружающих от COVID-19.</p>
                </div>
            </Carousel>
        </div>
    )
}

export default TextCarousel;