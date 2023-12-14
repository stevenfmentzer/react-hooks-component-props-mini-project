import React from "react";

function Article( {title, preview, minutes, date="January 1, 1970"}){ 

    console.log(minutes)
    const [char, operator] = minutes < 30 ? ["☕️", 5] : ["🍱", 10];
    const timeToRead = Math.ceil(minutes/operator);
    const repeatedString = char.repeat(timeToRead);

    return(
        <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <small>{` - ${repeatedString} ${minutes} min read`}</small>
        <p>{preview}</p>
        </article>
    );
}

export default Article;