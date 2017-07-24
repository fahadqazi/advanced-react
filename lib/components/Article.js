import React from 'react';

const styles = {
  article: {
    paddingBottom: 10,
    
  }
};

const Article = (props) => {
  const { article, author } = props;
  return(
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{article.date}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

export default Article;