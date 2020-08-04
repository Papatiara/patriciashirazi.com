import React from 'react';

import { css } from 'emotion'





const Video = () => {
    return (

        <div className={styles.video_container} >
            <iframe src='https://youtube.com/embed/q96JJLHvH0Q'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
            className={styles.video}
            />
        </div >


    )
}

const styles = {
    video_container: css` 
    // border: 3px solid black;
    display: flex;
    justify-content: center;
`,
    video: css`
    width: 500px;
    height: 300px;
    `
}

export default Video;
