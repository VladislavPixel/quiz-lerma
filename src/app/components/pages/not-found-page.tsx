import React from 'react';
import { Skeleton } from '../common/skeleton';
import { Footer } from '../common/footer';

const NotFoundPage = () => {
   return (
      <Skeleton isSidebar={true} classesParent='not-found'>
         <React.Fragment>
            <div className='not-found__main-section section-main-not-found'>
               
            </div>
            <Footer classesParent='not-found' />
         </React.Fragment>
      </Skeleton>
   );
};

export { NotFoundPage };
