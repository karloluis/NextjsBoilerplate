import React from 'react';

import { H1, H2, H3, H4, H5, H6, P, Strong, Italic, Link } from '../components/Typography';
import CoverBackground from '../components/Design/CoverBackground';
import TitleBlock from '../components/Design/TitleBlock';


// import { COLORS, TYPOGRAPHY, SPACING, TEXTSIZE } from '../lib/styles';

const Home = () => {
  return (
    <div>
      <span id="#" className="anchorOffset" />
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3</H3>
      <H4>H4</H4>
      <H5>H5</H5>
      <H6>H6</H6>
      <P>P</P>
      <P>
        <Strong>strong</Strong>
      </P>
      <P>
        <Italic>italic</Italic>
      </P>
      <P>
        <Link href="#">Link</Link>
      </P>
      <CoverBackground image="loader-reverse.svg" style={{ height: '600px' }} >
        <TitleBlock image="loader-reverse.svg"><H4>H4TitleBlock</H4></TitleBlock>
        <TitleBlock image="loader-reverse.svg"><H6>H6TitleBlock</H6></TitleBlock>
      </CoverBackground>

      <style jsx>
        {`
          .anchorOffset {
            display: block;
            position: relative;
            top: -20px;
            visibility: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
