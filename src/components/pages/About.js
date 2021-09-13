import React from 'react';
import Header from '../layout/Header';
import Tab from '../layout/Tab';
import Footer from '../layout/Footer';
import SmallTab from '../layout/SmallTab';

function About() {
  return (
        <React.Fragment>
           <div className="advert">
           <SmallTab />
           </div>
            <div className="advert">
            <Header />
           </div>
            <Tab />
            <div style={{ padding: '3% 8%' }}>
            <h1>ABOUT AHAZAZA</h1>
            <p>AHAZAZA is a private Rwandan company with a vision of becoming a regional multimedia powerhouse specialised in providing media & online multimedia services, public relations and communications consultancies.

From humble beginnings in 2021, with its inaugural product the popular AHAZAZA website [AHAZAZA.com]- the company has since grown to offer a wide range of multimedia services including website designs, content development and hosting, videography and photography services,e.t.c

To this end, for the relatively short period AHAZAZA has been operational, it became the leading online publishing company in Rwanda with a vast experience in multimedia works.
            </p>
            </div>
            <Footer />
        </React.Fragment>
  );
}
export default About;
