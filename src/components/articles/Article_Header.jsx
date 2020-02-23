
import React from 'react';
import { css } from 'emotion'



const Article_Header = (props) => {
    return (
        <div>
            <header className={styles.title_holder}>
                <h1 className={styles.title}>{props.title}</h1>
                <h5 className={styles.description}> {props.description}</h5>
            </header>
        </div>
    )
}


const styles = {
    title_holder: css` 
        width: 100%;
        height: auto;
        background-color: black;
        color: white;
        `,
    title: css`
        text-align: left;
        padding-top: 10%;
        margin-top: 2%;
        margin-left: 10%;
        padding-left: 2%;
        font-family: 'Raleway',sans-serif;
        font-weight: 800;
        font-size: 35px;
        `,
    description: css`
        margin-left: 10%;
        padding-bottom: 10px;
        padding-left: 2%;
        font-family:  Montserrat,-apple-system,BlinkMacSystemFont,Segoe UI,Fira Sans,Helvetica Neue,Arial,sans-serif;
        font-weight: 600;
        font-size: 15px;
    `,
}

export default Article_Header;
