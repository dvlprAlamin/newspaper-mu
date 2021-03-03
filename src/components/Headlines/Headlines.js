// import { Typography } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './Headlines.css'
const Headlines = ({articles}) => {
    return (
        <ul>
            {
                articles.map(article => <li className="headline">
                    <a href={article.url}><Typography  gutterBottom variant="h6" component="h4">
                {article.title}
            </Typography></a>
                </li>)
            }
        </ul>
    );
};

export default Headlines;