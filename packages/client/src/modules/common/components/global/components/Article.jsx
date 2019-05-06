import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import settings from '../../../../../../../../settings';
import '../styles/modules/article.scss';

class Article extends React.Component {
  state = {
    width: null,
    height: null
  };
  componentDidMount() {
    this.measureArticle();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.measureArticle, false);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width || this.state.height !== nextState.height;
  }
  componentDidUpdate() {
    this.measureArticle();
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.measureArticle, false);
    }
  }
  saveRef = ref => (this.containerNode = ref);
  measureArticle = () => {
    const { clientWidth, clientHeight } = this.containerNode;
    this.setState({
      width: clientWidth,
      height: clientHeight
    });
  };
  getDescription = description => {
    return description.split('\n').map((i, key) => {
      return (
        <div key={key}>
          {i}
          <br />
        </div>
      );
    });
  };

  render() {
    const { article } = this.props;
    console.log('article', article);
    const { width } = this.state;
    return (
      <section
        ref={this.saveRef}
        className={classnames(
          'article',
          {
            'article--xsmall': width < settings.breakpoints.small
          },
          {
            'article--small': width < settings.breakpoints.medium && width >= settings.breakpoints.small
          },
          {
            'article--medium': width < settings.breakpoints.large && width >= settings.breakpoints.medium
          },
          {
            'article--large': width >= settings.breakpoints.large
          }
        )}
      >
        {'article' in this.props ? (
          <article>
            {article.title ? (
              <header className="header header--primary article__title article__title--centered">
                <h2>{article.title}</h2>
              </header>
            ) : null}
            <div>
              {'paragraphs' in article && article.paragraphs.length > 0
                ? article.paragraphs.map((paragraph, i) => (
                    <p key={i} className="article__paragraph">
                      {paragraph}
                    </p>
                  ))
                : null}
              {'locationInfo' in article ? (
                <div>
                  <h6 className="header header--secondary">Address: </h6>
                  <address>
                    <div>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://www.google.com/maps/dir/?api=1&destination=${article.locationInfo.street.replace(
                          ' ',
                          '+'
                        )}+${article.locationInfo.city.replace(' ', '+')}+${article.locationInfo.country.replace(
                          ' ',
                          '+'
                        )}`}
                      >
                        {article.locationInfo.street}
                      </a>
                    </div>
                    <div>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={`https://www.google.com/maps/dir/?api=1&destination=${article.locationInfo.street.replace(
                          ' ',
                          '+'
                        )}+${article.locationInfo.city.replace(' ', '+')}+${article.locationInfo.country.replace(
                          ' ',
                          '+'
                        )}`}
                      >
                        {article.locationInfo.city}, {article.locationInfo.state} {article.locationInfo.zip}
                      </a>
                    </div>
                    {'phone' in article.locationInfo ? (
                      <div>
                        <h6 className="header header--secondary">Phone: </h6>
                        <a href={`tel:${article.locationInfo.phone}`}>{article.locationInfo.phone}</a>
                      </div>
                    ) : null}
                    {'hours' in article.locationInfo && article.locationInfo.hours !== '' ? (
                      <div>
                        <h6 className="header header--secondary">Hours: </h6>
                        {article.locationInfo.hours}
                      </div>
                    ) : null}
                    {'email' in article.locationInfo && article.locationInfo.email !== '' ? (
                      <div>
                        <h6 className="header header--secondary">Email: </h6>
                        <a href={`mailto:${article.locationInfo.email}`}>{article.locationInfo.email}</a>
                      </div>
                    ) : null}
                  </address>
                  {'description' in article.locationInfo && article.locationInfo.description !== '' ? (
                    <div>
                      <h6 className="header header--secondary">About: </h6>
                      <p>{this.getDescription(article.locationInfo.description)}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </article>
        ) : (
          <span>No article to display</span>
        )}
      </section>
    );
  }
}

Article.propTypes = {
  article: PropTypes.object
};

Article.defaultProps = {
  article: {
    title: 'Lorem Ipsum',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque dignissim enim sit amet. Tincidunt id aliquet risus feugiat in ante metus dictum. Sed sed risus pretium quam vulputate dignissim suspendisse in. Vitae congue mauris rhoncus aenean. Est lorem ipsum dolor sit. Ante metus dictum at tempor commodo. Sed augue lacus viverra vitae congue eu consequat ac felis. Mauris sit amet massa vitae tortor condimentum. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.',
      'Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Cursus mattis molestie a iaculis. Morbi tristique senectus et netus et malesuada fames ac turpis. Egestas purus viverra accumsan in nisl. Leo in vitae turpis massa sed elementum tempus. Consequat mauris nunc congue nisi vitae. Congue quisque egestas diam in arcu cursus euismod quis viverra. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Aliquet porttitor lacus luctus accumsan tortor posuere. Fusce ut placerat orci nulla pellentesque. Turpis egestas maecenas pharetra convallis posuere morbi leo. Sed vulputate odio ut enim blandit volutpat.'
    ]
  }
};

export default Article;
