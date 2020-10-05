import React from 'react';
import Img from 'gatsby-image';
import dayjs from 'dayjs';

const EventListItem = ({ item, index }) => {
  return (
    <div className="col-md-4 d-flex">
      <div className="blog-entry align-self-stretch">
        <Img
          className="block-20"
          fluid={item.image.childImageSharp.fluid}
          alt={item.title}
        />
        <div className="text py-4 d-block">
          <div className="meta">
            <div>
              <a href="blank.html">{dayjs(item.date).format('MMM DD, YYYY')}</a>
            </div>
          </div>
          <h3 className="heading mt-2">{item.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: item.body }} />
        </div>
      </div>
    </div>
  );
  // return index % 2
  //   ? (
  //       <div className="row justify-content-center no-gutters mb-5 mb-lg-0" id={item.id}>
  //         <div className="col-lg-6">
  //           <Img fluid={item.image.childImageSharp.fluid} alt={item.title} />
  //         </div>
  //         <div className="col-lg-6">
  //           <div className="bg-black text-center h-100 project">
  //             <div className="d-flex h-100">
  //               <div className="project-text w-100 my-auto text-center text-lg-left">
  //                 <h4 className="text-white">
  //                   {item.title}
  //                 </h4>
  //                 <div className="mb-0 text-white-50" dangerouslySetInnerHTML={{ __html: item.body }} />
  //                 <hr className="d-none d-lg-block mb-0 ml-0" />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     )
  //   : (
  //     <div className="row justify-content-center no-gutters" id={item.id}>
  //       <div className="col-lg-6">
  //         <Img fluid={item.image.childImageSharp.fluid} alt={item.title} />
  //       </div>
  //       <div className="col-lg-6 order-lg-first">
  //         <div className="bg-black text-center h-100 project">
  //           <div className="d-flex h-100">
  //             <div className="project-text w-100 my-auto text-center text-lg-right">
  //               <h4 className="text-white">
  //                 {item.title}
  //               </h4>
  //               <div className="mb-0 text-white-50" dangerouslySetInnerHTML={{ __html: item.body }} />
  //               <hr className="d-none d-lg-block mb-0 mr-0" />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
};

export default EventListItem;
