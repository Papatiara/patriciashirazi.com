import React, { useEffect } from 'react';
import { css } from 'emotion'
import Article_Header from './Article_Header';
import { withRouter } from "react-router-dom";


import aprendiz from "../../images/aprendiz.png";

const title = "APRENDIZ LEGAL";
const description = "My trajectory of helping more than five hundred students in Brazil to get into the workforce.";


const Math_text = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const backHome = () => {
        props.showMath(false)
        props.history.push('/home')
    }
    return (
        <article>
            <Article_Header title={title} description={description} />
            <p className={styles.backHome} onClick={() => backHome()}>Patricia's Portfolio</p>
            <div className={styles.body}>
                <section>
                    <p> After a couple of years teaching in high school those classic Math subjects, such as trigonometry and function, an opportunity to get involved in something bigger was opened to me. On this new adventure, I could not only teach Math topics but also help underprivileged young adults to get into the workforce.</p>
                </section>
                <img className={styles.image} src={aprendiz} />
                <section>
                    <p> <a href="https://www.chegadetrabalhoinfantil.org.br/trabalho-infantil/estatisticas/">Child Labor</a> is still a sad reality in Brazil. Kids and teenagers are explored and obligated to work for hours, 
                        sometimes in extreme conditions, private of studying or play, without any laws to protect them.  Aprendiz Legal  does an amazing job allowing young adults on ages between 14 and 24 years old, get their first job with all the rights. 
                        So that way, they will have time to study and all the support a young student needs to have great development. </p>
                    <p>As an educator in CIEE, I  had the pleasure to help those students from poor communities land their first opportunity. Understanding they could keep providing for themselves and help their families, and still be at school having a quality of life and work was gratifying.</p>
                </section>
                <section>
                    <h3>If you want to know a little more how Aprendiz Legal works, check this out:</h3>
                    <a href={"https://portal.ciee.org.br/empresas/programa-aprendiz-legal/"}> APRENDIZ LEGAL</a>
                </section>
            </div>
        </article>
    )
}

const styles = {
    title_holder: css` 
        width: 100%;
        height: 180px;
        background-color: black;
        color: white;
        `,
    title: css`
        padding-top: 25px;
        padding-left: 48px;
        font-family: 'Raleway',sans-serif;
        font-weight: 800;
        font-size: 35px;
        `,
    description: css`
        padding-left: 48px;
        font-family:  Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Fira Sans,Helvetica Neue,Arial,sans-serif;
        font-weight: 600;
        font-size: 15px;
    `,
    body: css`
        padding-top: 25px;
        padding-left: 48px;
    `,
    backHome: css`
        margin-top: 15px;
        padding-left: 48px;
        cursor: pointer;
        &:hover {
            font-weight: bold;
            color: #008080;
            font-size: 18px;
        }
    `,
    image: css`
        width: 60%;
        height: auto;
        margin-right: 5%;
        margin-left: 5%;
    `
}

export default withRouter(Math_text);