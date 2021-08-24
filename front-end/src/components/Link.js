import { Link as ReactLink } from 'react-router-dom';

const Link = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <ReactLink to={href}>
        <a {...rest} />
      </ReactLink>
    );
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />;
};

export default Link;
